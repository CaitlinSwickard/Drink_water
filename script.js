// grabbing html elements
const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

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
}