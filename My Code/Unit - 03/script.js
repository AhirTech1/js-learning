// Remember, we're going to use strict mode in all scripts now!
'use strict';


//Problem - 1
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Temperature amplitude = difference between highest and lowest
function calcAmp (arr) {
    let max = 0;
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    return max - min;
}
console.log(calcAmp(temperatures));

//Problem - 2
// Two arrays this time
function calcAmpNew (t1, t2) {
    let arr = t1.concat(t2);
    let max = 0;
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    return max - min;
}

const arr1 = [3,6,2,7,9,-12,6,-5];
const arr2 = [4,8,2,-8,-2,0,-3,6,7];
console.log(calcAmpNew(arr1, arr2));