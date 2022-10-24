// Business Logic

// User Interface Logic
window.addEventListener('load', function() {
  let form1 = document.querySelector('form#form1');
  form1.addEventListener('submit', handleSubmit);
});

window.addEventListener('load', function() {
  let form2 = document.querySelector('form#form2');
  form2.addEventListener('submit', handleSubmit2);
});

window.addEventListener('load', function() {
  let form3 = document.querySelector('form#form3');
  form3.addEventListener('submit', handleSubmit3);
});


let favThings = [];

function handleSubmit(event) {
  event.preventDefault();
  const favInput = document.getElementById('firstFav').value;
  favThings.push(favInput);

  const display1H2 = document.querySelector('h2#display1');
  display1H2.innerText = '';
  display1H2.append(favThings);
}

function handleSubmit2(event) {
  event.preventDefault();
  const access = parseInt(document.getElementById('access').value);

  const display2H2 = document.querySelector('h2#display2');
  display2H2.innerText = '';
  display2H2.append(favThings[access]);
}

// Only works with an array containing 3 elements
function handleSubmit3(event) {
  event.preventDefault();
  let rearrange = [];
  rearrange.push(favThings[2], favThings[1], favThings[0]);

  const body = document.querySelector('body');
  const newUl = document.createElement('ul');
  const newLi1 = document.createElement('li');
  newLi1.append(rearrange[0]);
  const newLi2 = document.createElement('li');
  newLi2.append(rearrange[1]);
  const newLi3 = document.createElement('li');
  newLi3.append(rearrange[2]);
  newUl.append(newLi1, newLi2, newLi3);
  body.append(newUl);
}