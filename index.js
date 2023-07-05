const email = document.getElementById('email')
const confirmemail = document.getElementById('confirmemail')
const btn = document.getElementById('btn')

function checkEmails(e) {
   if(email.value !== confirmemail.value){
    e.preventDefault();
    alert('Passwords do not match')

   }
}

 btn.addEventListener('click', checkEmails)   
