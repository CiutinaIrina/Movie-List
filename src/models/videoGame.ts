import type Media from "./media";

export default interface VideoGame extends Media {
    platforms: string[],
};