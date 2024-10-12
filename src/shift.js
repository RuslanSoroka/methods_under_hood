import { kindOfPop } from "./pop.js";
export const kindOfShift = (arr) => {
    if (arr.length === 0) return undefined;
    
    const last_element = kindOfPop(arr.reverse())
    arr.reverse()

    return last_element;
};


