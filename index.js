let formContainer = document.createElement("div")
formContainer.style.cssText=`
display: flex;
justify-content:center;
align-items:center;
width:100vw;
height:100vh;
`

let form = document.createElement("form")
form.style.cssText= `
width: 60%;
height:60%;
margin: auto;
box-shadow: 0px 5px 20px 5px grey;
display: flex;

flex-direction: column;
text-align:center;
border: 2px solid grey;
`


let h2 = document.createElement("h2")
h2.innerText = "Login Form"


let EmailBox = document.createElement("input")
EmailBox.setAttribute("type","text")
EmailBox.setAttribute("placeholder" ,"Enter Your email")
EmailBox.style.cssText=`
width: 50%;
padding: 2%;
margin: 2% auto;
border-radius:  4px;
border:none;
border-bottom: 2px solid grey;
`


let passwordBox = document.createElement("input")
passwordBox.setAttribute("type","password")
passwordBox.setAttribute("placeholder" ,"Enter Your Password")
passwordBox.style.cssText=`
width: 50%;
padding: 2%;
margin: 2% auto;
border-radius:  4px;
border:none;
border-bottom: 2px solid grey;
`
let checkBoxDiv = document.createElement("div")
let checkbox = document.createElement("input")
checkbox.setAttribute("type","checkbox")
let checkBoxText = "remember me"
checkBoxDiv.append(checkbox,checkBoxText)
checkBoxDiv.style.cssText=`
display:flex;
margin: 1% auto 1% 25%;
`


let submitButton = document.createElement("button")
submitButton.innerText= "Login"

submitButton.style.cssText=`
width: 70%;
height: 10%;
font-size: 1rem;
border-radius:2px;
margin: 2%  auto;
border-top: none;
border-bottom: none;
`





form.append(h2,EmailBox,passwordBox,checkBoxDiv,submitButton)
formContainer.append(form)

document.body.append(formContainer)
console.log(form)

