'use strict'
// Please don't delete the 'use strict' line above

// �t�@�C���S�̂Ŏg�p���� TDD �p�̕ϐ���錾����
let expected;
let actual;

// ��̖��̂悤�ɁA�֐�test�Ƀ`�F�b�N������e��S�Ă܂Ƃ߂�
function test(actualExpression, expectedExpression) {
    if (actualExpression === expectedExpression) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("    actual: ", actualExpression);
        console.log("  expected: ", expectedExpression);
    }
}

actual = /* �e�X�g���s�� EXPRESSION�i���j���`���� */
    expected = /* EXPRESSION�i���j�̊��Ғl���`���� */

    // test���Ăяo��
    test(actual, expected);

//1
/**
* �����@: {string} ??? - �e�X�g�̑ΏۂƂȂ镶����
* �����A: {number} ??? - 臒l
* �Ԃ�l�F �^����ꂽ������̒������w�肳�ꂽ臒l��蒷�����ǂ���
*/
// �����ɃR�[�h�������܂��傤

function isLongerThan(string, number) {
    if (typeof (string) == "string" && typeof (number) == "number") {
        if (string.length > number) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Invalid input.";
    }
}

actual = isLongerThan("three", 3);
expected = true;

// test���Ăяo��
test(actual, expected);

actual = isLongerThan("three", 5);
expected = false;

// test���Ăяo��
test(actual, expected);

actual = isLongerThan(3, 5);
expected = "Invalid input.";

// test���Ăяo��
test(actual, expected);

//2
/**
 * ����: { number }??? - �e�X�g�̑ΏۂƂȂ鐔�l
 * �Ԃ�l:  �^����ꂽ���l������ǂ�����\���u�[���A��
 */
// �����ɃR�[�h�������܂��傤
function isOddWithoutIf(number) {
    return number % 2 == 1 && typeof (number) == "number";
}

actual = isOddWithoutIf(3);
expected = true;

// test���Ăяo��
test(actual, expected);

actual = isOddWithoutIf(4);
expected = false;

// test���Ăяo��
test(actual, expected);

actual = isOddWithoutIf("abc");
expected = false;

// test���Ăяo��
test(actual, expected);

 //3
/**
 * ����: ??? - ���l�i0-10�j�B���̖��O���A���t�@�x�b�g�̌`�ŕԂ邱�ƂɂȂ�
 * �Ԃ�l:  {"zero"|"one"|"two"|"three"|"four"|"five"|"six"|"seven"|"eight"|"nine"|"ten"} �^����ꂽ���l���A���t�@�x�b�g�ŋL�������̖��O
 */
// �����ɃR�[�h�������܂��傤
function getSimpleNumberName(number){
    const eng_num=["zero","one","two","three","four","five","six","seven","eight","nine","ten"];
    return eng_num[number];
}

actual = getSimpleNumberName(0);
expected = "zero";

// test���Ăяo��
 test(actual, expected);

// ����Ƀe�X�g�������āA�R�[�h�����������Ƃ��m�F���Ă�������

actual = getSimpleNumberName(3);
expected = "three";

// test���Ăяo��
 test(actual, expected);

 actual = getSimpleNumberName(5);
expected = "five";

// test���Ăяo��
 test(actual, expected);

 //4
 /**
 * ����:  ??? - �����p�`�̕ӂ̐� (3-8)
 * �Ԃ�l:  {"triangle"|"square"|"pentagon"|"hexagon"|"heptagon"|"octagon"} �^����ꂽ���̕ӂ����ʑ��p�`�̉p�ꖼ
 */
// �����ɃR�[�h�������܂��傤

function getRegularConvexPolygonName(side){
    const eng_polygon=["triangle","square","pentagon","hexagon","heptagon","octagon"];
    return eng_polygon[side-3];
}

actual = getRegularConvexPolygonName(3);
expected = "triangle";

// test���Ăяo��
 test(actual, expected);

// ����Ƀe�X�g�������āA�R�[�h�����������Ƃ��m�F���Ă�������

actual = getRegularConvexPolygonName(5);
expected = "pentagon";

// test���Ăяo��
 test(actual, expected);

 actual = getRegularConvexPolygonName(8);
expected = "octagon";

// test���Ăяo��
 test(actual, expected);

 //5-1
 function randomNumber(number){
    return Math.floor(Math.random() * number);
 }

 console.log(randomNumber(100));
 console.log(randomNumber(3));

 //5-2
function guessMyNumber(number){
    const random_num=Math.floor(Math.random() * 6);
    if(number==random_num){
        return "YES!";
    }else{
        return "NO!";
    }
}

console.log(guessMyNumber(0));
console.log(guessMyNumber(1));
console.log(guessMyNumber(2));
console.log(guessMyNumber(3));
console.log(guessMyNumber(4));
console.log(guessMyNumber(5));


