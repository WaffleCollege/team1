'use strict'
// Please don't delete the 'use strict' line above

//1
/**
 * �����FarrayOfPeople - �l�̖��O�̔z��
 * �Ԃ�l�F �^����ꂽ�z��̒���
 */
function numberOfPeople(arrayOfPeople) {
    return arrayOfPeople.length;
}

// �e�X�g
console.log(numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"])); // => 4

//2
// ������,�z��students���쐬����R�[�h�������܂��傤.
const students=["tanaka","sato","takeda","ito","suzuki"];


// �e�X�g
console.log(numberOfPeople(students)); // => 5

//3
// �����ɃR�[�h�������܂��傤.
students.push("takahashi");
students.push("abe");
students.push("yamada");

 // �e�X�g
 console.log(numberOfPeople(students)); // => 8

 //4
 /**
 * �����F array - �z��
 * �Ԃ�l�F �^����ꂽ�z��̍Ō�̗v�f��Ԃ�
 */
function last(array) {
    // �����ɃR�[�h�������܂��傤
    return array[array.length-1];
  }
  
  // �����Ƀe�X�g�������Ă�������
  // console.log���g���ďo�͂���OK. �Ӑ}�������������m�F���悤
  console.log(last(students));
