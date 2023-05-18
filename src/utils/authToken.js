const getUserToken = () => {
  console.log('Getting Token')
    return localStorage.getItem('token')
}

const setUserToken = (token) => {
  console.log('Setting Token')
  console.log(token, 'set token')
    return localStorage.setItem('token', token)
}

const clearUserToken = () => {
  console.log('Clear Token')
  return localStorage.setItem('token', "")
}

export {getUserToken, setUserToken, clearUserToken}