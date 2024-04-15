

function data(){
    var a = document.getElementById("userid").value;
    var b = document.getElementById("contact").value;
    var c = document.getElementById("password").value;
    var d = document.getElementById("confirm-password").value;

    if( a== "" || b== "" ||c== "" ||d== "" ){
        alert("All fields are mendatory");
        return false;
    }
    else if(b.length<10 || b.length>10){
        alert("Number should be of 10 digit! plase enter valid number");
        return false;
    }
    else if(isNaN(b)){
        alert("Only numbers are allowed ! plase enter valid number");
        return false;
    }
    else if( c != d){
        alert("Please enter same password");
        return false;
    }
    else{
         true;
    }
    
}

