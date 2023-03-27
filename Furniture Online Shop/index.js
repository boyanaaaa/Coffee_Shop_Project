const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
}



const contactForm = document.querySelector('.contact');
const interiorBtn = document.getElementById("interiorBtn");
interiorBtn.addEventListener('click', () => {
    contactForm.classList.add("active");
})


const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener('click', () => {
    contactForm.classList.remove("active");
})

const contactUs = document.getElementById('contact');
contactUs.addEventListener('click', () => {
    alert("Thank you! Your message was sent!")
})

const subscribeBtn = document.getElementById('subscribe');
subscribeBtn.addEventListener('click', () => {
    alert('Thank you for your subscription!')
})


document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
}
  
