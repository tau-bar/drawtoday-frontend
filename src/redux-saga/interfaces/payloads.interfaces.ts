export interface ThemePayload {
    mode: string;
}

export interface WordPayload {
    word: string;
    id: number;
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