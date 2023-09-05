'use strict'
// Please don't delete the 'use strict' line above

let actual;
let expected;

function test(actual, expected) {
    if (actual === expected) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("  expected:", expected);
        console.log("    actual:", actual);
    }
}

//1
/**
 * @param {Array<number>} ??? - ���l�^�̗v�f�����z��
 * @returns {number} �^����ꂽ�z��̂��ׂĂ̐����̍��v
 */

function sumArray(arr) {
    // �����ɃR�[�h�������܂��傤�B
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

actual = sumArray([1, 2, 3, 4]);
expected = 10;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// ����Ƀe�X�g�������܂��傤�B
test(sumArray([1, 0, 0]), 1);
test(sumArray([1, 10, 100]), 111);

//2
/**
 * @param {Array<number>} ??? - ���l�^�̗v�f�����z��
 * @returns {number} �^����ꂽ�z��̂��ׂĂ̐������������킹������
 */

function productArray(arr) {
    // �����ɃR�[�h�������܂��傤�B
    let ans = 1;
    for (let i = 0; i < arr.length; i++) {
        ans *= arr[i];
    }
    return ans;
}

actual = productArray([1, 2, 3, 4]);
expected = 24;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// ����Ƀe�X�g�������܂��傤�B
test(productArray([1, 0, 0]), 0);
test(productArray([1, 10, 100]), 1000);

//3
/**
* @param {Array<any>} ???
* @returns {boolean} �^����ꂽ�z��� "fun" �Ƃ��������񂪓����Ă��邩�ǂ�����\���u�[���A��
*/

function hasFun(arr) {
    // �����ɃR�[�h�������܂��傤�B
    let check = false;
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == "string") {
            if (arr[i].includes("fun")) {
                check = true;
            }
        }
    }
    return check;
}

actual = hasFun(["whatever", 2, false, "fun", "hello"]);
expected = true;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = hasFun(["whatever", 2, false, "run", "hello"]);
expected = false;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// ����Ƀe�X�g�������܂��傤�B
test(hasFun([1, 2, 3, 4, 5]), false);
test(hasFun([1, 2, "funa", 4, 5]), true);

//4
/**
* @param {Array<any>} ???
* @returns {boolean} �^����ꂽ�z��̗v�f�����ׂău�[���A�����ǂ�����\���u�[���A��
*/

function containsOnlyBooleans(arr) {
    // �����ɃR�[�h�������܂��傤�B
    let check = false;
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) != "boolean") {
            check = false;
            break;
        } else if (i == arr.length - 1) {
            check = true;
        }
    }
    return check;
}

actual = containsOnlyBooleans([true, false, true, false, false]);
expected = true;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
expected = false;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// ����Ƀe�X�g�������܂��傤�B
test(containsOnlyBooleans([]), false);
test(containsOnlyBooleans(["true", "false"]), false);

//5
/**
 * @param {Array<any>} ??? - 1�Ԗڂ̔z��
 * @param {Array<any>} ??? - 2�Ԗڂ̔z��
 * @returns {Array<any>} �^����ꂽ2�̔z���A���������z��
 */

function concatenate(arr1, arr2) {
    // �����ɃR�[�h�������܂��傤�B
    let ans = arr1;
    for (let i = 0; i < arr2.length; i++) {
        ans.push(arr2[i]);
    }
    return ans;
}

actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
expected = ["eeny", "meeny", "miny", "moe"];

// �����_�ł́A�z����r����ɂ� JSON.stringify ���g���K�v������Ɗo���Ă����Ă��������B
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// ����Ƀe�X�g�������܂��傤�B

actual = concatenate([1], [2]);
expected = [1, 2];

// �����_�ł́A�z����r����ɂ� JSON.stringify ���g���K�v������Ɗo���Ă����Ă��������B
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = concatenate(["a", "b"], []);
expected = ["a", "b"];

// �����_�ł́A�z����r����ɂ� JSON.stringify ���g���K�v������Ɗo���Ă����Ă��������B
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//6
/**
* @param {Array<number>} ??? - ���l�^�̗v�f�����z��
* @returns {Array<number>} �^����ꂽ�z��̒��̋�����������ꂽ�z��
*/

function getEvenNumbers(arr) {
    // �����ɃR�[�h�������܂��傤�B
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            ans.push(arr[i]);
        }
    }
    return ans;

}

actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
expected = [2, 4, 6, 8];

// �����_�ł́A�z����r����ɂ� JSON.stringify ���g���K�v������Ɗo���Ă����Ă��������B
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// ����Ƀe�X�g�������܂��傤�B

actual = getEvenNumbers([1, 3, 5, 7]);
expected = [];

// �����_�ł́A�z����r����ɂ� JSON.stringify ���g���K�v������Ɗo���Ă����Ă��������B
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = getEvenNumbers([2, 4, 6, 8]);
expected = [2, 4, 6, 8];

// �����_�ł́A�z����r����ɂ� JSON.stringify ���g���K�v������Ɗo���Ă����Ă��������B
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//7
/**
* @param {Array<number>} ??? - ���l�^�̗v�f�����z��
* @param {number} ??? - �z��̒��̐����ɂ����鐔��
* @returns {Array<number>} �z��̒��̐����ɑ�2���������������ʂ��������V�����z��
*/

function getMultipliedArray(arr, num) {
    // �����ɃR�[�h�������܂��傤�B
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans.push(arr[i] * num);
    }
    return ans;
}

actual = getMultipliedArray([1, 2, 3], 6);
expected = [6, 12, 18];

// �����_�ł́A�z����r����ɂ� JSON.stringify ���g���K�v������Ɗo���Ă����Ă��������B
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// ����Ƀe�X�g�������܂��傤�B

actual = getMultipliedArray([1, 2, 3], 0);
expected = [0, 0, 0];

// �����_�ł́A�z����r����ɂ� JSON.stringify ���g���K�v������Ɗo���Ă����Ă��������B
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = getMultipliedArray([1, 2, 3], 1);
expected = [1, 2, 3];

// �����_�ł́A�z����r����ɂ� JSON.stringify ���g���K�v������Ɗo���Ă����Ă��������B
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//8
/**
* @param {Array<number>} ??? - ���l�^�̗v�f�����z��
* @returns {boolean} �^����ꂽ�z�񂪏����ɂȂ��Ă��邩��\���u�[���A��
*/

function isSorted(arr) {
    // �����ɃR�[�h�������܂��傤�B
    let ans = true;
    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                ans = false;
                break;
            }
        }
    }
    return ans;
}

actual = isSorted([1, 2, 3]);
expected = true;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isSorted([3, 2, 3]);
expected = false;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// ����Ƀe�X�g�������܂��傤�B
actual = isSorted([1, 1, 1]);
expected = true;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = isSorted([1]);
expected = true;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//9
/**
* @param {Array<any>} ??? - �z��
* @param {string|number|boolean} ??? - �o���񐔂��J�E���g�������l�i�l�̃f�[�^�^�� `string`�A`number`�A`boolean` �̂����ꂩ�Ƃ���B�j
* @returns {number} ���̒l���z����ŏo�Ă�����
*/

function countOccurrences(arr, value) {
    // �����ɃR�[�h�������܂��傤�B
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i]) === value) {
            ans++;
        }
    }
    return ans;
}

actual = countOccurrences([1, 2, 3], 2);
expected = 1;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = countOccurrences([1, 2, 2], 2);
expected = 2;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = countOccurrences([1, 2, "elephant"], "elephant");
expected = 1;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

// ����Ƀe�X�g�������܂��傤�B
actual = countOccurrences([], 0);
expected = 0;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = countOccurrences([1, "1", 1, 1], 1);
expected = 3;

if (actual === expected) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

//10
/**
* @param {Array<number>} ???
* @param {"+"|"-"|"*"|"/"|"**"|"%"} ??? - �g�p�������Z�p���Z�q��\��������
* @param {number} ??? - �g�p�������퉉�Z�q
* @returns {Array<any>} �^����ꂽ�z��̊e�v�f�ɁA�����̎Z�p���Z�q�Ɣ퉉�Z�q��K�p�������ʂ��������V���Ȕz��
*/

function getOperatedArray(arr, operator, operand) {
    // �����ɃR�[�h�������܂��傤�B
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        if (operator === "+") {
            ans.push(arr[i] + operand)
        } else if (operator === "-") {
            ans.push(arr[i] - operand)
        } else if (operator === "*") {
            ans.push(arr[i] * operand)
        } else if (operator === "/") {
            ans.push(arr[i] / operand)
        } else if (operator === "**") {
            ans.push(arr[i] ** operand)
        } else if (operator === "%") {
            ans.push(arr[i] % operand)
        }
    }
    return ans;
}

actual = getOperatedArray([1, 2, 3], "+", 5);
// [1, 2, 3] �̂��ꂼ��̗v�f��5������
// [1+5, 2+5, 3+5]
expected = [6, 7, 8];

// �����_�ł́A�z����r����ɂ� JSON.stringify ���g���K�v������Ɗo���Ă����Ă��������B
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = getOperatedArray([9, 6, 3], "/", 3);
expected = [3, 2, 1];

// �����_�ł́A�z����r����ɂ� JSON.stringify ���g���K�v������Ɗo���Ă����Ă��������B
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

  // ����Ƀe�X�g�������܂��傤�B
  actual = getOperatedArray([1, 2, 3], "**", 2);
expected = [1, 4, 9];

// �����_�ł́A�z����r����ɂ� JSON.stringify ���g���K�v������Ɗo���Ă����Ă��������B
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}

actual = getOperatedArray([1, 2, 3], "%", 2);
expected = [1, 0, 1];

// �����_�ł́A�z����r����ɂ� JSON.stringify ���g���K�v������Ɗo���Ă����Ă��������B
if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
}











