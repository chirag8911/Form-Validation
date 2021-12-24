

const name1 =document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const user =document.getElementById('user');
const password1=document.getElementById('pass1');
let validName=false;
let validPhone=false;
let validEmail=false;
let validUser=false;
let validPassword=false;

name1.addEventListener('blur', ()=>{
    let regex = /^[A-Za-z ]{2,15}$/;
    let str= name1.value;
    if(!str){
      document.getElementById('warning1').innerHTML= "";
    }
    else if(!regex.test(str)){
      document.getElementById('warning1').innerHTML= "Enter valid name";
      document.getElementById('warning1').style.color="red";
    }
    else{
        document.getElementById('warning1').innerHTML= "";
        validName=true;
    }
})  
email.addEventListener('blur', ()=>{
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str= email.value;
    if(!str){
      document.getElementById('warning4').innerHTML= "";
    }
    else if(!regex.test(str)){
      document.getElementById('warning4').innerHTML= "Enter valid email";
      document.getElementById('warning4').style.color="red";
    }
    else{
        document.getElementById('warning4').innerHTML= "";
        validEmail=true;

    }
})  
user.addEventListener('blur', ()=>{
    let regex = /^[A-Za-z0-9-_]{2,15}$/;
    let str= user.value;
    if(!str){
      document.getElementById('warning3').innerHTML= "";
    }
    else if(!regex.test(str)){
      document.getElementById('warning3').innerHTML= "Enter valid userid";
      document.getElementById('warning3').style.color="red";
    }
    else{
        document.getElementById('warning3').innerHTML= "";
        validUser=true;

    }
})  

phone.addEventListener('blur', ()=>{
    let regex = /^([0-9]){10}$/;
    let str= phone.value;
    if(!str){
      document.getElementById('warning2').innerHTML= "";
    }
    else if(!regex.test(str)){
      document.getElementById('warning2').innerHTML= "Enter valid phone number";
      document.getElementById('warning2').style.color="red";
    }
    else{
        document.getElementById('warning2').innerHTML= "";
        validPhone=true;
    }
})  

function Validate() {
    var password = password1.value;
    if(password.length<6){
        document.getElementById('warning5').innerHTML= "Password should be atleast 6 character long";
        document.getElementById('warning5').style.color="red";
        return false;
      }
      else{
          document.getElementById('warning5').innerHTML= "";
         
      }
    var confirmPassword = document.getElementById("pass2").value;
    if (password != confirmPassword) {
        document.getElementById('warning6').innerHTML="Passwords do not match.";
        return false;
    }
    else{
        document.getElementById('warning6').innerHTML="";
        validPassword=true;
    }
    return true;
}

/*  password1.addEventListener('blur', ()=>{
    let str= password1.value;
    if(str.length<6){
      document.getElementById('warning4').innerHTML= "Password should be atleast 6 character long";
      document.getElementById('warning4').style.color="red";
    }
    else{
        document.getElementById('warning4').innerHTML= "";
        validPassword=true;
    }
})  

password2.addEventListener('blur', ()=>{
    let str= password.value;
    if(str.length<6){
      document.getElementById('warning4').innerHTML= "Password should be atleast 6 character long";
      document.getElementById('warning4').style.color="red";
    }
    else{
        document.getElementById('warning4').innerHTML= "";
        validPassword=true;
    }
})  */ 
const save=document.getElementById('save');
save.addEventListener('click',validateForm());
function validateForm()
{
  if(validEmail && validPhone && validUser && validPassword && validName){
      alert('You Have Successfully Logged In!!');
     return true;
    }
    
  return false;
}
