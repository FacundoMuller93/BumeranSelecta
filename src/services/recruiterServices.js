import axios from "axios"

export const allRecruitersServices = async () => {
  const allRecruiters = await axios({
    method: "GET",
    // withCredentials: true,
    url: "http://localhost:3001/api/recruiter/",
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
    const deleteRecruiter = await axios.delete(`http://localhost:3001/api/recruiter/${id}`
    )
    return deleteRecruiter.data
  }
