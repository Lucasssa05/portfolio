document.addEventListener('DOMContentLoaded', function() {
  // Efeito suave ao rolar para as seções
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          window.scrollTo({
              top: targetElement.offsetTop - 20,
              behavior: 'smooth'
          });
      });
  });

  // Animação para os elementos quando aparecem na tela
  const animateOnScroll = () => {
      const elements = document.querySelectorAll('.project, .skill');
      
      elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.2;
          
          if (elementPosition < screenPosition) {
              element.classList.add('visible');
          }
      });
  };

  // Adiciona o event listener para o scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Executa uma vez ao carregar a página para verificar elementos já visíveis
  animateOnScroll();

  // Copiar e-mail ao clicar no card
  const emailCard = document.getElementById('email-card');
  if (emailCard) {
      emailCard.addEventListener('click', function() {
          const email = this.textContent.trim();
          navigator.clipboard.writeText(email).then(() => {
              const originalText = this.textContent;
              this.textContent = 'E-mail copiado!';
              setTimeout(() => {
                  this.textContent = originalText;
              }, 2000);
          });
      });
  }
});
