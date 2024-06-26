
  fetch('data.json')
  .then(response => response.json())
  .then(data => {

    // Get the days of the week
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    // Initialize totals object and sum
    const totals = {};
    let sum = 0;

    // Initialize totals object
    days.forEach(day => totals[day] = 0);

    // Sum up the amounts for each day
    data.forEach(item => {
      if (days.includes(item.day)) {
        totals[item.day] += item.amount;
        sum += item.amount;
      } 
    }); 
    
    // Update the bars
    days.forEach(day => {
      const bar = document.getElementById(`${day}`);
      bar.style.height = `${totals[day]}px`;
    });

    // Update the total amount
    document.getElementById('total-amount').textContent = sum;


  });
  
