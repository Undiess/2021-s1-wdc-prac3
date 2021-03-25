

function changetime(){ 
    var today = new Date
var time= today.getHours() + ":" +today.getMinutes() + ":" + today.getSeconds();
document.getElementById("current_time").innerText = time;

}

