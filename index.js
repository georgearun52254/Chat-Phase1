let messages=[]

function send(){
  
  let displayMessagesEl=document.getElementById("dispalyMessages-el")
  let newMessage=document.getElementById("newMessage-area").value
  
  messages.push(newMessage)

  document.getElementById("newMessage-area").value=""
  
  let text=messages.filter(lastElementMessages);
  
  function lastElementMessages(value, index, array) {
  let k=messages.length
  return index > k-2;
}
  
   let li = document.createElement("li");
   li.innerText = text;
   displayMessagesEl.appendChild(li);
}
