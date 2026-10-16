import type Media from "./media";

export default interface Movie extends Media {
    leadActors: string[],
};