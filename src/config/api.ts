import axios from "axios";


export const getWordOfDay = () => {
    return axios.get(
            "http://localhost:3001/api/getWordOfDay"
        )
}