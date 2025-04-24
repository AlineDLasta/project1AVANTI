const inputValue = document.querySelector('#input-1 input');
const lupa = document.querySelector('#input-1 img'); 
const message = document.querySelector('#message');

lupa.addEventListener('click', validandoInput);

function validandoInput() {
  const inputValid = inputValue.value.trim();

  if (inputValid === '') {
    message.textContent = 'Por favor, digite algo para buscar.';
    message.style.color = 'red';
  } else {
    message.textContent = `Você buscou por: ' ${inputValid} '`;
    message.style.color = 'black';
  }
}

const cardHTML = `
  <div class="product-card">
    <h4>NOVO</h4>
    <img class="img-model" src="assets/model.png" alt="model">
    <h5>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h5>
    <h6>R$ 100,00</h6> 
    <strong>R$79,90</strong>
    <span><a href="https://www.nike.com.br/air-max-1-86-027221.html?cor=51" target="_blank">10% OFF</a></span>
    <p>Ou em até <strong>10x de R$ 7,90</strong></p>
    <button>Comprar</button>
  </div>
`;

// Containers dos carrosséis
const container = document.getElementById('carrossel');
const container2 = document.getElementById('carrossel2');


for (let i = 0; i < 10; i++) {
  container.innerHTML += cardHTML;
  container2.innerHTML += cardHTML;
}

function setupCarousel(wrapperIndex, carrosselId) {
  const wrapper = document.querySelectorAll('.carousel-wrapper')[wrapperIndex];
  const carrossel = document.getElementById(carrosselId);
  const setaEsquerda = wrapper.querySelector('.arrow.left');
  const setaDireita = wrapper.querySelector('.arrow.right');

  setaEsquerda.addEventListener('click', () => {
    carrossel.scrollLeft -= 300;
  });

  setaDireita.addEventListener('click', () => {
    carrossel.scrollLeft += 300;
  });
}

setupCarousel(0, 'carrossel');
setupCarousel(1, 'carrossel2');
