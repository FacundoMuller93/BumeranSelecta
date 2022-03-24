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
  return loginUser
}

export const userLogoutService = async () => {
  const logoutUser = await axios.post("http://localhost:3001/api/user/logout")
  return logoutUser
}

export const persistUserService = async () => {
  const persist = await axios.get("http://localhost:3001/api/user/me")
  return persist
}