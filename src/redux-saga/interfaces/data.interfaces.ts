export interface Error {
    message?: string;
}

export interface AuthenticationData {
    token: string;
}

export interface Post {
    drawing: string,
    username: string,
    word: string,
    likes: number,
    userId: number,
    drawingId: number,
    liked: number
}