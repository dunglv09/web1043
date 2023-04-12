let items = document.getElementsByClassName("item")
for (let i =0; i < items.length; i++) {
    let item = items[i];
    //set draggabble = true
    item.setAttribute("draggable", true);
    item.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("itemId", item.id);
    });
}
//drop
let bin = document.getElementById("bin");
// dragover event
bin.addEventListener("dragover", (e) => {
    if (e.preventDefault) e.preventDefault();//cho phep drop
});

//drop event
bin.addEventListener("drop", (event) => {
    let itemId = event.dataTransfer.getData("itemId");
    event.target.appendChild(document.getElementById(itemId));
});