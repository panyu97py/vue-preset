import {NO_AUTHENTICATION_URL_LIST} from "@/config/api";

/**
 * 申请请求的唯一标识
 * @param config
 * @returns {string}
 */
export const generatorRequestKey = (config) => {
    return `${config.url}_${config.method}`
}
/**
 * 判断是否需要携带 token
 * @param url
 * @returns {boolean}
 */
export const oauthJudge = ({url} = {}) => {
    return !NO_AUTHENTICATION_URL_LIST.some(item => (item.test(url)))
}
