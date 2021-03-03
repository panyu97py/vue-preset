import axios, {CancelToken} from 'axios'
import $store from '@/store'
import {generatorRequestKey, oauthJudge} from './utils'
import {REQUEST_BASE_URL,TIMEOUT} from '@/config/api'

// 请求队列
const queue = new Map()


const request = axios.create({
    baseURL: REQUEST_BASE_URL,
    timeout: TIMEOUT
})

// 请求拦截器
request.interceptors.request.use(
    config => {

        // 生成请求 key
        const requestKey = generatorRequestKey(config)

        // token
        const token = $store.getters.token

        // 判断接口，携带token
        if (token && oauthJudge(config)) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        // 判断请求队列中是否存在相同请求，存在则取消
        queue.has(requestKey) && queue.get(requestKey).cancel()

        // 生成 cancelToken
        config.cancelToken = new CancelToken((cancel) => {
            queue.set(requestKey, cancel)
        })


        // 返回配置，发起请求
        return config
    },
    err => Promise.reject(err)
)

// 响应拦截器
request.interceptors.response.use(
    response => {
        const {config, data} = response

        // 生成请求 key
        const requestKey = generatorRequestKey(config)

        // 请求成功，从队列中移除
        queue.delete(requestKey)

        //返回结果（data返回存在统一的数据格式，可以在此之前在做一次数据解析）
        return data
    },
    err => {
        return Promise.reject(err)
    }
)
export default request
