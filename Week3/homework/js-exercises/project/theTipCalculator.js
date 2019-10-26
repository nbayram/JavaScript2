'use strict';

{
  const billAmount = document.querySelector('#firstbox input').value;
  const serviceRate = document.getElementById('serviceRate').value;
  const numberOfWaiters = document.querySelector('#thirdbox input').value;
  const button = document.querySelector('button');
  const money = document.querySelector('#money');
  const each = document.querySelector('#each');
  let tip = billAmount * serviceRate / numberOfWaiters;

  function calculateTip() {
    if (billAmount === '' || serviceRate === 0) {
      return alert('You need to fill in all the fields!');
    };

    if (numberOfWaiters === '' || numberOfWaiters <= 1) {
      numberOfWaiters = 1;
      each.style.display = 'none';
    } else {
      each.style.display = 'block';
    };

    tip = Math.round(tip * 100) / 100;
    tip = tip.toFixed(2);

    summary.style.display = 'block';
    money.textContent = tip;

  }

  summary.style.display = 'none';
  each.style.display = 'none';

  button.addEventListener('click', calculateTip);

}