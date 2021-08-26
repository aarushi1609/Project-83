var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

var width_screen = screen.width;
var new_width = screen.width - 100;
var new_height = screen.height - 400;

if (width_screen <= 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    //Addictonal Activity start
    color = document.getElementById("textInput").value;
    width_of_line = document.getElementById("textInput2").value;
    //Addictonal Activity ends

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;


}



canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {

    current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}

canvas.addEventListener("mousedown", myMousedown);

function myMousedown(e) {
    colour = document.getElementById("textInput").value;
    width = document.getElementById("textInput2").value;   
    mouse_event = "mousedown";
}

canvas.addEventListener("mousemove", My_Mousemove);

function My_Mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if(mouse_event =="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_x, last_position_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }

    last_position_x = current_x;
    last_position_y = current_y;
    
}

canvas.addEventListener("mouseup", My_mouseup);
function My_mouseup(e)
{
    mouse_event = "mouseup";
}


function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
