import axios from "axios"

export const userRegisterService = async ({
  firstName,
  surname,
  age,
  country,
  email,
  password,
//   admin,
}) => {
  const register = await axios({
    method: "POST",
    data: { firstName: firstName, surname: surname, age: age, country: country, email: email, password: password },
    // withCredentials: true,
    url: "http://localhost:3001/api/user/register",
  })
  return register
}

export const userLoginService = async ({ email, password }) => {
  const loginUser = await axios({
    method: "POST",
    data: { email, password },
    // withCredentials: true,
    url: "http://localhost:3001/api/user/login",
  })
  return loginUser
}

export const userLogoutService = async () => {
  const logoutUser = await axios({
    method: "POST",
    // withCredentials: true,
    url: "http://localhost:3001/api/user/logout",
  })
  return logoutUser
}

export const persistUserService = async () => {
  const persist = await axios({
    method: "GET",
    // withCredentials: true,
    url: "http://localhost:3001/api/user/me",
  })
  return persist
}
