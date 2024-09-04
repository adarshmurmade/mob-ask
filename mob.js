var button = document.querySelector("#button");
var yesbutton =document.querySelector("#yesbutton")

var buttonheight=350;
var buttonwidth=350;



button.addEventListener('mouseover',()=>{
  
    button.style.left=Math.floor(Math.random()*(buttonwidth)) + 'px';

    button.style.top=Math.floor(Math.random()*(buttonheight)) + 'px';
})


button.addEventListener('click',()=>{
  
    button.style.top= (Math.floor(Math.random()*(buttonheight)))+ 'px';

    button.style.left=(Math.floor(Math.random()*(buttonwidth)))+ 'px';
})


 yesbutton.addEventListener("click",nextpage)

function nextpage(){
    window.location.href="yes.html";
}

console.log(Math.floor(Math.random()*(buttonheight)));
console.log(Math.floor(Math.random()*(buttonwidth)));