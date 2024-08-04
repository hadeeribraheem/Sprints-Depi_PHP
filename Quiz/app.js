// const popup = document.querySelector('.video_popup'); 
// const player = document.querySelector('#videoPopup'); 
// const close = document.querySelector('.close'); 

// player.addEventListener('click', ()=>{ 
//    // popup.style.display = 'block'; 
//    popup.classList.add('active'); // Add 'active' class to move the popup down 

// }); 
// close.addEventListener('click', ()=>{ 
//     //popup.style.display = 'none'; 
//     popup.classList.remove('active'); // Remove 'active' class to move the popup back above the viewport 
// });

let inputs  = document.querySelectorAll('input'); 

for(let input of inputs){ 
    input.onkeyup = function(){ 
            if(event.target.value.length < 4){ 
                let name = event.target.getAttribute('name'); 
                event.target.nextElementSibling.textContent = name+ " must be more than 4"; 
            } 
            else{ 
                event.target.nextElementSibling.textContent = ""; 
            } 
    }}

let btn_form = document.querySelector(".newitem_btn");
let form = document.querySelector(".additem");

btn_form.onclick = function(){
    form.classList.add("active");   
    document.querySelector('.addsubmit_btn').onclick = function() {
        event.preventDefault()
        let name = document.getElementById('name').value;
        let company = document.getElementById('company').value;
        let contact = document.getElementById('contact').value;

        let table = document.querySelector('.table');
        table.innerHTML += `
                        <tr>
                        <td>${name}</td>
                        <td>${company}</td>
                        <td>${contact}</td>
                        </tr>  `

        
    };
}
