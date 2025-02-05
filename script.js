const contactForm = document.querySelector('form');
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const request = document.getElementById("request");

function formValidation() {
  const items = document.querySelectorAll(".item");

  for(const item of items){
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }    

    item.addEventListener("keyup", ()=>{
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    }) 
  }
}

function handelEmail(){
    const mailBody = `Sender Name: ${name.value}<br> Email: ${email.value}<br> request: ${request.value}<br>`;

    Email.send({
        SecureToken : "7addcd54-9c26-4a3f-9d93-fedbdcf1b447",
        /*
        Host : "smtp.elasticemail.com",
        Username : "cmastouri00@gmail.com",
        Password : "CFA1CCCEC8EAE74EA1BC55D4E7348BEE6F75",*/
        To : 'cmastouri00@gmail.com',
        From : "cmastouri00@gmail.com",
        Subject : subject.value,
        Body : mailBody
    }).then(
      message => {
        if (message == "OK") {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your request is sent",
            showConfirmButton: true,
            timer: 3000
          });
        }
      }
    );
}

contactForm.addEventListener("submit", (e)=> { 
  e.preventDefault(); 
  formValidation();
  if (!name.classList.contains("error") && !email.classList.contains("error") && !subject.classList.contains("error") &&!request.classList.contains("error")  ) {
    handelEmail();

    formValidation.reset();
    return false;
  }
  
});