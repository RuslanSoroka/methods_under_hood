import {kindOfPush} from "./push.js";

export const kindOfUnshift = (arr, ...items) => {
    arr.reverse().push(...items);
    arr.reverse()

    return arr.length;
};
