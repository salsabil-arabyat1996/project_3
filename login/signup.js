let login=document.querySelector("#logInNavbar");
login.addEventListener('click', function(){
  window.location.href="login.html";
});
//validation section

function ValidateForm(event) {
    // Declare variables
    let Username = document.getElementById("Name");
    let nameerror = document.getElementById("nameerror");
    let Email = document.getElementById("Email");
    let Emailerror = document.getElementById("emailerror");
    let Password = document.getElementById("Password");
    let passworderror = document.getElementById("passworderror");
    let Confirm = document.getElementById("Confirm");
    let confirmerror = document.getElementById("confirmerror");
    
    //let Phone = document.getElementById("Phone");
    //let phoneerror = document.getElementById("phoneerror");
    //let check=document.getElementById("checked");
    let passwordregex=/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name section
    if (Username.value === '') {
      nameerror.style.color = "black";
      nameerror.textContent = "The name field is required.";
      Username.style.borderColor = "#FEA0CD";
      event.preventDefault();
    } else {
      nameerror.textContent = "";
      Username.style.borderColor = "";
    }
  
    // Email section
    if (Email.value === '') {
      Emailerror.style.color = "black";
      Emailerror.textContent = "The email field is required.";
      Email.style.borderColor = "#FEA0CD";
      event.preventDefault();
    } else if (!emailregex.test(Email.value)) {
      Emailerror.style.color = "black";
      Emailerror.textContent = "You have entered an invalid email address!";
      Email.style.borderColor = "#FEA0CD";
      event.preventDefault();
    } else {
      Emailerror.textContent = "";
      Email.style.borderColor = "";
    }
  
    // Password section
    if (Password.value === '') {
      passworderror.style.color = "black";
      passworderror.textContent = "The password field is required.";
      Password.style.borderColor = "#FEA0CD";
      event.preventDefault();
    } else if (!passwordregex.test(Password.value)) {
      passworderror.style.color = "black";
      passworderror.textContent = "The password must be contain characters and numbers and its length 6-18.";
      Password.style.borderColor = "#FEA0CD";
      event.preventDefault();
    } else {
      passworderror.textContent = "";
      Password.style.borderColor = "";
    }
  
    // Confirm password section
    if (Confirm.value === '') {
      confirmerror.style.color = "black";
      confirmerror.textContent = "The confirm password field is required.";
      Confirm.style.borderColor = "#FEA0CD";
      event.preventDefault();
    } else if (Confirm.value !== Password.value) {
      confirmerror.style.color = "black";
      confirmerror.textContent = "The passwords do not match.";
      Confirm.style.borderColor = "#FEA0CD";
      event.preventDefault();
    } else {
      confirmerror.textContent = "";
      Confirm.style.borderColor = "";
    }
    if(confirmerror.textContent == "" && passworderror.textContent == "" && Emailerror.textContent == "" && nameerror.textContent == ""){
      alert("Sign up successfull");
    }

  }
 

  //Add & Store data section
//   function StoreData ()
// {
  
//   let Username = document.getElementById("Name").value;
//   let Email = document.getElementById("Email").value;
//   let Password = document.getElementById("Password").value;
//   let Phone = document.getElementById("Phone").value;

//   let users=
// {
//   username:Username,
//   Email:Email,
//   Password:Password,
//   Phonenumber:Phone
// };
 
//   USERS.push(users);
//   localStorage.setItem("users infoemation",JSON.stringify (USERS));
// }
function StoreData() {
  let Username = document.getElementById("Name").value;
  let Email = document.getElementById("Email").value;
  let Password = document.getElementById("Password").value;

  // Get existing users from localstorage, or initialize an empty array
  let existingUsers = JSON.parse(localStorage.getItem("users information")) || [];

  let user = {
    username: Username,
    Email: Email,
    Password: Password,
  };

  // Add the new user to the existing array of users
  existingUsers.push(user);

  // Save the updated array of users to localstorage
  localStorage.setItem("users information", JSON.stringify(existingUsers));
}
  // Clear form inputs for next user
  username = "";
  Email = "";
  Password = "";
  
document.getElementById("signup").addEventListener("click", ValidateForm);
