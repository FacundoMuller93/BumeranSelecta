import axios from "axios"


//reclutadores por área ordenados por rating
export const getRecruitersPerArea = async ({areaValue, country}) => {
    try {
      const recruitersPerArea = await axios.post(
        "http://localhost:3001/api/reports/recruitersArea", {
            areaValue : areaValue,
            country: country
          }
        
      )
      console.log("Por Area", getRecruitersPerArea)
      return recruitersPerArea.data.slice(0, 10)
    } catch (error) {
      throw error
    }
  }


  //ranking general de reclutadores ordenados por rating
  export const topRecruiters = async () => {
    try {
      const topRecruiters = await axios.get(
        "http://localhost:3001/api/reports/topRecruiters"
      )
      return topRecruiters.data.slice(0, 10)
    } catch (error) {
      throw error
    }
  }
  