export default interface MediaFields {
    name: string;
    year: number;
    genre?: string[] | null;
    // src: string;
    seen?: boolean;
    rating?: number | null;
    commentary?: string;
    nominated?: boolean;
    won?: boolean;
    seasons?: number;
    platforms?: string[] | null;
};