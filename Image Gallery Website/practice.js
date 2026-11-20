const { createElement } = require("react");

function addIamge(){
    const input=$("input");
    const gallery=$(".container");

    if(input.files[0]){
        const image=document.createElement("img");
        image.src=URL.createObjectURL(input.files[0]);
        image.style.width="150px";
        gallery.appendChild(image);
    }
}