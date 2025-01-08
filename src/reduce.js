export const kindOfReduce = (arr, callback, initialValue) => {
    let startIndex =
        initialValue === null ||
        undefined ||
        initialValue.length === 0 ||
        typeof initialValue === "number"
            ? 0
            : 1;

    let accum = startIndex ? arr[0] : initialValue;

    for (let i = startIndex; i < arr.length; i++) {
        accum = callback(accum, arr[i], i, arr);
    }

    return accum;
};
