const keys = document.querySelectorAll('.key');

window.addEventListener("keydown", (e) => {
  const keyBoard = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

if (keyBoard){
  keyBoard.classList.add("playing");
  audio.currentTime = 0;
  audio.play()
  }
})
 
keys.forEach( item => {
    item.addEventListener('transitionend', (e)=> {
      console.log(e);
      item.classList.remove("playing")
    });
});






