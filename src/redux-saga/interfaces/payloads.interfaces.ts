
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