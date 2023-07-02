let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
}
window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
}


  // email js
  function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener ("click", (e) => {
       e.preventDefault();
       if (name.value == "" || email.value == "" || msg.value == ""){
        emptyerror();
       }else {
        sendmail (name.value, email.value, msg.value);
        success();
       }
    });
  }
  validate();

  function sendmail (name,email,msg){
    emailjs.send("service_p7jl66f","template_9cczhss",{
      to_name: email,
      from_name: name,
      message: msg,
      });
  }


 function emptyerror() {
  swal({
    title: "guoblook!",
    text: "harus di isi",
    icon: "error",
  });
 }
 function success() {
  swal({
    title: "ohh yesss, kimochi",
    text: "kami akan merespon dalam 24 jam",
    icon: "success",
  });
 }

 // header //

 let header = document.querySelector('header')

 window.addEventListener('scroll', () => {
  header.classList.toggle('header-active', window.scrollY > 0);
 });

 // scroll top//
 
 let scrolltop = document.querySelector('.scroll-top')

 window.addEventListener('scroll', () => {
  scrolltop.classList.toggle('scroll-active', window.scrollY >= 400);
 });
  