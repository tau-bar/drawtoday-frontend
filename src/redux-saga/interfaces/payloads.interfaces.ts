import * as data from "../interfaces/data.interfaces";

export interface ThemePayload {
    mode: string;
}

export interface GetWordOfDayPayload {
    userId: number
}

export interface WordPayload {
    word: {
        word: string,
        id: number
    },
    postedToday: boolean
}

export interface DraftPayload {
    drawing: string;
    date: Date;
}

export interface PostDrawingPayload {
    drawing: string;
    wordId: number;
    userId: number;
    date: Date;
    authentication: data.AuthenticationData;
}

export interface LoginPayload {
    username: string;
    password: string;
}

export interface LoginSuccessPayload {
    userId: number;
    token: string;
}

export interface SignUpPayload {
    username: string,
    password: string,
}

export interface SignUpSuccessPayload {
    userId: number;
    token: string;
}

export interface GetDrawingPayload {
    userId: number;
    wordId: number;
}

export interface GetDrawingSuccessPayload {
    drawing: string;
}

export interface GetPostsPayload {
    userId: number;
    offset: number;
    limit: number;
}

export interface GetPostsSuccessPayload {
    posts: data.Post[]
}

export interface ChangePostLikePayload {
    likeValue: boolean;
    drawingId: number;
    userId: number;
    authentication: data.AuthenticationData;
}