export enum THEME {
    LIGHT = "light",
    DARK = "dark"
}

export const DEFAULT_CANVAS = '{"lines":[],"width":400,"height":400}';

export interface GetWordOfDayRequest {
    userId: number,
}

export interface PostDrawingRequest {
    drawing: string,
    userId: number,
    wordId: number,
    date: Date,
    token: string,
}

export interface LoginRequest {
    username: string,
    password: string,
}

export interface SignUpRequest {
    username: string,
    password: string,
}

export interface GetDrawingRequest {
    userId: number,
    wordId: number,
}

export interface GetPostsRequest {
    limit: number,
    offset: number,
    userId: number,
}

export interface ChangePostLikeRequest {
    drawingId: number,
    likeValue: boolean,
    userId: number,
    token: string,
}