let data=JSON.parse(localStorage.getItem("signupdataTwink"))||[];
console.log(data)
class User{
  constructor(){

  }
  login(loginusername,loginpassword){
    data.forEach(function(el){
      if(el.username==loginusername&&el.password==loginpassword){
        alert("sucessfull login");
        console.log(el)
        localStorage.setItem("logindata",JSON.stringify(el))
      }else{
        alert("Details are not correct!")
      }
    })
  }
}


let login=()=>{
  let loginusername=document.getElementById("loginUsername").value;
  let loginpassword=document.getElementById("loginPassword").value;
  let user=new User();
  user.login(loginusername,loginpassword) 
}