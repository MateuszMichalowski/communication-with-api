import axios from "@/api/axiosConfig";

import { SW_PEOPLE } from "@/api/api_endpoints";

export const getAllSWPeople = () => {
    return axios.get(SW_PEOPLE)
}

export const getSWPeopleById = (resourceId) => {
    return axios.get(`${SW_PEOPLE}/${resourceId}`)
}
