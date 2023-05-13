// Adiciona o tooltips do bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
// Animacao para virar o card
function virar_card(card) {
  console.log(card);
  card.classList.toggle("is-flipped");
  card.classList.toggle("not-flipped");
}

// Mostrar resposta ao clicar no botao
function alterar_resposta(btn, id) {
  resposta = document.getElementById(id);
  if(resposta.classList.contains('d-none')) {
    resposta.classList.remove('d-none');
    btn.innerText = 'X'
  } else {
    resposta.classList.add('d-none');
    btn.innerText = 'Ver resposta'
  }
}
// Fechar o modulo ao clicar no botao de sair
function sair(){
  if(confirm('Deseja mesmo sair?')) {
    window.close();
  }
}
 // Mostra a legenda na estrutura MPOX
function mostrar_legenda(id){
  legenda = document.getElementById(id);
  legenda.classList.toggle('d-none');
  legenda.classList.toggle('d-block');
}

const elements = document.querySelectorAll('[data-animation]');

function handleScroll() {
  const screenPosition = window.innerHeight / 1.5;

  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementPosition < screenPosition && elementBottom > 0) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', handleScroll);





