let questionArray = [
    {
        que:"Which type of JavaScript language is ___",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Assembly-language",
        ans:"Object-Based"
    },

    {
        que:"Which one of the following also known as Conditional Expression:",
        a:"Alternative to if-else",
        b:"Switch statement",
        c:"Immediate if",
        
        ans:"Immediate if"
    },

    {
        que:"The function and  var are known as:",
        a:"Keywords",
        b:"Data types",
        c:"Declaration statements",
        ans:"Declaration statements"
    },

    {
        que:"Which one of the following is the correct way for calling the JavaScript code?",
        a:"Preprocessor",
        b:"Triggering Event",
        c:"Function/Method",
        ans:"Function/Method"
    },

]

let opetion=document.querySelectorAll("#optname")
console.log(opetion)

let question = document.getElementById("q_p")
console.log(question)
console.log(questionArray[1].que);
let count = 0;

``
let optname = document.getElementById("optname")
let optname2 = document.getElementById("optname2")
let optname3 = document.getElementById("optname3")
let submit = document.getElementById("submit")
let button = document.getElementById("submit")
let ope = document.querySelectorAll("#ope")
console.log(ope)
function opetionData(){
    question.innerText = questionArray[count].que
    optname.innerText = questionArray[count].a
    optname2.innerText = questionArray[count].b
    optname3.innerText = questionArray[count].c
}

opetionData()

submit.addEventListener("click",()=>{
    if(count<questionArray.length-1){
        opeValidation();
        opetionData()
    }
})

        function opeValidation(){
            let valid = false

            for(let i=0;i <ope.length;i++){
                if (!valid) {
                    if (ope[i].checked) {
                        valid = true;
                        count++;
                    }  

                }
                }

                if(!valid){
                    alert("Please select the option");
                    return;
                }
            }