export const kindOfPop = (arr) => {
    if (arr.length === 0) return undefined;

    const lastElement = arr[arr.length - 1];
    arr.length--;

    return lastElement;
};
