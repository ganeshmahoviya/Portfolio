/*creating button click show hide navbar */
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navinks");
var links = document.querySelector(".navinks li");


togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

// var Typed =new Typed(".input",{
//     Strings:["frontend developer","ux developer","web dwvwlopwe"],
//     typedSpeed:70,
//     backSpeed:55,
//     loop:true
// })



const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mess = document.getElementById("message");





function sendEmail(){
    const bodyMessage = `Full name: ${fullName.value}<br> Email: ${email.value} <br> Phone Number: ${phone.value}<br> Message:${mess.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ganeshmahoviya@gmail.com",
        Password : "BA6341A1D9E026EB55EA62D418DB2AEBA918",
        To : 'ganeshmahoviya@gmail.com',
        From : "ganeshmahoviya@gmail.com",
        Subject : 'hi there',
        Body : bodyMessage
    }).then(
      message => alert(message)
    );

}

form.addEventListener("submit",(e) =>{

    e.preventDefault();

    sendEmail();

});