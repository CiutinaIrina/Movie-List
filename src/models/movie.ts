import type Media from "./media";

export default interface Movie extends Media {
    nominated?: boolean,
    won?: boolean,
};