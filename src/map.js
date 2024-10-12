import { kindOfPush } from "./push.js";
export const kindOfMap = (arr, callback) => {
    let arrNames = [];

    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) return  arrNames = undefined;

        let result = callback(arr[i], i, arr);
        kindOfPush(arrNames, result);
    }
    return arrNames;
};


