let userEmail = "";
let seatprice = "";


// nav function
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


//sing up page 

function storedata(){
  let name = document.getElementById('name').value;
  let nemecapital = name.charAt(0)
  let email = document.getElementById('email').value;
  let phoneno = document.getElementById('phoneno').value;
  let password = document.getElementById('password').value;
  let confirmpassword  = document.getElementById('confirmpassword').value;
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;
  let specialcharacter = /[!,@,#,$,%,^,&,*,(,)]/g;
  let getpasswordlength = password.length;
  let phonenolength = phoneno.length;
  

  if(name.length == 0 && email.length == 0 && phonenolength == 0 && getpasswordlength == 0 && confirmpassword.length == 0){
    document.getElementById('name').style.border = '2px solid red'
    document.getElementById('namevalidation').innerHTML = 'Please enter your name'
    
    document.getElementById('email').style.border = '2px solid red'
    document.getElementById('emailvalidation').innerHTML = 'Please enter your Email'

    document.getElementById('phoneno').style.border = '2px solid red'
    document.getElementById('phonenovalidation').innerHTML = 'Please enter your Phone no.'

    document.getElementById('password').style.border = '2px solid red'
    document.getElementById('passwordvalidation').innerHTML = 'Please enter your Password'

    document.getElementById('confirmpassword').style.border = '2px solid red'
    document.getElementById('confirmpasswordvalidation').innerHTML = 'Please enter your Confirm password'


  }
  else if(name.length == 0){
    document.getElementById('name').style.border = '2px solid red'
    document.getElementById('namevalidation').innerHTML = 'Please enter your name.'
  }

  else if(!nemecapital.match(upperCaseLetters)){
    

    document.getElementById('name').style.border = '2px solid red'
    document.getElementById('namevalidation').innerHTML = 'Your name should start form Capital latter.'

  }
  else if(email.length == 0){
    document.getElementById('name').style.border = 'none'
    document.getElementById('email').style.border = '2px solid red'
    document.getElementById('emailvalidation').innerHTML = 'Please enter your Email'

  }
  else if(phoneno.length == 9){
    document.getElementById('email').style.border = 'none'

    document.getElementById('phoneno').style.border = '2px solid red'
    document.getElementById('phonenovalidation').innerHTML = 'Please enter your Phone no.'

    }
  else if(password.length == 0){
    document.getElementById('Password').style.border = 'none'

    document.getElementById('password').style.border = '2px solid red'
    document.getElementById('passwordvalidation').innerHTML = 'Please enter your Password'

  }
  else if(email.length == 0 && password.length == 0){
    document.getElementById('password').style.border = '2px solid red'
    document.getElementById('passwordvalidation').innerHTML = 'Please enter your Password'
    document.getElementById('email').style.border = '2px solid red'
    document.getElementById('emailvalidation').innerHTML = 'Please enter your Password'

  }
  
  else if(getpasswordlength < 8){
    document.getElementById('password').style.border = '2px solid red'
    document.getElementById('passwordvalidation').innerHTML = 'Minimum 8 characters required'
  

  }
  else if(!password.match(numbers)){
    document.getElementById('password').style.border = '2px solid red'
    document.getElementById('passwordvalidation').innerHTML = 'atlast 1 No. required'
  

  }
  else if(!password.match(upperCaseLetters)){
    document.getElementById('password').style.border = '2px solid red'
    document.getElementById('passwordvalidation').innerHTML = 'atlast 1 Uppercase letter required'

  }
  else if(!password.match(lowerCaseLetters)){
    document.getElementById('password').style.border = '2px solid red'
    document.getElementById('passwordvalidation').innerHTML = 'atlast 1 Lowercase letter required'

  }
  else if(!password.match(specialcharacter)){
    document.getElementById('password').style.border = '2px solid red'
    document.getElementById('passwordvalidation').innerHTML = 'atlast 1 special character required'

  }
  else if(password != confirmpassword){
    document.getElementById('password').style.border = 'none'

    document.getElementById('confirmpassword').style.border = '3px solid red'
    document.getElementById('passwordvalidation').innerHTML = 'Password did not match'
    

  }
  else{
    document.getElementById('confirmpassword').style.border = 'none'

    let storedata = JSON.parse(localStorage.getItem('formdata')) || [];

    const duplicate = storedata.some(data => data.email === email || data.phoneno === phoneno);
    
    if(duplicate){
      alert('use another email or phone number');
      return;
    }


const formdata = {
  name: name,
  email: email,
  phoneno: phoneno,
  password: password
};


storedata.push(formdata);

localStorage.setItem('formdata', JSON.stringify(storedata));

document.getElementById('registerform').reset()


    // localStorage.setItem('name', name.value);
    //   localStorage.setItem('email', email.value);
    //   localStorage.setItem('phoneno', phoneno.value);
    //   localStorage.setItem('password', password.value);

    window.location.href = '../../index.html';
      alert('Your account has been created successfully!.');

  }
}

//checking
// function check(){
//   let storedName = localStorage.getItem('name');
//   let storedPw = localStorage.getItem('pw');

//   let userName = document.getElementById('userName');
//   let userPw = document.getElementById('userPw');
//   let userRemember = document.getElementById("rememberMe");

//   if(userName.value == storedName && userPw.value == storedPw){
//       alert('You are logged in.');
//   }else{
//       alert('Error on login');
//   }
// }

function loginform(){
  const email = document.getElementById('loginemail').value;
  const password = document.getElementById('loginpassword').value;
  localStorage.setItem('userEmail', email);

  const storedatar = JSON.parse(localStorage.getItem('formdata')) || [];
  
  const user = storedatar.find(data => data.email == email);

  if(user && user.password === password){
    
    document.getElementById('loginemail').style.border = 'none'
    document.getElementById('loginpassword').style.border = 'none'
    alert('Login successful')
    window.location.href = '../bus/assets/pages/bussearch.html';

  }
  else{
    // alert('invalid email/phone no or password. please try again.');
    document.getElementById('loginemail').style.border = '3px solid red'
    document.getElementById('loginpassword').style.border = '3px solid red'

    document.getElementById('validatelogin').innerHTML = 'enter valid password or email.'
  }
}









// seats javascript

// document.addEventListener('DOMContentLoaded', function () {
//   const seats = document.querySelectorAll('.seat');

//   seats.forEach(seat => {
//       seat.addEventListener('click', () => {
//           seat.classList.toggle('selected');
//           if (seats < 6 || seats > totalSeats) {
//             return false;
//           }
        
//           // Check if the seat is not already selected by another user
//           if (selectedSeats.includes(seats)) {
//             return false;
//           }
          
//       });
//   });

//   document.querySelector('button').addEventListener('click', () => {
//       const selectedSeats = document.querySelectorAll('.seat.selected');

//       alert(`You have selected ${selectedSeats.length} seats.`);
//   });
// });




// bus search
function searchbuses() {
  const from = document.getElementById('from').value
  const to = document.getElementById('to').value
  const date = document.getElementById('date').value

  if(from == "" && to == "" && date == ""){
    document.getElementById('from').style.border = '3px solid red'
    document.getElementById('to').style.border = '3px solid red'
    document.getElementById('date').style.border = '3px solid red'
  }
  else if(from == ""){
    document.getElementById('from').style.border = '3px solid red'

  }
  else if(to == ""){
    document.getElementById('from').style.borderColor = 'blue'

    document.getElementById('to').style.border = '3px solid red'

  }
  else if(date == ""){
    document.getElementById('to').style.borderColor = 'blue'
    document.getElementById('date').style.border = '3px solid red'
  }
  else
  {
    document.getElementById('date').style.borderColor = 'blue'
    document.getElementById('from').style.borderColor = 'blue'

    document.getElementById('to').style.borderColor = 'blue'


  const busData = getBusData(from, to, date)

  displayBusList(busData)

function getBusData(from, to, date) {
  const buses = [
    {from: 'Assam', to: 'Delhi', time: '10;00 AM', prise: '200'},
    {from: 'Assam', to: 'Himachal', time: '10;00 pM', prise: '300'},
    {from: 'Chandigarh', to: 'Delhi', time: '12;00 pM', prise: '200'},
    {from: 'Chandigarh', to: 'Delhi', time: '02;00 AM', prise: '200'},
    {from: 'Assam', to: 'Delhi', time: '09;00 pM', prise: '200'},
    {from: 'Assam', to: 'Himachal', time: '08;00 AM', prise: '300'},
    {from: 'Chandigarh', to: 'Delhi', time: '04;00 pM', prise: '200'},
    {from: 'Chandigarh', to: 'Uttrakhand', time: '06;00 AM', prise: '300'},
    {from: 'Assam', to: 'Himachal', time: '01;00 pM', prise: '300'},
    {from: 'Assam', to: 'Uttrakhand', time: '12;00 AM', prise: '200'},
    {from: 'Chandigarh', to: 'Uttrakhand', time: '11;00 pM', prise: '300'},
    {from: 'Assam', to: 'Delhi', time: '01;00 pM', prise: '200'}
  ]

  const filteredBuses = buses.filter((bus) => bus.from === from && bus.to === to)

  return filteredBuses
}

function displayBusList(busData) {
  const busListDiv = document.getElementById('buslist')
  busListDiv.innerHTML = '' 

  if (busData.length === 0) {
    busListDiv.innerHTML = 'No buses available for the selected route and date.'
    return
  }

  const ul = document.createElement('ul')
  busData.forEach((bus) => {
    const li = document.createElement('li')
    const input = document.createElement('button')
    input.setAttribute("id", "booknow");
    input.setAttribute("onclick", "booknow()");
    input.value = `${bus.prise}`
    input.textContent = 'Book Now'
    li.textContent = `From: ${bus.from}, To: ${bus.to}, Time: ${bus.time}, Prise: ${bus.prise}`
    ul.appendChild(li)
    li.appendChild(input)

  })
          
  busListDiv.appendChild(ul)
}
}
}


function booknow(){
  seatprice = document.getElementById('booknow').value
localStorage.setItem('seatprice', seatprice);
  window.location.href = '../pages/pages.html'
}




// seat selection

let selectedSeats = []
			let seatStatus = {} 

			function displayAvailableSeats() {
				const seatSelectionDiv = document.getElementById('seatSelection')
				seatSelectionDiv.innerHTML = ''

				const totalSeats = 50 
				for (let i = 1; i <= totalSeats; i++) {
					const seatButton = document.createElement('div')
					seatButton.textContent = `Seat ${i}`
					seatButton.className = 'seat'

					if (seatStatus[i] === 'booked') {
						seatButton.classList.add('booked')
						seatButton.disabled = true
            
					} else if (selectedSeats.includes(i)) {
						seatButton.classList.add('selected')
					} else {
						seatButton.onclick = function () {
							selectSeat(i)
						}
					}
					seatSelectionDiv.appendChild(seatButton)
				}
			}

			function selectSeat(seatNumber) {
				if (selectedSeats.length < 5 && !selectedSeats.includes(seatNumber)) {
					selectedSeats.push(seatNumber)
					seatStatus[seatNumber] = 'selected'
					displayAvailableSeats()
  				}
        else
        {
          alert("you can only select minimum 2 seats and max 5 seats")
        }
			}

			function confirmSeats() {
userEmail = localStorage.getItem('userEmail');
console.log(userEmail)
        if(userEmail == null)
        {
alert("please Register or Login before booking Bus Tickets")
window.location.href = '../pages/registration.html'
console.log(userEmail)
        }
				else if (selectedSeats.length >= 2 && selectedSeats.length <= 5) {
					
					console.log('Selected seats:', selectedSeats)

					
					selectedSeats.forEach((seat) => {
						seatStatus[seat] = 'booked'
					})
					selectedSeats = []

				
					localStorage.setItem('seatStatus', JSON.stringify(seatStatus))

					displayAvailableSeats() 
          window.location.href = '../pages/invoice.html'
				} else {
					alert('Please select between 2 to 5 seats.')
				}
			}

		
			const storedSeatStatus = localStorage.getItem('seatStatus')
			if (storedSeatStatus) {
				seatStatus = JSON.parse(storedSeatStatus)
			}


			displayAvailableSeats()
    


      // invoice code
function invoicedata(){

console.log(userEmail)
  
      let invoicedata = JSON.parse(localStorage.getItem('formdata'))
      let seatbooked = JSON.parse(localStorage.getItem('seatStatus'))
      let lastseatprice = JSON.parse(localStorage.getItem('seatprice'))

// let invoiceemail = invoicedata.get(email).value
// console.log(invoicedata[0].email);
userEmail = localStorage.getItem('userEmail');
const randomNumber = Math.floor(Math.random() * 1000);
const paddedNumber = randomNumber.toString().padStart(3, '0');
  const remainingDigits = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  const finalNumber = paddedNumber + remainingDigits;
const currentdate = new Date();
const date = currentdate.getDate().toString();
const month = currentdate.getMonth().toString();
const year = currentdate.getFullYear().toString();
const orderno = document.getElementById('orderno').innerHTML = randomNumber;
  

for( let i = 0; i < invoicedata.length; i++)

{
  if(invoicedata[i].email === userEmail)
  {
    console.log(invoicedata[i].email);
    document.getElementById('name').innerHTML = invoicedata[i].name
    document.getElementById('email').innerHTML = invoicedata[i].email
    document.getElementById('invoiceno').innerHTML = finalNumber;
    document.getElementById('currentdate').innerHTML = date + "/" + month + "/" +  year;
    
    const keys = Object.keys(seatbooked);
    document.getElementById('bookingseats').innerHTML = 'X ' + keys.length
    document.getElementById('price').innerHTML = lastseatprice
    let totalprice = keys.length * lastseatprice;
    document.getElementById('total').innerHTML = totalprice
    
    localStorage.removeItem('userEmail');
    
  }
  else{
    localStorage.removeItem('userEmail');


  }
}
// document.getElementById('invoiceemail').innerHTML = invoiceemail
}    