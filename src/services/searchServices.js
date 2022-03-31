import axios from "axios"

export const allSearchServices = async () => {
    const allSearch = await axios({
        method: "GET",
        // withCredentials: true,
        url: "http://localhost:3001/api/search",
    })
    return allSearch.data
}

export const deleteSearchServices = async id => {
    const deleteSearch = await axios.delete(`http://localhost:3001/api/search/${id}`
    )
    return deleteSearch.data
}

export const addSearchServices = async ({ description_search, country, area_search, position, vacancies, lapse_search }) => {
    console.log("ESTA ES LA DATA QUE LLEGA AL SERVICE",{
            description_search: description_search,
        country: country,
        area_search: area_search,
        position: position,
        vacancies: vacancies,
        lapse_search: lapse_search
        } )
    const addSearch = await axios.post('http://localhost:3001/api/search/add',
        {
            description_search: description_search,
            country: country,
            area_search: area_search,
            position: position,
            vacancies: vacancies,
            lapse_search: lapse_search
        })
    return addSearch.data
}
