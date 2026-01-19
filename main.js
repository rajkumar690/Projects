var typed=new Typed('.text',{
    strings:["Frontend Developer","Youtuber","Blogger","Java Developer","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
function sendMail(){
    let parms={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("textarea").value,
    }
    emailjs.send("service_mohj9ea","template_h31ivp7",parms).then(alert("Email Sent!"))
}
let menuIconElement=document.querySelector(".menu-icon");
let navbarElement=document.querySelector('.show,.navbar');
let closebtnElement=document.querySelector('.closebtn');
menuIconElement.addEventListener('click',function(){
    navbarElement.style.left='0px'; 
})
closebtnElement.addEventListener('click',()=>{
    navbarElement.style.left='900px';
})