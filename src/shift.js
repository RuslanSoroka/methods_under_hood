import { kindOfPush } from "./push.js";
export const kindOfShift = (arr) => {
    if (arr.length === 0) return undefined;
    const FIRST_ELEMENT = arr[0];
    let newArr = [];

    for (const item of arr) {
        if (item === FIRST_ELEMENT) continue;

        kindOfPush(newArr, item);
    }
    arr.length = 0;

    kindOfPush(arr, ...newArr);
    newArr = null;

    return FIRST_ELEMENT;
};


