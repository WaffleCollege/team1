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
const hellos = {
    English: "Hello",
    Japanese: "Konnichiwa",
    German: "Hallo",
    Spanish: "Hola",
    Arabic: "Ahlan wa sahlan",
    Chinese: "Nihao",
    };

/**
 * @returns {undefined} ���̊֐��͐F�X�Ȍ����"Hello" ��\�����邾���ŁA�Ԃ�l�͕K�v����܂���B
 */

// �����ɃR�[�h�������܂��傤
function sayHellos(){
    for(let i in hellos){
        console.log(hellos[i]);
    }
}

// console.log �̕\���́A�Ԃ�l�ł͂Ȃ����߁A�e�X�g����͍̂���ł��B
// ����́A�R���\�[���̕\�����m�F���邱�ƂŁA�e�X�g�Ƃ��Ă��������B

sayHellos();
// "Hello"
// "Konnichiwa"
// "Hallo"
// "Hola"
// ...

//2
/**
 * @param {object} ???
 * @returns {Array<string>} �^����ꂽ�I�u�W�F�N�g�̂��ׂẴL�[���������z��
 */

// �����ɃR�[�h�������܂��傤
function getKeys(object){
    let ans=[];
    for(let i in object){
        ans.push(i);
    }
    return ans;
}

const object1 = { a: 1, b: 2, c: "hello" };
const object2 = { 1: "a", 2: "b", hello: "c" };

test(getKeys(object1), ["a", "b", "c"]);
test(getKeys(object2), ["1", "2", "hello"]);

//3
/**
 * @param {object} ???
 * @returns {Array<any>} �^����ꂽ�I�u�W�F�N�g�̂��ׂĂ̒l���������z��
 */

// �����ɃR�[�h�������܂��傤
function getValues(object){
    let ans=[];
    for(let i in object){
        ans.push(object[i]);
    }
    return ans;
}

test(getValues(object1), [1, 2, "hello"]);
test(getValues(object2), ["a", "b", "c"]);

//4
const myObj = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };
function printAll(object) {
  for (const key in object) {
    console.log(object[key]);//�ϐ����g����悤�u���P�b�g�L�@�ɕύX
  }
}
printAll(myObj);

//5
/**
 * @param {object} ??? - �I�u�W�F�N�g�B�������l�͂��ׂĈقȂ���̂Ƃ���B
 * @returns {object} �^����ꂽ�I�u�W�F�N�g�̃L�[�ƒl�����ւ����A�V�����I�u�W�F�N�g
 */

// �����ɃR�[�h�������܂��傤

const object3 = { a: 1, b: 2, c: 3, d: 4 };
const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };

function swapPairs(object){
    let ans={};
    for(const i in object){
        ans[object[i]]=i;
    }
    return ans;
}

test(swapPairs(object3), { 1: "a", 2: "b", 3: "c", 4: "d" });
test(swapPairs(object4), { a: "1", b: "2", c: "3", d: "4" });

//6
/**
 * @param {Array<object>} ??? - �I�u�W�F�N�g��v�f�Ɏ��z��
 * @returns {Array<any>} �^����ꂽ�z��̍ŏ��̃I�u�W�F�N�g�́A���ׂĂ̒l(value�̕�)���������z��
 */

// �����ɃR�[�h�������܂��傤�B
function getFirstObjectValues(object){
    let ans =[];
    for(const i in object[0]){
        ans.push(object[0][i]);
    }
    return ans;
}

const collection = [{ a: 1, b: 2 }, { a: 3, b: 3 }, { b: 4 }, { a: 100 }];
const collection2 = [{ a: 3, b: 3 }, { b: 4 }, { a: 100 }];

test(getFirstObjectValues(collection), [1, 2]);
test(getFirstObjectValues(collection2), [3, 3]);

//7
/**
 * @param {Array<object>} ???
 * @returns {Array<any>} �^����ꂽ�z��̂��ׂẴI�u�W�F�N�g�́A���ׂĂ̒l(value�̕�)���������z��
 */

// �����ɃR�[�h�������܂��傤
function getAllValues(object){
    let ans =[];
    for(const i in object){
        for(const j in object[i]){
        ans.push(object[i][j]);
        }
    }
    return ans;
}

test(getAllValues(collection), [1, 2, 3, 3, 4, 100]);
test(getAllValues(collection2), [3, 3, 4, 100]);

//8
/**
 * @param {Array<object>} ???
 * @returns {Array<any>} �^����ꂽ�z����̂��ׂẴI�u�W�F�N�g�̂��ׂĂ̒l���������z��B�d�������l������ꍇ��1�����c���B
 */

// �����ɃR�[�h�������܂��傤

const collection3 = [{ a: 1, b: 2, c:2 }, { d: 1, e: 3 }, { f: 4, g: 5 }];
const collection4 = [{ d: 1, e: 3 }, { f: 4, g:5 }];

function getAllValues2(object){
    let ans =[];
    for(const i in object){
        for(const j in object[i]){
        ans.push(object[i][j]);
        }
    }
    ans = Array.from(new Set(ans))
    return ans;
}

test(getAllValues2(collection3), [1, 2, 3, 4, 5]);
test(getAllValues2(collection4), [1, 3, 4, 5]);





