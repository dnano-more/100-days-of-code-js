console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    //One liner solution
    body.style.backgroundColor = e.target.id;

    // Using if
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    
    // Using switch case
    switch(e.target.id) {
      case 'grey':
      case 'white':
      case 'blue':
      case 'yellow':
      case 'red':
      case 'green':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        console.log('Unknown color'); 
    }


    // Using ternary operator
    e.target.id === 'grey' ? body.style.backgroundColor = e.target.id :
    e.target.id === 'white' ? body.style.backgroundColor = e.target.id :
    e.target.id === 'blue' ? body.style.backgroundColor = e.target.id :
    e.target.id === 'yellow' ? body.style.backgroundColor = e.target.id :
    e.target.id === 'red' ? body.style.backgroundColor = e.target.id :
    e.target.id === 'green' ? body.style.backgroundColor = e.target.id :
    console.log('Unknown color');


    // Using bracket notation
    const colors = ['grey', 'white', 'blue', 'yellow', 'red', 'green'];
    if (colors.includes(e.target.id)) {
      body.style.backgroundColor = e.target.id;
    } else {
      console.log('Unknown color');
    }

  });
});

