import axios from "axios"


//reclutadores por área ordenados por rating
export const getRecruitersPerArea = async (areaValue) => {
    console.log(areaValue)
    try {
      const recruitersPerArea = await axios.post(
        "http://localhost:3001/api/reports/recruitersArea", {
            areaValue : areaValue}
        
      )
      return recruitersPerArea.data
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
      return topRecruiters.data
    } catch (error) {
      throw error
    }
  }