let form=document.querySelector('#form');
let username=document.querySelector('#username')
let email=document.querySelector('#email')
let password=document.querySelector('#password')
let cpassword=document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>
{
    if(!validateinput())
        {
            e.preventDefault();
        }
})

function validateinput()
{
let usernameVal=username.value.trim();
let emailVal=email.value.trim();
let passwordVal=password.value.trim();
let cpasswordVal=cpassword.value.trim();
let success=true;

//validate username
if(usernameVal==='')
    {
        success=false;
        setError(username,'username is required')   
    }
    else
    {
        setSuccess(username);

    }
//validate email
    if(emailVal==='')
    {
        success=false;
    setError(email,'Email is required')   
    }
    else if(!validateEmail(emailVal))
    {
        success=false;
        setError(email,'please enter valid email')   

    }
    else
    {
    setSuccess(email);

}
//validate password
if(passwordVal==='')
    {
        success=false;
        setError(password,'password is required')   
    }
    else if(passwordVal.length<8)
    {
        success=false;
        setError(password,'password must be greater than 8 characters')   

    }
    else
    {
        setSuccess(password);
    }

//validate  confirm password
if(cpasswordVal==='')
    {
        success=false;
        setError(cpassword,'confirm password is required')   
    }
    else if(passwordVal!==cpasswordVal)
    {
        success=false;
        setError(cpassword,"password doesn't match")   

    }
    else
    {
        setSuccess(cpassword);
    }
    return success;

}

//to set error
function setError(element,message)
{
    let inputgroup=element.parentElement;
    let errorElement=inputgroup.querySelector('.error')

    errorElement.innerText=message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');

}


function setSuccess(element,message)
{
    let inputgroup=element.parentElement;
    let errorElement=inputgroup.querySelector('.error')

    errorElement.innerText='';
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');

}

// to validate email
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateEmail = function (email) {
    let sEmail = String(email);
    const isValid = emailPattern.test(sEmail.toLowerCase());
    return isValid;
};