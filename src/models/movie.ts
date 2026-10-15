export default interface Movie {
    id: number,
    name: string,
    genre: string[],
    src: string,
    leadActors: string[],
    seen: boolean,
    rating: number | null,
    commentary: string,
};