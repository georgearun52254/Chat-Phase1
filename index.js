let messages=[]

const newMessage=document.getElementById("newMessage-area")
const displayMessage=document.getElementById("dispalyMessages-el")

function send(){
  messages.push(newMessage.value)
  displayMessage.innerHTML+="<li>"+messages[messages.length-1]+"</li>"
  newMessage.value=""
}  
