
function randomColor()
{
    let color =["#FFFF00", "#FF0000", "#008000", "#000000", "#FF00FF","#0000FF", "#FFA500" ];
    var rand = color(Math.random() * color.length);
    document.getElementById("change").style.backgroundColor = rand;
}