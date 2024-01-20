function validateForm(){
let  x= document.forms["admin"]["name"].value;
let y= document.forms["admin"]["address"].value;
if (x==""|| y==""){
    alert("Name must be filled out");
    return false;

}
/*
var patt=/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
var v= document.getElementById('fm').value;
if(v.match(patt))
{
    alert("valid Email");
    }
    else
    {
    alert("Invalid Email"); document.getElementById('fm').value="";
    document.getElementById('fm').focus();
    }
    }
*/

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(admin.email.value))
{
return (true);
} 
else{alert("You have entered an invalid email address!")
 return (false); 
 }



}


