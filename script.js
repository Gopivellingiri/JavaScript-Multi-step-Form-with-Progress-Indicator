/* const slidePage = document.querySelector(".slidepage");
const firstNxtBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".Submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
const notification = document.querySelector(".notification")

let max = 4;
let current = 1;
const toastDetails = {
    timer : 5000,
    success : {
        icon: 'fa-circle-check',
        text: "you're successfully signed up"
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) {
        clearTimeout(toast.timeoutId)
    }
    setTimeout(() => {
        toast.remove()
        location.reload()
    }, 500)
    
 }

const createToast = (id) => {
    const {icon, text} = toastDetails[id]
    const toast = document.createElement("li");
    toast.className = `toast ${id}`
    toast.innerHTML = `  <div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`
            notification.appendChild(toast);
           toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer)
}



firstNxtBtn.addEventListener("click", function () {
  slidePage.style.marginLeft = "-25%";
  progressText[current - 1].classList.add("active");
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function () {
  slidePage.style.marginLeft = "-50%";
  progressText[current - 1].classList.add("active");
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function () {
  slidePage.style.marginLeft = "-75%";
  progressText[current - 1].classList.add("active");
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function () {
  progressText[current - 1].classList.add("active");
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
  createToast(submitBtn.id)
  
});

prevBtnSec.addEventListener("click", function () {
  slidePage.style.marginLeft = "0%";
  progressText[current - 2].classList.remove("active");
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function () {
  slidePage.style.marginLeft = "-25%";
  progressText[current - 2].classList.remove("active");
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function () {
  slidePage.style.marginLeft = "-50%";
  progressText[current - 2].classList.remove("active");
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});
 

   */

const slidePage = document.querySelector(".slidepage");
const firstNxtBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".Submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
const notification = document.querySelector(".notification")

let current = 1; // Assuming `current` starts from 1

const toastDetails = {
    timer : 5000,
    success : {
        icon: 'fa-circle-check',
        text: "you're successfully signed up"
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) {
        clearTimeout(toast.timeoutId)
    }
    setTimeout(() => {
        toast.remove()
        location.reload()
    }, 500)
    
 }

const createToast = (id) => {
    const {icon, text} = toastDetails[id]
    const toast = document.createElement("li");
    toast.className = `toast ${id}`
    toast.innerHTML = `  <div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`
            notification.appendChild(toast);
           toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer)
}


function updateSlide(marginLeftValue) {
  slidePage.style.marginLeft = marginLeftValue;
  progressText[current - 1].classList.add("active");
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
}

function updateProgressAndCurrent() {
  progressText[current - 1].classList.add("active");
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
}

function revertSlide(previousMarginLeftValue) {
  slidePage.style.marginLeft = previousMarginLeftValue;
  progressText[current - 2].classList.remove("active");
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
}

firstNxtBtn.addEventListener("click", function () {
  updateSlide("-25%");
  current += 1;
});

nextBtnSec.addEventListener("click", function () {
  updateSlide("-50%");
  current += 1;
});

nextBtnThird.addEventListener("click", function () {
  updateSlide("-75%");
  current += 1;
});

submitBtn.addEventListener("click", function () {
  updateProgressAndCurrent();
  createToast(submitBtn.id); 
});

prevBtnSec.addEventListener("click", function () {
  revertSlide("0%");
});

prevBtnThird.addEventListener("click", function () {
  revertSlide("-25%");
});

prevBtnFourth.addEventListener("click", function () {
  revertSlide("-50%");
});



