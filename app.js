const popup = document.querySelector(".container")
wifiIcon = document.querySelector(".wifi-ic i"),
popTitle = document.querySelector(".container h3"),
popDesc = document.querySelector(".container p");
const reconnect = document.querySelector(".reconnect")

let isOnline = true, intervalid, timer = 10;
const checkConnection = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //console.log(response)
    isOnline = response.status >= 200 && response.status < 300
  } 
  catch (error) {
    isOnline = false
  }
  timer = 10;
  clearInterval(intervalid)
  handlePopup(isOnline)
}
const handlePopup =(status) => {
  if(status){
    wifiIcon.className = "fa fa-wifi"
    popTitle.innerText = "Restored connection"
    popDesc.innerHTML = "Your device is now successfully connected to the internet";
    popup.classList.add("color")
    return setTimeout(()=>{
      popup.classList.remove("show")
    }, 3000)
  }
  wifiIcon.className = "fa fa-home"
  popTitle.innerText = "Lost connection"
  popDesc.innerHTML = "Your network is unavailable, we will attempt to reconnect you in <b>10</b> seconds"
  popup.className = "container popup show"
  intervalid = setInterval(()=>{
    timer--;
    if(timer == 0) checkConnection();
    popup.querySelector("p b").innerText = timer
  }, 1000)
}

setInterval(()=> isOnline && checkConnection(), 3000)
reconnect.addEventListener("click", checkConnection)