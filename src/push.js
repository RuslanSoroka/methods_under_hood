export const kindOfPush = (arr, ...items) => {
    for (const item of items) {
        arr[arr.length] = item;
    }
};
