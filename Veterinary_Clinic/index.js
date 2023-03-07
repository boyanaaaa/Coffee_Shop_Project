const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-button");

  btn.addEventListener("click", function () {
    question.classList.toggle("show-text");
  });
});





// SWIPER
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});



//STATISTIC
let number = document.getElementById("number");
let number2 = document.getElementById("number2");
let counter = 0;
let counter2 = 0;

setInterval(() => {
  if(counter == 98){
    clearInterval();
  }else{
    counter += 1;
    number.innerHTML = counter + "%";
  }
  
}, 10);

setInterval(() => {
  if(counter2 == 100){
    clearInterval();
  }else{
    counter2 += 1;
    number2.innerHTML = counter + "%";
  }
  
}, 10);




function sendEmail(){
    Email.send({
      Host : "smtp.gmail.com",
      Username : "boyanadimitrova11@gmail.com",
      Password : "*******",
      To : 'boyanadimitrova11@gmail.com',
      From : document.getElementById("email").value,
      Subject : "New Contact Form",
      Body : "Name:" + document.getElementById("name").value
      + "<br> Email:" + document.getElementById("email").value
      + "<br> Phone number:" + document.getElementById("phone").value
      + "<br> Message:" + document.getElementById("message").value
  }).then(
    message => alert("Message Sent Successfully")
  );
}