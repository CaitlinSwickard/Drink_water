// grabbing html elements
const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

// looping through cups to get selected clicked small cup to fill
smallCups.forEach((cup, idx) => {
  // console.log(idx);
  cup.addEventListener('click', () => highlightCups(idx))
})

// fill cup function
function highlightCups(idx) {
  // console.log(idx);
  // this check will clear the cup currently clicked on if the cup after it is not 'full' to clear 1 cup at a time
  if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--;
  }

  // looping thorough the small cups to add the full class list or remove as needed. 
  // The 'if' check will allow for someone to click on the 4th cup but also fill in the cups before it. 
  smallCups.forEach((cup, innerIdx) => {
    if (innerIdx <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })

  updateBigCup();
}

// function to fill in the big cup with the amount of small cups that are highlighted
function updateBigCup() {
  // gets the amount of full cups
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  // get total cups
  const totalCups = smallCups.length;

  // if cups are empty get rid of big cup text, or add it if cups are filled
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    // get height by taking the fullcups / totalcups * the size of the cup
    percentage.style.height = `${fullCups / totalCups * 330}px`;
    percentage.innerText = `${fullCups / totalCups * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups / 1000)}`
  }
}