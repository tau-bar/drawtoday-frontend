import { create } from "apisauce";
import axios from "axios";
import { LoginRequest, PostDrawingRequest, SignUpRequest } from "./constants";

export const getWordOfDay = () => {
    return axios.get("http://localhost:3001/api/getWordOfDay");
};

export const api = create({
    baseURL: 'http://localhost:3001',
    headers: { Accept: 'application/vnd.github.v3+json' },
})


const header = {
    "content-type": "application/json",
}

export const postUserDrawing = async (data: PostDrawingRequest) => {
    return await api.post("api/postDrawing", data)
};

export const login = async (data: LoginRequest) => {
    return await api.post("/api/login", data)
};

export const signUpRequest = async (data: SignUpRequest) => {
    return await api.post("/api/signup", data)
} 
