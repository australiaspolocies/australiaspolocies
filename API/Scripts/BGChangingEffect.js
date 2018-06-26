window.onload = StartUp();
function StartUp()
{
  this.R = 200;
  this.G = 200;
  this.B = 300;
  changeBG();
}
function changeBG()
{
 while(true)
 {
  document.body.style.background = "rgb(R, G, B, 0.3)";
 }
}
