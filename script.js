const drumPads = document.querySelectorAll(".drum-pad")
const display = document.getElementById("display")

function playAudio(pad, audio){

    audio.currentTime = 0;
    audio.play();
    display.textContent = pad.id.toUpperCase();
  }
drumPads.forEach((drumPad)=> {
  const audio = drumPad.querySelector(".clip");
  drumPad.addEventListener("click", ()=> playAudio(drumPad, audio));
  
})
window.addEventListener("keydown", (e)=> {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key)
  
  if(audio){
    const pad = audio.parentElement
playAudio(pad, audio)
pad.classList.add("active");
setTimeout(() => pad.classList.remove("active"), 100);
  } else return
  });
