'use strict'
// Please don't delete the 'use strict' line above
// �q���g�F �����ŉ�������K�v�����邩������܂���


function counter() {
    // �����ɂ��Ȃ��̃R�[�h�������Ă�������
    let count=0;
    return function (){
        count++;
        
  }
  
  counter(); // => 1
  counter(); // => 2
  counter(); // => 3
  // etc.

