function changeheading(name){
	let heading = document.querySelector('.contact');
	heading.innerHTML = name;

}
 changeheading('<mark>gone to school</mark>');


function handlesubmit(){
event.preventDefault();
let form = event.target
let email = form.email.value;
let guests = form.guests.value; 
let list = document.querySelector('#attendees');
list.innerHTML += '<strong>'+ '<P>' + email + '  '+ guests + '</P>' + '</strong>';
}

let form = document.querySelector('form');
form.addEventListener('submit', handlesubmit);
 