const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', function () {
  const cost = document.querySelectorAll('input');
  let per = (cost[0].value / 100);
  let tip = (per * cost[1].value).toFixed(2);
  let temp = `<h1>You should tip $${tip} on $${cost[1].value}</h1>`;
  output.innerHTML = temp;
})