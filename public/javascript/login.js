const loginForm = document.querySelector('.login-form');
console.log(loginForm);

const uname = document.querySelector("#uname").value;
  console.log(uname);

//const uname = loginForm.querySelector("#uname").value;
console.log(uname);

async function loginFormHandler(event) {
  event.preventDefault();
 
  const uname = document.querySelector("#uname").value;
  console.log(uname);
  //const password = loginForm.querySelector('[name="pwd"]').value;
  
  //console.log(password);
  


  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}
/*
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}
*/

// open modal
document.getElementById('regNow').addEventListener('click',
function() {
  event.preventDefault();

    document.querySelector('.reg-modal').style.display = 'flex';
});

// close modal
document.querySelector('.close').addEventListener('click',
function() {
    document.querySelector('.reg-modal').style.display = 'none';
});



document.getElementById('passNow').addEventListener('click',
function() {
    document.querySelector('.passReset').style.display = 'flex';
});

document.getElementsByClassName('close2').addEventListener('click', 
function() {
    document.querySelector('.passReset').style.display = 'none';
});

loginForm.addEventListener('submit', loginFormHandler);

/*

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
*/