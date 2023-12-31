// Your code here
function moveDodgerLeft() {
  const dodger = document.getElementById("dodger");
  const currentLeft = parseInt(dodger.style.left);
  const newLeft = currentLeft - 10; // Adjust the amount to move

  dodger.style.left = `${newLeft}px`;
}

function moveDodgerRight() {
  const dodger = document.getElementById("dodger");
  const currentLeft = parseInt(dodger.style.left);
  const newLeft = currentLeft + 10; // Adjust the amount to move

  dodger.style.left = `${newLeft}px`;
}
