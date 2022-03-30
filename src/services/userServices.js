import axios from "axios"

export const userRegisterService = async ({
  firstName,
  surname,
  age,
  country,
  email,
  password,
}) => {
  const register = await axios.post("http://localhost:3001/api/user/register", { firstName: firstName, surname: surname, age: age, country: country, email: email, password: password })
  return register.data
}

export const userLoginService = async ({ email, password }) => {
  const loginUser = await axios.post("http://localhost:3001/api/user/login", { email, password })
  return loginUser.data
}

export const userLogoutService = async () => {
  const logoutUser = await axios.post("http://localhost:3001/api/user/logout")
  return logoutUser.data
}

export const getUserService = async ({ email }) => {
  const getUser = await axios.get(`http://localhost:3001/api/user/find/${email.value}`)
  console.log("AXIOS_USER", getUser)
  return getUser.data
}