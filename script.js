function validation(){
    var inputEmail3=document.getElementById("inputEmail3").value;
    var inputPassword3=document.getElementById("inputPassword3").value;
    var inputtext=document.getElementById("inputtext").value;

    // alert(inputEmail3)

    if(inputEmail3.indexof("@") ==-1 || inputEmail3.length<6){
        return false;
    }
    // if(inputPassword3)
    alert("Your Query will be addressed soon!")
    return true
}