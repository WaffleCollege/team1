'use strict'
// Please don't delete the 'use strict' line above

//1
function numberOfPeople(arrayOfPeople) {
    return arrayOfPeople.length;
}

// �֐�testArray�̃R�[�h���A�ȉ��ɏ����܂��傤�I
function testArray(actual,expected){
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("  expected:", expected);
        console.log("    actual:", actual);
    }
}


// �����Ɠ������m�F �� �S��"Yay! Test PASSED."�ƕ\������܂���??
testArray(numberOfPeople(["Urara", "Tokotoko"]), 2);
testArray(numberOfPeople(["Akki", "Koshimu", "Ishity", "Maoko"]), 4);
testArray(numberOfPeople([]), 0);

// "Test FAILED. Keep trying" �ƕ\�������悤�ɁA���������߂�testArray���Ăяo���Ă݂܂��傤�I
testArray(numberOfPeople(["Akki", "Koshimu", "Ishity", "Maoko"]), 6);
testArray(numberOfPeople([]), 1);

//2
/**
 * ����:  ??? - �z��
 * �Ԃ�l:  �z��̐^�񒆂� "hi" �ɒu�������炦���z��A�������͓����z���Ԃ�
 */
// �����ɃR�[�h�������܂��傤

function hiInTheMiddle(arr){
    if(arr.length%2==1){
        arr[(arr.length-1)/2]="hi";
    }
    return arr;
}


 // �e�X�g
 let actual = hiInTheMiddle([1, 2, 3, 4, 5]);
 let expected = [1, 2, "hi", 4, 5];
 
  // actual �� expected ���g���āA�e�X�g�������Ă݂܂��傤�I
  // ��Ő錾�����AtestArray�֐����g���Ă݂܂��傤�I
  testArray(actual,expected);
 
 
 actual = hiInTheMiddle([1, 2, 3, 4]);
 expected = [1, 2, 3, 4];
 
 // actual �� expected ���g���āA�e�X�g�������Ă݂܂��傤�I
  // ��Ő錾�����AtestArray�֐����g���Ă݂܂��傤�I
  testArray(actual,expected);

  //3
  /**
 * �����F ??? - �z��
 * �Ԃ�l�F �^����ꂽ�z��̍Ō�̗v�f��Ԃ��B
 */
// �����ɃR�[�h�������܂��傤
function pop(arr){
    let tmp=arr[arr.length-1];
    arr.splice(arr.length-1,1);
    return tmp;
}

let array = [1, 2, 3, 4];

actual = pop(array);
expected = 4;
testArray(actual, expected);


actual = array;
expected = [1, 2, 3];
testArray(actual, expected);

//4
/**
 * �����@: ??? - �z��
 * �����A: ??? - �z��� _�擪_ �ɒǉ�����l
 * �Ԃ�l: {number} ������̔z��̒�����Ԃ��B
 */
// �����ɃR�[�h�������܂��傤
function unshift(arr,first){
    arr.splice(0,0,first);
    return arr.length;
}

array = [1, 2, 3, 4];

actual = unshift(array, 5);
expected = 5;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array;
expected = [5, 1, 2, 3, 4];
testArray(actual, expected);

//5
/**
 * ����: ??? - �z��
 * �Ԃ�l�F �^����ꂽ�z��̐擪�̗v�f��Ԃ��B
 */
// �����ɃR�[�h�������܂��傤
function shift(arr){
    let tmp=arr[0];
    arr.splice(0,1);
    return tmp;
}

array = [1, 2, 3, 4];

actual = shift(array);
expected = 1;

if (actual === expected) {
  console.log("Test PASSED!");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd("Result:");
}

actual = array;
expected = [2, 3, 4];

testArray(actual, expected);


