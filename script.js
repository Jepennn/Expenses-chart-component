
  fetch('data.json')
  .then(response => response.json())
  .then(data => {

    // Get the days of the week
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    //Get all paragrafs elements
    const amountParagrafs = document.querySelectorAll('.amount');

    // Update the amounts
    amountParagrafs.forEach((paragraf, index) => {
      paragraf.textContent = `$${data[index].amount}`;
    });

    // Initialize totals object and sum
    const totals = {};
    let sum = 0;

    // Initialize totals object
    days.forEach(day => totals[day] = 0);

    // Summerize the amounts for each day
    data.forEach(item => {
      if (days.includes(item.day)) {
        totals[item.day] += item.amount;
        sum += item.amount;
      } 
    }); 

    //Update the bars
    days.forEach(day => {
      const bar = document.getElementById(`${day}`);
      bar.style.height = `${totals[day] * 2}px`;

    });

    //Update the total amount
    document.getElementById('total-amount').textContent = `$${sum.toFixed(2)}`;

  });


  document.addEventListener('DOMContentLoaded', (event) => {
    // Först, få referenser till elementen
    var bars = document.querySelectorAll('.bars');
    var lable = document.querySelectorAll('.lable');

    // Sedan, lägg till händelsehanterare för varje bar-element
    bars.forEach((bar, index) => {
        bar.addEventListener('mouseover', () => {
            lable[index].style.opacity = '1';
        });

        bar.addEventListener('mouseout', () => {
            lable[index].style.opacity = '0';
        });
    });
});
