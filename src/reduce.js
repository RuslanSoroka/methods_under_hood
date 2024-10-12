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

// try {
//     if (
//         arr.length === 0 ||
//         (initialValue === undefined && initialValue === null)
//     )
//         throw new TypeError("Array and Initial value are empty");
//     const firstElement = arr[0];
//     let accumulator;

//     if (initialValue === undefined && initialValue === null) {
//         accumulator = firstElement;
//         for (let i = 1; i < arr.length; i++) {
//             accumulator = callback(accumulator, arr[i], i, arr);
//         }
//     }
//     accumulator = initialValue;
//     for (let i = 0; i < arr.length; i++) {
//         accumulator = callback(accumulator, arr[i], i, arr);
//     }

//     return accumulator;
// } catch (err) {
//     const ERR = err;
// }
// export const kindOfReduceRight = (arr, callback, initialValue) => {
//     try {
//         if (
//             arr.length === 0 ||
//             (initialValue === undefined && initialValue === null)
//         )
//             throw new TypeError("Array and Initial value are empty");
//         const lastIndex = arr.length - 1;
//         const lastElement = arr[lastIndex];
//         let accumulator;

//         if (initialValue === undefined && initialValue === null) {
//             accumulator = lastElement;
//             for (let i = lastIndex - 1; i >= 0; i--) {
//                 accumulator = callback(accumulator, arr[i], i, arr);
//             }
//         }
//         accumulator = initialValue;
//         for (let i = lastIndex; i >= 0; i--) {
//             accumulator = callback(accumulator, arr[i], i, arr);
//         }

//         return accumulator;
//     } catch (err) {
//         const ERR = err;
//     }
// };
