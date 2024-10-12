import { usersList, usersYearOfBirth } from "./data.js";
import { kindOfPush } from "./push.js";
import { kindOfForEach } from "./forEach.js";
import { kindOfMap } from "./map.js";
import { kindOfPop } from "./pop.js";
import { kindOfUnshift } from "./unshift.js";
import { kindOfShift } from "./shift.js";
import { kindOfReduce } from "./reduce.js";
import { kindOfReduceRight } from "./reduceRight.js";
import { kindOfEvery } from "./every.js";
import { kindOfSome } from "./some.js";

(function () {
    const DATE = new Date();
    let currentYear = DATE.getFullYear();

    kindOfForEach(usersList, (item, index, arr) => {
        const YEAR_OF_BIRTH = currentYear - item.age;
        kindOfPush(usersYearOfBirth, YEAR_OF_BIRTH);
    });
    console.log(usersYearOfBirth);

    const mapedArray = kindOfMap(usersList, (item, index, arr) => {
        let correctName = item.name.toLowerCase();
        return correctName;
    });
    console.log(mapedArray);

    const returnFromPop = kindOfPop(mapedArray);
    console.log(returnFromPop);

    kindOfUnshift(mapedArray, returnFromPop, "orson");
    console.log(mapedArray);

    let returnFromShift = kindOfShift(mapedArray);
    console.log(returnFromShift);

    let reducedValue = kindOfReduce(
        usersList,
        (accum, item, index, array) => {
            if (Array.isArray(accum)) {
                kindOfPush(accum, {
                    userName: item.name,
                    yearBirth: currentYear - item.age,
                });
            }

            return accum;
        },
        []
    );
    console.log(reducedValue);

    let reducedRightValue = kindOfReduceRight(
        usersList,
        (accum, item, index, array) => {
            if (Array.isArray(accum)) {
                kindOfPush(accum, {
                    userName: item.name,
                    yearBirth: currentYear - item.age,
                });
            }
    
            return accum;
        },
        []
    );
    console.log(reducedRightValue);

    const resultOfEvery = kindOfEvery(reducedRightValue, (item, index, array) => {
        return item.yearBirth < 1930;
    });
    console.log(resultOfEvery);

    const resultOfSome = kindOfSome(reducedRightValue, (item, index, array) => {
        const DUE_AGE = 1947
        return item.yearBirth === DUE_AGE;
    });
    console.log(resultOfSome);
})();
