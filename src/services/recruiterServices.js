import axios from "axios"

export const allRecruitersServices = async () => {
  const allRecruiters = await axios({
    method: "GET",
    // withCredentials: true,
    url: `https://fakestoreapi.com/users`,
  })
  return allRecruiters.data
}

export const singleRecruiterServices = async id => {
  const singleRecruiter = await axios({
    method: "GET",
    // withCredentials: true,
    url: `http://${id}`,
  })
  return singleRecruiter
}

export const editRecruiterServices = async id => {
  const editRecruiter = await axios({
    method: "PUT",
    data: {},
    // withCredentials: true,
    url: `http://${id}`,
  })
  return editRecruiter
}

export const deleteRecruiterServices = async id => {
    const deleteRecruiter = await axios({
      method: "DELETE",
      // withCredentials: true,
      url: `http://${id}`,
    })
    return deleteRecruiter
  }
