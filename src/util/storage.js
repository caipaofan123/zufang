class Storage {
  getToken(key) {
    const value = localStorage.getItem(key)
    try {
      return JSON.parse(value)
    } catch (error) {
      return value
    }
  }

  setToken(key, payload) {
    if (typeof payload === 'object') {
      payload = JSON.stringify(payload)
    }
    localStorage.setItem(key, payload)
  }

  removeToken(key) {
    localStorage.removeItem(key)
  }
}

const storage = new Storage()

export default storage
