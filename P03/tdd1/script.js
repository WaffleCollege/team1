'use strict'
// Please don't delete the 'use strict' line above

function isPositive(num) {
    if (num > 0) {
      return true;
    }
    return false;
  }

   // test�Ƃ������O�Ŋ֐���錾���悤

function test(actual,expected){
    if (actual === expected) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("  expected:", expected);
        console.log("    actual:", actual);
    }
}


// �����Ɠ������m�F
test(isPositive(10), true);
// => "Yay! Test PASSED." �ƕ\�������?

test(isPositive(10), false);
// => "Test FAILED. Keep trying" �ƕ\�����ꂽ�̂��A�u���ۂ̃e�X�g�l�v�Ɓu���Ғl�v���\�������?

