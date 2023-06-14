import toast from 'react-hot-toast'

export async function UsernameValidate(values){
    const error=UsernameVerify({},values);
    return error;
}

export async function PasswordValidate(values){
    const error=PasswordVerify({},values);
    return error;
}

export async function ReserPasswordValidate(values){
    
    const errors = PasswordVerify({},values);
    
        if(values.password !== values.confirm_pwd){
            errors.exist=toast.error("Password not match...!",{duration:1000});
        }
    

    return errors;
}

export async function ProfileValidate(values){
        const error=profileVerify({},values);
        return error;
}

export async function RegisterValidate(values){
    const error = RegisterVerify({},values);
    return error;
}

//validTE password
function PasswordVerify(error={},values){
    const special =/[`!@#$%^&*()_+\-=[\]{};':"\\/,.<>/?~]/;
    if(!values.password){
        error.password=toast.error("Password Require!!!",{duration:1000});
    }
    else if(values.password.includes(" ")){
        error.password=toast.error("Space not allowed!!!",{duration:1000});
    }
    else if(values.password.length<8){
        error.password=toast.error("Password must at least of 8 characters!!!",{duration:1000});
    }
    else if(!special.test(values.password)){
        error.password=toast.error("Special Character Required...!!",{duration:1000});
    }
    return error;
}



//validate Username
function UsernameVerify(error,values){
    if(!values.username){
        
        error.username=toast.error('Enter Username !!',{duration:1000});
    }
    else if(values.username.includes(" ")){
        error.username=toast.error('Enter valid Username !!',{duration:1000});
    }
    else if(values.username.length<4){
        error.username=toast.error('Username must be longer then 4 character',{duration:1000});
    }
    return error;
}

function profileVerify(error={},values){
    if(!values.email){
        error.email=toast.error("Email Required!!");
    }
    else if(values.email.includes(" ")){
        error.email=toast.error("Space not allowed in email!!");
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email=toast.error("Invalid Email Address!!!");
    }
    return error;
}

function RegisterVerify(error={},values){
    const special =/[`!@#$%^&*()_+\-=[\]{};':"\\/,.<>/?~]/;
    if(!values.email){
        error.email=toast.error("Email Required!!");
    }
    else if(values.email.includes(" ")){
        error.email=toast.error("Space not allowed in email!!");
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email=toast.error("Invalid Email Address!!!");
    }
    else if(!values.username){
        
        error.username=toast.error('Enter Username !!',{duration:1000});
    }
    else if(values.username.includes(" ")){
        error.username=toast.error('Enter valid Username !!',{duration:1000});
    }
    else if(values.username.length<4){
        error.username=toast.error('Username must be longer then 4 character',{duration:1000});
    }

    
    else if(!values.password){
        error.password=toast.error("Password Require!!!",{duration:1000});
    }
    else if(values.password.includes(" ")){
        error.password=toast.error("Space not allowed in Password!!!",{duration:1000});
    }
    else if(values.password.length<8){
        error.password=toast.error("Password must at least of 8 characters!!!",{duration:1000});
    }
    else if(!special.test(values.password)){
        error.password=toast.error("Special Character Required in Password...!!",{duration:1000});
    }
    return error;
}
