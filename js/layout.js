const wrapper = document.querySelector('.wrapper');
const leftBtn = document.querySelector('.left');
const centerBtn = document.querySelector('.center');
const fullBtn = document.querySelector('.full');

let leftAlign = () => {
  if (wrapper.classList.contains('wrapper') || wrapper.classList.contains('wrapper-full')) {
    wrapper.classList.remove('wrapper');
    wrapper.classList.remove('wrapper-full');
    wrapper.classList.add('wrapper-left');
  }
}

let centerAlign = () => {
  if (wrapper.classList.contains('wrapper-left') || wrapper.classList.contains('wrapper-full')) {
    wrapper.classList.remove('wrapper-left');
    wrapper.classList.remove('wrapper-full');
    wrapper.classList.add('wrapper');
  }
}

let fullWidth = () => {
  if (wrapper.classList.contains('wrapper-left') || wrapper.classList.contains('wrapper')) {
    wrapper.classList.remove('wrapper-left');
    wrapper.classList.remove('wrapper');
    wrapper.classList.add('wrapper-full');
  }
}

//Event Listeners
leftBtn.addEventListener('click', leftAlign);
centerBtn.addEventListener('click', centerAlign);
fullBtn.addEventListener('click', fullWidth);