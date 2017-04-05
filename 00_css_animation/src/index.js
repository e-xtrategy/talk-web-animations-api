// Button toggle
const element = document.querySelector('.div_transition2');
document.querySelector('button[role="activator"]').addEventListener('click',() => {
  element.classList.toggle('animated');
})

// Custom properties runtime variables

// Get the value of a custom property at runtime
var styles = getComputedStyle(document.documentElement);
var value = String(styles.getPropertyValue('--text-color')).trim();

// Set variable by JS at runtime
document.documentElement.style.setProperty('--text-color', 'red');