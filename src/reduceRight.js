export const kindOfReduceRight = (arr, callback, initialValue) => {
    let startIndex =
        initialValue === null ||
        undefined ||
        initialValue.length === 0 ||
        typeof initialValue === "number"
            ? 0
            : 1;

    const last_index = arr.length - 1;
    const last_element = arr[last_index]

    let accum = startIndex ? last_element : initialValue;
    
    for (let i = last_index; i >= 0; i--) {

        
        accum = callback(accum, arr[i], i, arr);
    }

    return accum;
};

