const answer = document.getElementById("answer")
//const input = document.getElementById("input")
//const btn = document.getElementById("btn")


function palindrome() {

  let str = document.getElementById('str').value;

  str = str.replace(/\W|_/g, "").toLowerCase()
  let reverseStr = str.split("").reverse().join("")

  if(reverseStr === str) {
    answer.textContent = "Sim"
    answer.style.color = "green";
  }
  else if(str === ""){
    answer.textContent = "Please enter a word"
  }

  else{
    answer.textContent = "Não"
    answer.style.color = "red";
    
  }

 

}

