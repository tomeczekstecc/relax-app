const container = document.getElementById('container')!;
const text = document.getElementById('text')!;

const totalTime: number = 7500;
const breathTime: number = (totalTime / 5) * 2;
const holdTime: number = totalTime / 5;

function breathAnimation() {
  text.innerText = 'Breathe in!';
container.className= 'container grow'
  setTimeout(() => {
    text.innerText = 'Hold!';
    setTimeout(() => {
      container.className = 'container shrink'
      text.innerText = 'Breath Out!';
    }, holdTime);
  }, breathTime);
}


setInterval(breathAnimation,totalTime)


breathAnimation();
