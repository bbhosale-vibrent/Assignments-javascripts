function allowDrop(event)
{
    event.preventDefault();//this method used for preventing default action that belongs to the event i.e it will not occur.
    document.getElementById('drag-and-drop-area').style.border='2px dashed #ccc';
}

function drag(event)
{
    event.dataTransfer.setData("text",event.target.textContent);
    document.getElementById('drag-and-drop-area').style.border='2px dashed #ccc';
}

function drop(event)
{
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    alert("Dropped : " +data);
}