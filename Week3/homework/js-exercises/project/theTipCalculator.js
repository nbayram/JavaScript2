'use strict';

{
  const billInput = document.querySelector('#firstbox input');
  const serviceSelect = document.querySelector('select');
  const shareInput = document.querySelector('#thirdbox input');
  const button = document.querySelector('button');
  const money = document.querySelector('#money');
  const each = document.querySelector('#each');

  function calculateTip() {
    const bill = billInput.value;
    const service = serviceSelect.value;
    const share = shareInput.value;
    let tip = (bill * service) / share;
    tip = (Math.floor(tip * 100) / 100).toFixed(2);

    if (bill === '' || share === '' || service === 0) {
      alert('You need to fill in all the fields!');
      return;
    }

    if (share === '' || share <= 1) {
      share = 1;
      each.style.display = 'none';
    } else {
      each.style.display = 'block';
    }

    money.textContent = tip;
  }

  button.addEventListener('click', calculateTip);

}