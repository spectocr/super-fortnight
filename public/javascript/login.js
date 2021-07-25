const loginForm = document.querySelector('.login-form');
console.log(loginForm);

const uname = document.querySelector("#uname").value;
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
loginForm.addEventListener('submit', loginFormHandler);

/*

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
*/