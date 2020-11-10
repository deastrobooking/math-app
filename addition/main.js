// Addition script
const myForm = document.querySelector('#my-form');
const inactiveForm = document.querySelector('#inactive-form');
const h3 = document.querySelector('#h3');
const answerInput = document.querySelector('#answer');
const msg = document.querySelector('.msg');
const active = document.querySelector('.active');
const inactiveH3 = document.querySelector('#inactive-h3');
const inactiveH5 = document.querySelector('#inactive-h5');
const inactiveButton = document.querySelector('#inactive-btn');
const inactiveHome = document.querySelector('#inactive-home');
const inactive = document.querySelector('.inactive');
// whitespace or blank regex
const regex = /^\s*$/;

hideInactive()

let nums = resetActive();
let num1 = nums[0];
let num2 = nums[1];
let answer = num1 + num2;

myForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  if (answerInput.value.match(regex)) {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter your answer';
    answerInput.value = '';

    setTimeout(() => msg.remove(), 3000);
  } else if (answerInput.value == answer) {
    // hide the form
    hideActive();
    // show the other things
    inactiveH3.innerText = 'Correct!';
    inactiveH5.innerHTML = `${num1} + ${num2} = ${answer}`;
    inactiveButton.value = 'Next';
    showInactive();
  } else if (answerInput.value != answer) {
    // hide the form
    hideActive();
    // show the other things
    inactiveH3.innerText = 'Incorrect';
    inactiveH5.innerHTML = `You answered: ${answerInput.value}<br>Correct answer: ${num1} + ${num2} = ${answer}`;
    inactiveButton.value = 'Try another';
    showInactive();
  }
}

inactiveForm.addEventListener('submit', resetPage);

function genNums() {
  const num1 = Math.floor((Math.random() * 10) + 1);
  const num2 = Math.floor((Math.random() * 10) + 1);
  return [num1, num2];
}

function resetPage(event) {
  event.preventDefault();
  const nums = resetActive();
  num1 = nums[0];
  num2 = nums[1];
  answer = num1 + num2;
  hideInactive();
  showActive();
}

function resetActive() {
  const nums = genNums();
  const num1 = nums[0];
  const num2 = nums[1];
  answerInput.value = '';
  h3.textContent = `What is ${num1} + ${num2}?`;
  return nums;
}

function showActive() {
  myForm.style.visibility = 'visible';
  myForm.style.display = 'initial';
}

function hideActive() {
  myForm.style.visibility = 'hidden';
  myForm.style.display = 'none';
}

function showInactive() {
  inactive.style.visibility = 'visible';
  inactive.style.display = 'initial';
  inactiveHome.style.visibility = 'visible';
  inactiveHome.style.display = 'initial';
}

function hideInactive() {
  inactive.style.visibility = 'hidden';
  inactive.style.display = 'none';
  inactiveHome.style.visibility = 'hidden';
  inactiveHome.style.display = 'none';
}
