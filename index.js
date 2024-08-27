let list = document.querySelectorAll(".item") //AQUI ESTAMOS SELECIONANDO TODAS AS CLASSES DE ITEM//
let next = document.getElementById("next") //AQUI ESTAMOS SELECIONANDO O ID DO HTML//
let prev = document.getElementById("prev")  //AQUI ESTAMOS SELECIONANDO O ID DO HTML//


//count = 3
//item 0 - morango, item 1 - abacate, item 2 - laranja sendo assim a contagem começa do zero = 0,1,2
let count = list.length 
let active = 0

next.onclick = () => {   // evento de clique 
  let activeOld = document.querySelector(".active")
  activeOld.classList.remove("active")

  active = active >= count -1 ? 0 : active + 1
  list[active].classList.add("active")
  
}

prev.onclick = () => {    // evento de clique 
  let activeOld = document.querySelector(".active")
  activeOld.classList.remove("active")

  active = active <= 0 ? count -1 : active - 1
  list[active].classList.add("active")
}