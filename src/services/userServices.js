import axios from "axios"

export const userLoginService = async ({ email, password }) => {
    const loginUser = await axios({
        method: "POST",
        data: { email, password },
        // withCredentials: true,
        url: "http://localhost:"
    })
    return loginUser
}

export const userLogoutService = async () => {
    const logoutUser = await axios({
        method: "POST",
        // withCredentials: true,
        url: "http://localhost:"
    })
    return logoutUser
}

export const persistUserService = async () => {
    const persist = await axios({
        method: "GET",
        // withCredentials: true,
        url: "http://localhost:"
    })
    return persist
}