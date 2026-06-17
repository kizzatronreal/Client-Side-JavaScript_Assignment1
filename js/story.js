// Arrays of options for each part of the sentence
let options1 = [
  'A cat',
  'Once upon a time',
  'The brave knight',
  'An old wizard',
  'My neighbour'
];
let options2 = [
  'went',
  'ran',
  'flew',
  'sneaked',
  'danced'
];
let options3 = [
  'happily',
  'angrily',
  'slowly',
  'with a grin',
  'noisily'
];
let options4 = [
  'to the market',
  'to the moon',
  'through the forest',
  'to the old castle',
  'to school'
];
let options5 = [
  'with a robot',
  'and a puppy',
  'carrying a map',
  'holding a secret',
  'and a big hat'
];

//Track indexes
let ind1 = 0;
let ind2 = 0;
let ind3 = 0;
let ind4 = 0;
let ind5 = 0;

//cycle through indexes and update button text
function cycle(optionArray, indVarName, button) {
  if (indVarName === 'ind1') {
    ind1++;
    if (ind1 >= optionArray.length) ind1 = 0;
    button.textContent = optionArray[ind1];
  }

  if (indVarName === 'ind2') {
    ind2++;
    if (ind2 >= optionArray.length) ind2 = 0;
    button.textContent = optionArray[ind2];
  }

  if (indVarName === 'ind3') {
    ind3++;
    if (ind3 >= optionArray.length) ind3 = 0;
    button.textContent = optionArray[ind3];
  }

  if (indVarName === 'ind4') {
    ind4++;
    if (ind4 >= optionArray.length) ind4 = 0;
    button.textContent = optionArray[ind4];
  }

  if (indVarName === 'ind5') {
    ind5++;
    if (ind5 >= optionArray.length) ind5 = 0;
    button.textContent = optionArray[ind5];
  }
}

document.addEventListener('DOMContentLoaded', function () {
    // Grab elements
    var part1 = document.getElementById('part1');
    var part2 = document.getElementById('part2');
    var part3 = document.getElementById('part3');
    var part4 = document.getElementById('part4');
    var part5 = document.getElementById('part5');
    var tell = document.getElementById('tell');
    var randomBtn = document.getElementById('random');
    var resetBtn = document.getElementById('reset');
    var storyText = document.getElementById('storyText');

    // Initialize buttons with first options
    part1.textContent = options1[ind1];
    part2.textContent = options2[ind2];
    part3.textContent = options3[ind3];
    part4.textContent = options4[ind4];
    part5.textContent = options5[ind5];

    //click handlers
    part1.addEventListener('click', function () { cycle(options1, 'ind1', part1); });
    part2.addEventListener('click', function () { cycle(options2, 'ind2', part2); });
    part3.addEventListener('click', function () { cycle(options3, 'ind3', part3); });
    part4.addEventListener('click', function () { cycle(options4, 'ind4', part4); });
    part5.addEventListener('click', function () { cycle(options5, 'ind5', part5); });

    tell.addEventListener('click', function () {
        var sentence = options1[ind1] + ' ' + options2[ind2] + ' ' + options3[ind3] + ' ' + options4[ind4] + ' ' + options5[ind5] + '.';
        storyText.textContent = sentence;
    });

    // pick a random index for each part and update buttons and output
    randomBtn.addEventListener('click', function () {
        ind1 = Math.floor(Math.random() * options1.length);
        ind2 = Math.floor(Math.random() * options2.length);
        ind3 = Math.floor(Math.random() * options3.length);
        ind4 = Math.floor(Math.random() * options4.length);
        ind5 = Math.floor(Math.random() * options5.length);
        part1.textContent = options1[ind1];
        part2.textContent = options2[ind2];
        part3.textContent = options3[ind3];
        part4.textContent = options4[ind4];
        part5.textContent = options5[ind5];

        // show story automatically
        var sentence = options1[ind1] + ' ' + options2[ind2] + ' ' + options3[ind3] + ' ' + options4[ind4] + ' ' + options5[ind5] + '.';
        storyText.textContent = sentence;
    });
    //set all indexes to 0 and clear story
    resetBtn.addEventListener('click', function () {
        ind1 = 0; ind2 = 0; ind3 = 0; ind4 = 0; ind5= 0;
        part1.textContent = options1[ind1];
        part2.textContent = options2[ind2];
        part3.textContent = options3[ind3];
        part4.textContent = options4[ind4];
        part5.textContent = options5[ind5];
        storyText.textContent = '(your story will appear here)';
    });
})