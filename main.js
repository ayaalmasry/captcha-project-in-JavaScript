const captcha= document.querySelector('.captcha'),
      reloadbtn=document.querySelector('.reload-btn'),
      inputfield=document.querySelector('input'),
      checkbtn=document.querySelector('.check'),
      status=document.querySelector('.statu-txt');

//storing all captcha characters in array
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCaptcha(){
  for (let i = 0; i < 6; i++) { //getting 6 random characters from the array
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
      //console.log(randomCharacter);
  }
}
getCaptcha();
reloadbtn.addEventListener("click",()=>{
    captcha.innerHTML="";
    removeContent();
    getCaptcha();
});
checkbtn.addEventListener("click",e=>{
   e.preventDefault();
    status.style.display = "block";
  
    let inputval=inputfield.value.split('').join(' ');
    //console.log(inputval);
    if(inputval == captcha.innerText){
        //if captcha matched
       // console.log('captcha matched')
       status.style.color = "#4db2ec";
  status.innerText = "Nice! You don't appear to be a robot.";
        setTimeout(()=>{ //calling removeContent & getCaptcha after 4 seconds
      removeContent();
      getCaptcha();
    }, 2000);
   
    }else{
        //console.log('captcha not matched')
        status.style.color = "red";
        status.innerText = "Captcha not matched. Please try again!";

    }
});
function removeContent(){
 inputfield.value = "";
 captcha.innerText = "";
status.style.display = "none";
}
