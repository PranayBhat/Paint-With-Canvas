
function Start(){document.getElementById("start_button").style.display="none";
document.getElementById("clear_button").style.display="inline-block";
document.getElementById("firstCanvas").style.display="inline-block";
document.getElementById("secondCanvas").style.display="inline-block";
document.getElementById("thirdCanvas").style.display="inline-block";


}

    canvas=document.getElementById("firstCanvas");
     ctx=canvas.getContext("2d");
    canvas.addEventListener("click", my_notepadlick);
    function my_notepadlick(e){ color = document.getElementById("color1").value;
    touchpadlick_x = e.clientX - canvas.offsetLeft;
    touchpadlick_y = e.clientY - canvas.offsetTop;
    circle(touchpadlick_x,touchpadlick_y);}
    function circle(touchpadlick_x,touchpadlick_y)
    {ctx.beginPath(); 
    ctx.strokeStyle = color;
    ctx.arc(touchpadlick_x, touchpadlick_y,50,0 , 2*Math.PI);
     ctx.stroke();}

     color2="black";
     canvas2=document.getElementById("secondCanvas");
     ctx2=canvas2.getContext("2d");
    canvas2.addEventListener("click", my_notepadlick2);
    function my_notepadlick2(e){ color2 = document.getElementById("color2").value;
    console.log(color2);
    touchpadlick_x2 = e.clientX- canvas2.offsetLeft;
    touchpadlick_y2=e.clientY-140;
    squre(touchpadlick_x2,touchpadlick_y2);}
    function squre(touchpadlick_x2,touchpadlick_y2)
    {ctx2.beginPath(); 
    ctx2.strokeStyle = color2;
    ctx2.rect(touchpadlick_x2,touchpadlick_y2, 40, 40);
    ctx2.stroke();}

    color3="black";
    canvas3=document.getElementById("thirdCanvas");
    ctx3=canvas3.getContext("2d");
    canvas3.addEventListener("click", my_notepadlick3);
    function my_notepadlick3(e){ color3 = document.getElementById("color3").value;
    console.log(color3);
    touchpadlick_x3 = e.clientX - canvas3.offsetLeft;
    touchpadlick_y3 =e.clientY-106;
    rectrangle(touchpadlick_x3,touchpadlick_y3);}
    function rectrangle(touchpadlick_x3,touchpadlick_y3)
    {ctx3.beginPath(); 
    ctx3.strokeStyle = color3;
    ctx3.rect(touchpadlick_x3,touchpadlick_y3, 20, 40);
    ctx3.stroke();}
  
    function _clear(){ console.log("HI"); 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx2.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx3.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    canvas.addEventListener("touchstart", touchpadmove);
function touchpadmove(e){current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_mouse_y= e.touches[0].clientY- canvas.offsetTop; 
ctx.beginPath(); 
    ctx.strokeStyle = color;
     
   ctx.moveto(last_position_of_mouse_x,last_position_of_mouse_y);
   ctx.lineto(current_position_of_mouse_x,current_position_of_mouse_y);
   ctx.stroke();
   last_position_of_mouse_x=current_position_of_mouse_x;
   last_position_of_mouse_y=current_position_of_mouse_y;
}

