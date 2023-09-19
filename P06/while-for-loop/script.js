'use strict'
// Please don't delete the 'use strict' line above

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("    actual: ", actual);
        console.log("  expected: ", expected);
        console.trace();
    }
}

//1
function sayHellos(num) {
    for (let i = 0; i < num; i++) {
        console.log("Hello!");
    }
}
sayHellos(4);
// "Hello!"
// "Hello!"
// "Hello!"
// "Hello!"

//2
function countToTen() {
    for (let i = 0; i < 10; i++) {
        console.log(i + 1);
    }
}
countToTen();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//3
function counter(num) {
    let i = 0;
    for (i = 0; i < num; i++) {
        console.log(i);
    }
}

//�e�X�g
counter(5);

//4
/**
* @param {number} start
* @param {number} end
* @returns {Array<number>} start �ȏ� end �ȉ��̂��ׂĂ̐������܂ޔz��
*/
// �����ɃR�[�h�������܂��傤

function createRange(startnum, endnum) {
    let ans = [];
    for (let i = startnum; i < endnum + 1; i++) {
        ans.push(i);
    }
    return ans;
}

test(createRange(4, 6), [4, 5, 6]);
test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);

//5
function printCars() {
    const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
    let i = 0;
    for (i = 0; i < cars.length; i++) {
        console.log(cars[i]);
    }
}

//�e�X�g
printCars();

//6
const commands = ["Print me last", "Print me second", "Print me first"];

function decrement(list) {
    let i=list.length - 1;
    while(i>=0){
        console.log(list[i]);
        i--;
    }
}

//�e�X�g
decrement(commands);

//7-1
/**
 * @param {Array<number>} ???
 * @param {Array<number>} ???
 * @returns {Array<number>} ���ꂼ��̔z��̑Ή�����v�f�̘a����Ȃ�z��
 */
// �����ɃR�[�h�������܂��傤
function addTogether(arr1,arr2){
    let ans = [];
    for (let i = 0; i < arr1.length; i++) {
        ans.push(arr1[i]+arr2[i]);
    }
    return ans;
}

test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);

//7-2
function addTogether(arr1,arr2){
    let long;
    let short;

    if(arr1.length>arr2.length){
        long=arr1.concat();
        short=arr2.concat();
    }else{
        long=arr2.concat();
        short=arr1.concat();
    }

    let ans = [];

    for (let i = 0; i < short.length; i++) {
        ans.push(long[i]+short[i]);
    }

    for (let i = short.length; i < long.length; i++) {
        ans.push(long[i]);
    }
    return ans;
}
test(addTogether([1], [4, 5, 6]), [5, 5, 6]);

//8
/**
 * @param {Array<any>} �����̔z��
 * @returns {number} �����̔z��̗v�f�̍��v�l
 */
// �����ɃR�[�h�������܂��傤

function sum_arr(arr){
    let ans=0;
    for(let i=0;i<arr.length;i++){
        ans+=arr[i];
    }
    return ans;
}

test(sum_arr([1]), 1);
test(sum_arr([1, 1, 1, 1, 1]), 5);
test(sum_arr([1, 2, 3, 4, 5]), 15);

//9
function sum(...num){

    return sum_arr([...num]);
}

test(sum(1,0), 1);
test(sum(1,2,3,4,5), 15);


