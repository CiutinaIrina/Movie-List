    export const capitalise = (str: string): string => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    export const camelCase = (str: string): string => {
        return str.toLowerCase().split(" ").map((substr, i) => i !== 0 ? capitalise(substr) : substr).join("");
    }

    export const getModelRoute = (model: string, action?: string): string => {
        return "/" + camelCase(model) + "s" + "/" + action;
    }