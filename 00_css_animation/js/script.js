// Script

// Get the value of a custom property at runtime
//var styles = getComputedStyle(document.documentElement);
//var value = String(styles.getPropertyValue('--text-color')).trim();

// Set variable by JS at runtime
//document.documentElement.style.setProperty('--text-color', 'red');

window.changeColor = function(){
  element = document.querySelector(’.square');
  element.className = 'square animated’;
}