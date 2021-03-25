var count = 1;
function counter(element){ 
    element.innerText=count++
}

function postContent(){ 
    var time = new Date;
    var content = document.getElementById("textinput").value;
    var color = document.getElementsByName("color");
    for(var i =0; i < color.length ; i++){ 
        if(color[i].checked){
            var chosencolor = color[i].value
        }
    }
    var NumOfTimes= document.getElementById("quantity").value
    console.log(NumOfTimes)
    for(var i=0; i<NumOfTimes; i++){
        console.log("hi")
        document.getElementById("posts").innerHTML += "<p class='post-time'>"+time+"</p>  <p style='color:"+ chosencolor +";' class='post-content'>"+content+"</p>"
    }

   
}

function hidemain(){ 
    document.getElementById("main").style.display="none"
    document.getElementById("menu").style.display= "block"
}

function showmenu(){
    document.getElementById("menu").style.display="none"
    document.getElementById("main").style.display= "block"
}