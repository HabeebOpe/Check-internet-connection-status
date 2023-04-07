const pop = document.querySelector(".pop")
/*const popIcon = document.querySelector(".pop i")
const popTitle = document.querySelector(".pop h3")
const popDesc = document.querySelector(".pop p")
*/
let isOnline = true, interValid;
const checkConnection = async () =>{
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(response)
    isOnline = response.status >= 200 && response.status < 300
  } 
  catch (error) {
    console.log(error)
    isOnline = false
  }
  timer = 10;
  clearInterval(interValid)
  handlePopup(isOnline)
}

const handlePopup = (status)=>{
  if(status){
    return pop.classList.add("show")
    /*popIcon.className = "fa fa-home"
    popTitle.innerHTML = "Lost connection"
    popDesc.innerHTML = "Your network is unavailable, we will attempt to reconnect you in <b class='des'>10</b>s"*/
  } 
 
    /*pop.classList.remove("show");
    popIcon.className = "fa fa-wifi"
    popTitle.innerHTML = "Restored connection"
    popDesc.innerHTML = "Your network is unavailable, we will attempt to reconnect you in <b class='des'>10</b>s";*/
    /*interValid = setInterval(() => {
     
      /*if (timer === 0) {
        checkConnection()
      }
      const des = document.querySelector(".des")
      des.innerText = timer
    }, 1000)*/
  
}

setInterval(()=> isOnline && checkConnection(), 3000)
