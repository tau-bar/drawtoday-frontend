export enum THEME {
    LIGHT = "light",
    DARK = "dark"
}

export const DEFAULT_CANVAS = '{"lines":[],"width":400,"height":400}';

export interface PostDrawingRequest {
    drawing: string,
    userId: number,
    wordId: number,
    date: Date,
}