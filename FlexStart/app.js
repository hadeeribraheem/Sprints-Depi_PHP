
/*==============Start Of Handling Navbar ==============*/ 

// make the clicked nav-item active
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all nav links
            for(let link of navLinks) {
                link.classList.remove('active')
            }
            // Add active class to the clicked nav link
            this.classList.add('active');
        });
    });
});

// Change Some style of navbar when scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');

    // Adjust padding,boxShadow and background color when scrolling
    if (window.scrollY > 50) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-white');
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
    } 
    // remove all properties when no scroll
    else {
        navbar.classList.remove('bg-white');
        navbar.classList.add('bg-transparent');
        navbar.style.padding = '';  // Reset padding
        navbar.style.boxShadow = '';  // Reset box shadow
    }
});

/*============== End Of Handling Navbar ==============*/ 



/*============== Start Of statistics section =====================*/
// make the numbers inside card animate to its value
let valueDisplays = document.querySelectorAll('.num');
let interval = 4000;

valueDisplays.forEach((valueDisplay)=>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(()=>{
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration);
})
/*============== end Of statistics section =====================*/


/*============== start of portfolio section =======================*/
                    /** Filter Gallery **/
let filter_btns = document.querySelectorAll('.filterBtns a');
let filtered_cards = document.querySelectorAll('.filterable_cards .col-lg-4');

for(let btn of filter_btns) {
    btn.addEventListener('click',function(e) {
        e.preventDefault();
        document.querySelector('.filterBtns .active').classList.remove('active');
        e.target.classList.add('active');
        
        //iterate over cards
        filtered_cards.forEach(card=>{          
            // hide all cards
            card.classList.add('hide');
            //check if the card matches the selected filter or 'all' is selected
            if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "All") {
                card.classList.remove('hide');
            }
        });
    });
}
/*============== end Of portfolio section =====================*/

/*============== Back to Top Btn ==============================*/
document.addEventListener('scroll', function () {
    const backToTopBtn = document.getElementById('back-to-top');
    if (window.scrollY > 100) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

document.getElementById('back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
/****************************** */
let themeBtns= document.querySelectorAll('#theme i');
for(let themeBtn of themeBtns){
    themeBtn.onclick = function(){
        let theme = event.target.getAttribute('name');
        document.querySelector('head link:last-of-type').setAttribute('href', theme + '.css');
        console.log(document.querySelector('head link:last-of-type'))
        // Toggle the visibility of the icons
        for (let btn of themeBtns) {
            if (btn === event.target) {
                btn.classList.add('hide');
                btn.classList.remove('active');
            } else {
                btn.classList.remove('hide');
                btn.classList.add('active')
            }
        }
        
    }
}