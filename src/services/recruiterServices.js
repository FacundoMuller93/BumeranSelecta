import axios from "axios";

export const allRecruitersServices = async () => {
  const allRecruiters = await axios({
    method: "GET",
    // withCredentials: true,
    url: "http://localhost:3001/api/recruiter/",
  });
  return allRecruiters.data;
};

export const singleRecruiterServices = async (id) => {
  const singleRecruiter = await axios.get(
    `http://localhost:3001/api/recruiter/${id}`
  );
  return singleRecruiter.data;
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
};

export const deleteRecruiterServices = async (id) => {
  const deleteRecruiter = await axios.delete(
    `http://localhost:3001/api/recruiter/${id}`
  );
  return deleteRecruiter.data;
};

export const addRecruiterServices = async ({
  name,
  surname,
  country,
  description_rec,
  area_rec,
}) => {
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
};
