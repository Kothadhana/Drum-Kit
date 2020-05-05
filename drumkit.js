
for(var i=0;i<6;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var d=this.innerHTML;
    animate(d);
    switch(d)
    {
      case "A" : var aud=new Audio("tom-1.mp3");
                 aud.play();
                 break;
      case "B" : var aud=new Audio("tom-2.mp3");
                 aud.play();
                 break;
      case "C" : var aud=new Audio("tom-3.mp3");
                aud.play();
                break;
      case "D" : var aud=new Audio("tom-4.mp3");
                aud.play();
                break;
      case "E" :
                 var aud=new Audio("snare.mp3");
                 aud.play();
                break;
      case "F" : var aud=new Audio("crash.mp3");
                  aud.play();
                   break;
     default: var aud=new Audio("tom-1.mp3");
              aud.play();
              break;
    }

  });
  document.querySelectorAll(".col")[i].addEventListener("keydown",function(event){
    var d=event.key;
   animate(d);
    switch(d)
    {
      case "A" : var aud=new Audio("tom-1.mp3");
                 aud.play();
                 break;
      case "B" : var aud=new Audio("tom-2.mp3");
                 aud.play();
                 break;
      case "C" : var aud=new Audio("tom-3.mp3");
                aud.play();
                break;
      case "D" : var aud=new Audio("tom-4.mp3");
                aud.play();
                break;
      case "E" :
                 var aud=new Audio("snare.mp3");
                 aud.play();
                break;
      case "F" : var aud=new Audio("crash.mp3");
                  aud.play();
                   break;
     default: var aud=new Audio("tom-1.mp3");
              aud.play();
              break;
    }
  });
}
function animate(currentKey)
{
  var curr=document.querySelector("."+currentKey);
  curr.classList.add("pressed");
  setTimeout(function(){
  curr.classList.remove("pressed")},1000);
}
