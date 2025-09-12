const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(document).ready(function(){
  $(".carousel-one").owlCarousel({
    items : 5,
    loop : true ,
    nav : true ,
    navText : ['<i class="fa-solid fa-angle-left" style="padding: 80% 23%;"></i>' , '<i class="fa-solid fa-angle-right " style="padding: 80% 23%;"></i>']
  });
});

$(document).ready(function(){
  $(".carousel-two").owlCarousel({
    items : 6,
    loop : true ,
    nav : false ,
    autoplay : true
  });
});

if (document.getElementById('contactForm')) {
    var contactForm = document.getElementById('contactForm')
    contactForm.addEventListener('input', (e) => {
        if (e.target.id == "usertName") {
            nameValidation(e.target)
        }
        else if (e.target.id == "userEmail") {
            emailValidation(e.target)
        }
    })
}

var nameValidation = (element) => {
    var inputValue = element.value.trim()
    console.log(inputValue.length);
    (inputValue.length < 3)
        ? handleError(element, "Please enter at least 3 character")
        : handleError(element)

}
var emailValidation = (input) => {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(input.value)) handleError(input)
    else handleError(input, "please enter a valid email")

}
if (document.getElementById('contactForm')) {
contactForm.addEventListener("submit",(e)=>{
      e.preventDefault()
      if(emailValidation&&nameValidation){
         contactForm.submit();
         showSuccess();
         
      }
      else
         showError()



   })

   showError=()=>{
      var errorMessage=document.getElementById("errorMessage")
      errorMessage.classList.remove("d-none")
      errorMessage.innerText="One or more fields have an error. Please check and try again."
   }

   showSuccess=()=>{
      var errorMessage=document.getElementById("errorMessage")
      errorMessage.innerText="Thank you for your message. It has been sent."
   }

  }
var backToTop = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block"; 
  } else {
    backToTop.style.display = "none"; 
  }
};


backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
});

