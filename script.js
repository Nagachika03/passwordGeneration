const lengthTag = document.querySelector("#length")
const letterTag = document.querySelector("#letter__yes")
const numberTag = document.querySelector("#numbers")
const symbolTag = document.querySelector("#symbols")
const generateBtn = document.querySelector(".generator__generate")
const passwordTag = document.querySelector(".generate__password")
const errorTag = document.querySelector(".generate__error")
const copyTag = document.querySelector(".copy__password")

function randomizer(max) {
    let rand = Math.random() * max
    return Math.floor(rand)
}
let result = ""
generateBtn.addEventListener("click", () => {
if (lengthTag.value && +lengthTag.value > 7 && +lengthTag.value < 128) {
    const length = +lengthTag.value
    const isLetterChecked = letterTag.checked
    const isNumberChecked = numberTag.checked
    const isSymbolChecked = symbolTag.checked

    const symbolString = "!@#$%^&*()_-+=[]{};:'/.|<>"
    const numberString = "0123456789"
    const letterString = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    let symbolsForUse = ""

    symbolsForUse = (isNumberChecked ? numberString : "") +
    (isSymbolChecked ? symbolString : "") + 
    (isLetterChecked ? letterString : "")

    if (symbolsForUse) {
        for (let i = 0; i < length; i++) {
            const random = randomizer(symbolsForUse.length)
            result = `${result}${symbolsForUse[random]}`
        }
       passwordTag.innerText = result
       lengthTag.style.border = "1px solid #000"
       errorTag.innerText = ""
        copyTag.style.display = "inline"
    } else{
       errorTag.innerText = "You should select something"
    }
    
}else{
    lengthTag.style.border = "1px solid red"
    errorTag.innerText = "Please check length of input"
    console.log("please check length of input");
}
})
copyTag.addEventListener("click" , () => {
    navigator.clipboard.writeText(result)
})

