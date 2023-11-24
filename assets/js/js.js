


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
  let email = document.getElementById('email').value;
  let phoneno = document.getElementById('phoneno').value;
  let password = document.getElementById('password').value;
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;
  let specialcharacter = /[!,@,#,$,%,^,&,*,(,)]/g;
  let getpasswordlength = password.length;
  let phonenolength = phoneno.length;
  

  if(name.length == 0){
      alert('Please fill in your name');

  }
  else if(email.length == 0){
    alert('Please fill in email');

  }
  else if(phonenolength == 10){
    alert('please enter valid phone number');
  
    }
  else if(password.length == 0){
      alert('Please fill in password');

  }
  else if(email.length == 0 && password.length == 0){
      alert('Please fill in email and password');

  }
  
  else if(getpasswordlength < 7){
      alert('min of 8');

  }
  else if(!password.match(numbers)){
      alert('please use 1 number in password');

  }
  else if(!password.match(upperCaseLetters)){
      alert('please use 1 uppercase letter in password');

  }
  else if(!password.match(lowerCaseLetters)){
      alert('please use 1 lovercase letter in your password');

  }
  else if(!password.match(specialcharacter)){
    alert('please use at least 1 special character in your password');

  }
  else{

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

  const storedatar = JSON.parse(localStorage.getItem('formdata')) || [];
  
  const user = storedatar.find(data => data.email === email);

  if(user && user.password === password){
    alert('Login successful')
    window.location.href = '../assignmentbus/assets/pages/bussearch.html';

  }
  else{
    alert('invalid email/phone no or password. please try again.');
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

  const busData = getBusData(from, to, date)

  displayBusList(busData)
}

function getBusData(from, to, date) {
  const buses = [
    {from: 'Assam', to: 'Delhi', time: '10;00 AM'},
    {from: 'Assam', to: 'Himachal', time: '10;00 pM'},
    {from: 'Chandigarh', to: 'Delhi', time: '12;00 pM'},
    {from: 'Chandigarh', to: 'Delhi', time: '02;00 AM'},
    {from: 'Assam', to: 'Delhi', time: '09;00 pM'},
    {from: 'Assam', to: 'Himachal', time: '08;00 AM'},
    {from: 'Chandigarh', to: 'Delhi', time: '04;00 pM'},
    {from: 'Chandigarh', to: 'Uttrakhand', time: '06;00 AM'},
    {from: 'Assam', to: 'Himachal', time: '01;00 pM'},
    {from: 'Assam', to: 'Uttrakhand', time: '12;00 AM'},
    {from: 'Chandigarh', to: 'Uttrakhand', time: '11;00 pM'},
    {from: 'Assam', to: 'Delhi', time: '01;00 pM'}
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
    const input = document.createElement('input')
    input.setAttribute("id", "booknow");
    input.setAttribute("type", "button");
    input.setAttribute("onclick", "booknow()");
    input.value = 'Book Now'
    li.textContent = `From: ${bus.from}, To: ${bus.to}, Time: ${bus.time}`
    ul.appendChild(li)
    
    li.appendChild(input)
  })
          
  busListDiv.appendChild(ul)
}

function booknow(){
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
			}

			function confirmSeats() {
				if (selectedSeats.length >= 2 && selectedSeats.length <= 5) {
					
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
      let invoicedata = JSON.parse(localStorage.getItem('formdata'))
// let invoiceemail = invoicedata.get(email).value
console.log(invoicedata);
document.getElementById('invoiceemail').innerHTML = invoiceemail
}    