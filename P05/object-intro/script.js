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
  // �����ɃR�[�h�������܂��傤
const myInfo={
    name:"Umebayashi",
    age:20,
    location:"Tokyo",
    isCoder:true
}

// ���̉��K�ł� TDD �X�^�C���̃e�X�g�͕K�v����܂���B�����ł� console.log ���g�p���Ă��������B
console.log(myInfo["isCoder"]); // => "true"

//2
 // �����ɃR�[�h�������܂��傤�B
 const morseCode={
    a:".-",
    b:"-...",
    c:"-.-.",
    d:"-..",
    e:".",
    f:"..-.",
    g:"--.",
    h:"....",
    i:"..",
    j:".---",
    k:"-.-",
    l:".-..",
    m:"--",
    n:"-.",
    o:"---",
    p:".--.",
    q:"--.-",
    r:".-.",
    s:"...",
    t:"-",
    u:"..-",
    v:"...-",
    w:".--",
    x:"-..-",
    y:"-.--",
    z:"--.."
 }

 test(morseCode["t"], "-");
 test(morseCode["a"], ".-");
 test(morseCode["r"], ".-.");

 test(morseCode["c"], "-.-.");
 test(morseCode["q"], "--.-");

 //3
 /**
 * @param {object} ??? - �I�u�W�F�N�g
 * @param {Array<string>} ??? - ������̓������z��
 * @returns {object} �^����ꂽ�z��̗v�f���L�[�ɂ��āA����ɑΉ�����l�͑�1�����̃I�u�W�F�N�g���璊�o���č��ꂽ�V�����I�u�W�F�N�g
 */

// �����ɃR�[�h�������܂��傤.
function select(object,arr){
    let ans={};
    for(let i=0;i<arr.length;i++){
        ans[arr[i]]=object[arr[i]];
    }
    return ans;
}

test(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, []), {});

test(select({ }, []), {});


//4
const pokemons = [
    {
      Number: "001",
      Name: "Bulbasaur",
      Generation: "Generation I",
      About:
        "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      Types: ["Grass", "Poison"],
    },
    {
      Number: "025",
      Name: "Pikachu",
      Generation: "Generation I",
      About:
        "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pok?mon mistook the intensity of its charge.",
      Types: ["Electric"],
    },
    {
      Number: "019",
      Name: "Rattata",
      Generation: "Generation I",
      About:
        "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives?it will make its nest anywhere.",
      Types: ["Normal"],
    },
  ];

  /**
 * @param {Array<object>} ??? - �|�P�����I�u�W�F�N�g���������z��
 * @returns {Array<string>} �e�I�u�W�F�N�g�� `Names` ��v�f�Ɏ��z��
 */

// �����ɃR�[�h�������܂��傤.
function getNames(object){
    let ans=[];
    for(let i=0;i<Object.keys(object).length;i++){
        ans.push(object[i].Name);
    }
    return ans;
}

// 'pokemons' �̔z��́A�ȉ��̃R�[�h����ɏ�����Ă��Ȃ���΂����܂���B

test(getNames(pokemons), ["Bulbasaur", "Pikachu", "Rattata"]);




