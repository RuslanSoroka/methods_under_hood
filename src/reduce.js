export const kindOfReduce = (arr, callback, initialValue) => {
    try {
        if (
            arr.length === 0 ||
            (initialValue === undefined && initialValue === null)
        )
            throw new TypeError("Array and Initial value are empty");
        const firstElement = arr[0];
        let accumulator;

        if (initialValue === undefined && initialValue === null) {
            accumulator = firstElement;
            for (let i = 1; i < arr.length; i++) {
                accumulator = callback(accumulator, arr[i], i, arr);
            }
        }
        accumulator = initialValue;
        for (let i = 0; i < arr.length; i++) {
            accumulator = callback(accumulator, arr[i], i, arr);
        }

        return accumulator;
    } catch (err) {
        const ERR = err;
    }
};

