import axios from "@/api/axiosConfig";

import { SW_STARSHIPS } from "@/api/api_endpoints";

export const getAllSWStarships = () => {
    return axios.get(SW_STARSHIPS)
}

export const getSWStarshipById = (resourceId) => {
    return axios.get(`${SW_STARSHIPS}/${resourceId}`)
}