var count = 1;
function counter(element){ 
    element.innerText=count++
}

function postContent(){ 
    var time = new Date;
    var content = document.getElementById("textinput").value;

    document.getElementById("posts").innerHTML= "<p>"+time+"</p>  <p>"+content+"</p>"
}