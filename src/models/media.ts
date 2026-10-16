export default interface Media {
    id: number,
    name: string,
    type: string,
    year: number,
    genre: string[],
    src: string,
    seen: boolean,
    rating: number | null,
    commentary: string,
};