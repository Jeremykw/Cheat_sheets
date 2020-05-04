window.addEventListener('keydown', playSound) // playSound is call with the event as a parameter
	(https://developer.mozilla.org/en-US/docs/Web/Events) - list of all events
const key = document.querySelector(`.key[data-key="${e.keyCode}"]` // e is the event from the Event listenter

element.style
	.transform
	.rotate
	.color
	.width
	...

element.classList
	.add(class1, class2, ...)
	.remove(class1, class2, ...)
	.toggle

Array
	.filter(callBack) // callback must return a boolean
					  // executes callBack on each item of 
					  // array and retuns a new array with 
					  // elements where the call back was true

	.map(callBack)	  // executes callBack on every element
					  // returns new array7 with values callBack returnec
	
	.sort(function (a, b) { 	// mutates the array its called on
      if (a.year > b.year) {	// callback must return 1 or -1
        return 1;
      }
      else{
        return -1;
      }

    });	

	.reduce
	.some(callBack) // Boolean = does callBack return true for at least one element
	const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
	.every			// Boolean = does callBack return true for every element
	const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
	.find
	.findIndex // returns the index where boolean = true

const fullName = inventors.map(inventor => inventor.first + " " + inventor.last) // arrow function
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1); // if true return 1 else return -1
const oldest = inventors.sort((a,b) => (a.passed - a.year) < (b.passed - b.year) ? 1 : -1) // anonimus function with inline if

const typed = 'kitchener'
const regex = new RegExp(typed, 'gi');
const cityName = place.city.replace(regex, `<span class="hl">${typed}</span>`);

console
	.log
	.table
	.dir
	.clear

localStorage
	.setItem('key', JSON.stringify{})
	.getItem
	.removeItem

const dataIndex = event.target.dataset.index; // access an events dataset index
function populateList(plates = [], platesList) {  } // set parameter plates as a default array - prevents crashing if in the future you forget it to assign it

platesList.innerHTML = plates.map((plate, i) => {
  return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
      <label for="item${i}">${plate.text}</label>
    </li>
  `;
}).join(''); // map returns an array, innerHTML needs one long string, .join('') joins all elements with no spacesw



function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
  console.log(debounce)
}
