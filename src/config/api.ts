import axios from "axios";
import * as data from "../"
import { PostDrawingRequest } from "./constants";


export const getWordOfDay = () => {
    return axios.get(
            "http://localhost:3001/api/getWordOfDay"
        )
}

export const postUserDrawing = (data: PostDrawingRequest) => {
    return axios.request({
        method: 'POST',
        url: "http://localhost:3001/api/postDrawing",
        headers: {
            'content-type': 'application/json',
        },
        data: data,
      });
}