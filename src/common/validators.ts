
export function firstLetterCapitalized() {
    return {
        name: "first-letter-uppercase",
        message: "First letter needs to be capitalized",
        test: (value: string | undefined) => {
            if (!value || value.length == 0)
                return true;

            return value[0] === value[0].toUpperCase();
        }
    }
}