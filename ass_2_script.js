//2.Create a page which has three buttons when clicked each should show a alert, prompt and confirm. When the confirm
// button is clicked on confirm modal, change the background color of the page.

function showConfirm() {
  var input = confirm("Do you want to procced to change background color..?");
  if (input) {
    document.body.style.backgroundColor = "lightblue";
    alert("Background color changed to light blue...!");
  } else {
    alert("Clicked Cancel...!");
  }
}
