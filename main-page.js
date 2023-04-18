
let button1=document.querySelector("#start-quiz1");
let button2=document.querySelector("#start-quiz2");
let button3=document.querySelector("#start-quiz3");
let link1=document.querySelector("#q1");
let link2=document.querySelector("#q2");
let link3=document.querySelector("#q3");
let logIn=document.querySelector("#logInNavbar");
let logOut=document.querySelector("#logOutNavbar");
let signUp=document.querySelector("#signUpNavbar");


let welcome=document.querySelector("#welcome");

function onload (){
    if(sessionStorage.getItem('currentUser') === null){
        console.log("sessionStorage is empty")
    }
    else {
        let user=JSON.parse(sessionStorage.getItem('currentUser'));
        let userName=user.Name;
        console.log("session is full "+"user is "+userName)
        welcome.textContent="Welcome "+userName;
        logIn.style.display="none";
        signUp.style.display="none";
        logOut.style.display="block";
    }
}
window.addEventListener('load', onload);

button1.addEventListener('click',function(){
    if(sessionStorage.getItem('currentUser') === null){
        alert("Please log in to enter the quiz");
        return
    } else
    window.location.href="Quez/quez1.html";
});
button2.addEventListener('click',function(){
    if(sessionStorage.getItem('currentUser') === null){
        alert("Please log in to enter the quiz");
        return
    } else
    window.location.href="Quez/quez2.html";
    });
button3.addEventListener('click',function(){
    if(sessionStorage.getItem('currentUser') === null){
        alert("Please log in to enter the quiz");
        return
    } else
        window.location.href="Quez/quiz3.html";
        });

        link1.addEventListener('click',function(){
            if(sessionStorage.getItem('currentUser') === null){
                alert("Please log in to enter the quiz");
                return
            } else
            window.location.href="Quez/quez1.html";
            });
            link2.addEventListener('click',function(){
                if(sessionStorage.getItem('currentUser') === null){
                    alert("Please log in to enter the quiz");
                    return
                } else
                window.location.href="Quez/quez2.html";
                });
            link3.addEventListener('click',function(){
                if(sessionStorage.getItem('currentUser') === null){
                    alert("Please log in to enter the quiz");
                    return
                } else
                    window.location.href="Quez/quiz3.html";
                    });
logIn.addEventListener('click',function(){
    window.location.href="login/login.html";
});
logOut.addEventListener('click',function(){
    sessionStorage.clear();
    window.location.href="index.html";
   
});
signUp.addEventListener('click',function(){
    window.location.href="login/signup.html";
});