import storage from './storage'

const key = 'HAOKE_ZUFANG'

const getToken = () => storage.getToken(key)

const setToken = (value) => storage.setToken(key, value)

const removeToken = () => storage.removeToken(key)

export { getToken, setToken, removeToken }
