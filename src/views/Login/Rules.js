const usernameRules = [
  { required: true, message: '请输入账号' },
  { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '账号格式不正确哟!' }
]
const passwordRules = [
  { required: true, message: '请输入密码' },
  {
    pattern: /^[0-9]{6}$/,
    message: '密码格式不正确哟!'
  }
]
export { usernameRules, passwordRules }
