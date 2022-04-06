import axios from "axios";

export const allRecruitersServices = async () => {
  try {
    const allRecruiters = await axios.get("http://localhost:3001/api/recruiter/");
    return allRecruiters.data;
  }
  catch (error) {
    throw error
  }
};

export const singleRecruiterServices = async (id) => {
  try {
    const singleRecruiter = await axios.get(
      `http://localhost:3001/api/recruiter/${id}`
    );
    return singleRecruiter.data;
  }
  catch (error) {
    throw error
  }
};

export const editRecruiterServices = async ({
  id,
  name,
  surname,
  country,
  description_rec,
  area_rec,
  rating,
}) => {
  try {
    const editRecruiter = await axios.put(
      `http://localhost:3001/api/recruiter/${id}`,
      {
        name: name,
        surname: surname,
        country: country,
        description_rec: description_rec,
        area_rec: area_rec,
        rating: rating,
      }
    );
    return editRecruiter.data;
  }
  catch (error) {
    throw error
  }
};

export const deleteRecruiterServices = async (id) => {
  try {
    const deleteRecruiter = await axios.delete(
      `http://localhost:3001/api/recruiter/${id}`
    );
    return deleteRecruiter.data;
  }
  catch (error) {
    throw error
  }
};

export const addRecruiterServices = async ({
  name,
  surname,
  country,
  description_rec,
  area_rec,
}) => {
  try {
    const addRecruiter = await axios.post(
      "http://localhost:3001/api/recruiter/add",
      {
        name: name,
        surname: surname,
        country: country,
        description_rec: description_rec,
        area_rec: area_rec,
      }
    );
    return addRecruiter.data;
  }
  catch (error) {
    throw error
  }
};
