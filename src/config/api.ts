import { create } from "apisauce";
import { ChangePostLikeRequest, GetDrawingRequest, GetPostsRequest, GetWordOfDayRequest, LoginRequest, PostDrawingRequest, SignUpRequest } from "./constants";

const header = {
    "content-type": "application/json",
}

export const api = create({
    baseURL: 'https://drawtoday-server.herokuapp.com',
    headers: header,
})

// export const api = create({
//     baseURL: 'http://localhost:3001',
//     headers: header,
// })

export const getWordOfDay = (data: GetWordOfDayRequest) => {
    return api.get("/api/getWordOfDay", data);
};

export const postUserDrawing = async (data: PostDrawingRequest) => {
    api.setHeaders({
        "Authorization": `Bearer ${data.token}`
    })
    return await api.post("api/postDrawing", data)
};

export const login = async (data: LoginRequest) => {
    return await api.post("/api/login", data)
};

export const signUpRequest = async (data: SignUpRequest) => {
    return await api.post("/api/signup", data)
}

export const getDrawing = async (data: GetDrawingRequest) => {
    return await api.get("/api/getDrawing", data);
}

export const getPostsData = async (data: GetPostsRequest) => {
    return await api.get("/api/getPosts", data);
}

export const changePostLikeRequest = async (data: ChangePostLikeRequest) => {
    api.setHeaders({
        "Authorization": `Bearer ${data.token}`
    })
    return await api.put("/api/likePost", data);
}
