const animated = document.querySelectorAll('.animated');
const fixedNavbar = document.querySelector('#fixedNavbar');
const count = document.querySelector('#count');
const job = document.querySelector('#job');
const form = document.querySelector('#form');

// const colorBtn = document.querySelector('#colorBtn');
// const primaryBg = document.querySelector('#primaryBg');
// const secondaryBg = document.querySelector('#secondaryBg');
// const ternaryBg = document.querySelector('#ternaryBg');

// const bgArr = [primaryBg, secondaryBg, ternaryBg];

let countNum = localStorage.getItem('visitCount');

const devArr = ['Web Developer', 'Front-End Engineer', 'Fullstack Man'];

const changeJob = () => {
  setInterval(() => {
    let randIndex = Math.floor(Math.random() * devArr.length);
    job.innerText = devArr[randIndex];
  }, 1000);
};

const countVisit = () => {
  localStorage.setItem('visitCount', ++countNum);
};

const populateCount = () => {
  count.innerText = countNum;
};

// class Color {
//   constructor(red, green, blue, colorBtn) {
//     this.red = red;
//     this.green = green;
//     this.blue = blue;

//     this.colorBtn = colorBtn.addEventListener('click', this.applyColor);
//   }

//   randColor = () => Math.floor(Math.random() * 255) + 1;

//   applyColor = () => {
//     for (let item of bgArr) {
//       item.style.backgroundColor = `rgb(${this.randColor()}, ${this.randColor()}, ${this.randColor()})`;
//     }
//   };
// }

for (let item of animated) {
  item.addEventListener('mouseover', () => {
    item.classList.add('animate__animated', 'animate__bounce');
    setTimeout(() => {
      item.classList.remove('animate__animated', 'animate__bounce');
    }, 1000);
  });
}

window.addEventListener('unload', (e) => {
  countVisit();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

// window.addEventListener('scroll', function () {
//   if (window.scrollY > 680) {
//     fixedNavbar.classList.remove('position-fixed');
//   } else if (window.scrollY < 600) {
//     fixedNavbar.classList.add('position-fixed');
//   }
// });

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
});

sr.reveal('h2', {});
sr.reveal('.title__text', { delay: 300 });
sr.reveal('.card', { delay: 200 });
sr.reveal('.form-control', { delay: 200 });
sr.reveal('.btn', { delay: 200 });
sr.reveal('small.text-dark', { delay: 200 });

populateCount();
changeJob();

// const color = new Color(255, 255, 255, colorBtn);
