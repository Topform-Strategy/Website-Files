var fullname;
var emailid;
var submitbutton;
var nameok;
var emailok;
var submitReady;

function sendContact()
{
    
    if (submitReady == true)
    {
        fullname = document.getElementById("fullname").value;    
        emailid = document.getElementById("emailid").value;
        document.getElementById("submitme").href = "thankyou.html"
        return true;    
    }
    else
    {
        document.getElementById("submitme").href = "javascript:void(0)"
        return false;
    }

}


function resetform()
{
    document.getElementById("fullname").value = "";
    document.getElementById("emailid") = "";

    document.getElementById("fullname").style.backgroundImage = "url('')";
    document.getElementById("fullname").style.backgroundRepeat = "no-repeat"; 
    document.getElementById("fullname").style.backgroundPosition = "right";        

    document.getElementById("fullname").focus({ focusVisible: true });
    submitbutton = document.getElementById("submitme");
    submitbutton.disabled = true;
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

   function checkFullname()
   {
    submitbutton = document.getElementById("submitme");
        
    fullname = document.getElementById("fullname").value;    
       if (fullname != "")
       {
        nameok = true;
        document.getElementById("fullname").style.backgroundImage = "url('./images/yes.png')";
        document.getElementById("fullname").style.backgroundRepeat = "no-repeat"; 
        document.getElementById("fullname").style.backgroundPosition = "right";        
       }
       else
       {
        nameok=false;
        document.getElementById("fullname").style.backgroundImage = "url('./images/no.png')";
        document.getElementById("fullname").style.backgroundRepeat = "no-repeat"; 
        document.getElementById("fullname").style.backgroundPosition = "right";        
    }
    if (nameok == true && emailok == true)
    {
        submitReady=true;
        submitbutton.disabled = false;        
    }
    else
    {
        submitReady=false;
        submitbutton.disabled = true;                
    }
}
 
function checkemail()
    {
        emailid = document.getElementById("emailid").value;      
        submitbutton = document.getElementById("submitme");

        if (isEmail(emailid)) 
       {
        emailok=true;
        document.getElementById("emailid").style.backgroundImage = "url('./images/yes.png')";
        document.getElementById("emailid").style.backgroundRepeat = "no-repeat"; 
        document.getElementById("emailid").style.backgroundPosition = "right";        
       }
       else 
       {
        emailok=false;
        document.getElementById("emailid").style.backgroundImage = "url('./images/no.png')";
        document.getElementById("emailid").style.backgroundRepeat = "no-repeat"; 
        document.getElementById("emailid").style.backgroundPosition = "right";        
       }
       if (nameok == true && emailok == true)
       {
           submitReady=true;
           submitbutton.disabled = false;        
       }
       else
       {
           submitReady=false;
           submitbutton.disabled = true;                
       }      
    }
   