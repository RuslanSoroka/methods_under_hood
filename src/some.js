export const kindOfSome = (arr, callback) => {
    let isTrue;
    let quantitiOfElements = 0;
    for (let i = 0; i < arr.length; i++) {
        isTrue = callback(arr[i], i, arr);

        quantitiOfElements++;

        if (isTrue) break;
    }
    return quantitiOfElements === arr.length ? false : true;
};