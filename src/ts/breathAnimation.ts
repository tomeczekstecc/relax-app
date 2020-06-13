export function breathAnimation(holdTime: number, breathTime: number): void {
  const container = document.getElementById('container')!;
  const text = document.getElementById('text')!;

  text.innerText = 'Breathe in!';
  container.className = 'container grow';
  setTimeout(() => {
    text.innerText = 'Hold!';
    setTimeout(() => {
      container.className = 'container shrink';
      text.innerText = 'Breath Out!';
    }, holdTime);
  }, breathTime);
}
