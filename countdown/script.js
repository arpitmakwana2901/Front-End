let count = 10;
let size=30;
let text = document.getElementById("text")
// let text2=document.getElementsByClassName("p1");
// console.log(text2);

text.style.fontSize=`${size}px`;
const id = setInterval(() => {
text.innerText = count;
text.style.fontSize=`${size}px`;


  
    if(count == 0){
        clearInterval(id);
        text.style.backgroundColor = "black";
        text.innerText="Welcom to Countdown html"
        // text.style.fontSize="40px"
        // text.style.transition="0.5s";
        // text.style.width = "100%"
        // // text.style.height = "200px"
    }
    count--;
    if(count>=5)
        {
            size+=10
        }else
        {
            size-=10;
        }
}, 1000);  


console.log(text);


