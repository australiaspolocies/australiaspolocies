window.onload = StartUp();
function StartUp()
{
  this.BG-color = [200, 200, 300];
  changeBG();
}
function changeBG()
{
 while(true)
 {
  document.body.style.background-color = rgba(BG-color[0], BG-color[1], BG-color[2], 0.3);
 }
}
