 const hamburguer = document.querySelector(".hamburguer")
 const ul = document.querySelector(".ul")

 const navMenu = document.querySelector(".nav-menu");

 function chamarMenu(){
  const hamburguer = document.querySelector(".hamburguer");
  const navMenu = document.querySelector(".nav-menu");

  hamburguer.addEventListener("click", (e) => {
      hamburguer.classList.toggle("active")
      navMenu.classList.toggle("active")

    
      if(hamburguer.classList.contains("active")){
        hamburguer.setAttribute("aria-expanded", "true") 
      } else{
        hamburguer.setAttribute("aria-expanded", "false") 
      }
   
                
 
  }) 


 }  

 chamarMenu()

 window.addEventListener("scroll", () => {
      
    const altura = 15;

    if(pageYOffset > altura){
      navMenu.classList.remove("active")
      hamburguer.classList.remove("active")
    }
      
      
 })


 /* Em jogo */

const nomeProfile = document.querySelectorAll(".profile-name")
const jogando = document.querySelectorAll(".profile-ingame")
 const jogandoOne = document.querySelector(".jogando-one")



 function emJogo(){


  const profileOffline = document.querySelector(".profile-name-offline")
  const profileStatus = document.querySelector(".profile-offline")
 const arrayjogos = ["Grand theft auto V", "Euro Truck Simulator", "CS:GO", "Resident Evil", "Fortnite", "Super mario", "Top Gear", "Donkey Kong Country"]


  jogando.forEach((el) => { 

    const randomLetras = Math.floor(Math.random() * arrayjogos.length);
    const valorAleatorio = arrayjogos[randomLetras];

    el.innerHTML = `${valorAleatorio}`

    profileOffline.classList.add("usuario-offline")
    profileStatus.classList.add("usuario-status")
    profileStatus.innerHTML =  "Offline"


   
    
  })       

  }
 

  setInterval(() => {
            emJogo();
   }, 5000)




