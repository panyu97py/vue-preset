import request from "@/utils/request";
import * as requestMethod from '@/constant/requestMethod'

export const login = ({username, password} = {}) => {
    return request({
        url: 'url',
        method: requestMethod.POST,
        data: {
            username,
            password
        }
    })
}
