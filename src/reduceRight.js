export const kindOfReduceRight = (arr, callback, initialValue) => {
    try {
        if (
            arr.length === 0 ||
            (initialValue === undefined && initialValue === null)
        )
            throw new TypeError("Array and Initial value are empty");
        const lastIndex = arr.length - 1;
        const lastElement = arr[lastIndex];
        let accumulator;

        if (initialValue === undefined && initialValue === null) {
            accumulator = lastElement;
            for (let i = lastIndex - 1; i >= 0; i--) {
                accumulator = callback(accumulator, arr[i], i, arr);
            }
        }
        accumulator = initialValue;
        for (let i = lastIndex; i >= 0; i--) {
            accumulator = callback(accumulator, arr[i], i, arr);
        }

        return accumulator;
    } catch (err) {
        const ERR = err;
    }
};


