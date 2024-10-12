import { kindOfPush } from "./push.js";
export const kindOfUnshift = (arr, ...items) => {
    let newArr = [...items];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        kindOfPush(newArr, element);
    }
    arr.length = 0;
    kindOfPush(arr, ...newArr);
    newArr = null;
};
