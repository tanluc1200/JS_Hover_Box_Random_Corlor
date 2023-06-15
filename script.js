const content = document.querySelector('.content');

function randomColor() {
  let charColor = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    let randomColor = charColor[Math.floor(Math.random() * charColor.length)];
    color += randomColor;
  }
  return color;
}
for (let i = 0; i < 200; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  content.appendChild(box);
  box.addEventListener('mouseover', function (e) {
    let colorRandom = randomColor();
    console.log(colorRandom);
    const i = e.currentTarget;
    i.style.background = `${colorRandom}`;
    i.style.boxShadow = `0 0 20px ${colorRandom}, 0 0 100px ${colorRandom}`;
  });
  box.addEventListener('mouseleave', function (e) {
    const i = e.currentTarget;
    i.style.background = '#1d1d1d';
    i.style.boxShadow = '0 0 2px #000';
  });
}
