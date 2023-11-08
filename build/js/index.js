box = document.getElementById("box");
tagsBox = document.querySelector(".tags");
let tags ;

box.addEventListener("keyup", (e)=>{
    if(e.key == "Enter"){
        tagsBox.innerText = "";
        createTagsBox();
        document.body.focus();
    }else{
        tagsBox.innerText = "";
        createTags(e.target.value);
    }
});

function createTags(input){
    tags = input.split(',').map(tag=> tag.trim()).filter(tag => tag.trim() !="");
    console.log(tags);
}

function createTagsBox(){
    tags.forEach(texto =>{
        console.log("asdasd");
        t = document.createElement("span");
        t.classList.add("tag");
        t.innerText=texto;
        tagsBox.appendChild(t);
    });
    timer();

}

function timer(){
    let contador = 0;
    time = setInterval(()=>{
        contador++;
        randomTag();
        if(contador==15){
           clearInterval(time);
        }
    },200);
}

function randomTag(){
    tagSpan = tagsBox.querySelectorAll("span")
    tagSpan.forEach(texto =>{
        texto.classList.remove("active");
    });


    tagSpan[Math.floor(Math.random()*tagSpan.length)].classList.add("active");
}