function play(){
    
    for(i = 99; i >= 0; i--){
        
        if (i > 1){
        document.getElementById("placeholder").innerHTML += i + " bottles of beer on the wall, " + i + " bottles of beer.<br/> Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.<br/>"
        }else if(i == 1){
        document.getElementById("placeholder").innerHTML += i + " bottle of beer on the wall, " + i + " bottle of beer.<br/> Take it down and pass it around, " + (i - 1) + " bottles of beer on the wall.<br/>"
        }else{
        document.getElementById("placeholder").innerHTML += "No more bottles of beer on the wall, no more bottles of beer. <br/> Go to the store and buy some more, 99 bottles of beer on the wall<br/>"
    
    }
    
 }
}

function hide(){
    document.getElementById("modal").style.visibility = "hidden";
    
}


