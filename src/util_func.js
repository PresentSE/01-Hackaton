export function changePosition(mouseX, mouseY) {
  const body = document.body;
  const menu = document.querySelector(".menu");
  const bodyX = body.getBoundingClientRect().width;
  const bodyY = body.getBoundingClientRect().height;
  let correctX = mouseX;
  let correctY = mouseY;

  if (mouseX + menu.clientWidth > bodyX) {
    correctX = bodyX - menu.clientWidth;
  }
  if (mouseY + menu.clientHeight > bodyY) {
    correctY = bodyY - menu.clientHeight;
  }

  return { correctX, correctY };
}
