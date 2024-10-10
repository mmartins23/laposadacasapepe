O componente `Footer` é o rodapé do site, com links para redes sociais e uma mensagem de copyright. Ele é simples e funcional, centrando o conteúdo visualmente e adaptando-se bem a diferentes dispositivos. Abaixo está uma explicação detalhada do componente e seus estilos:

### Estrutura do Componente

- **Ícones de Redes Sociais**:
  - Inclui links para Facebook, Instagram e TripAdvisor, utilizando ícones de suas respectivas marcas.
  - Cada ícone é um link clicável, que abre a página correspondente em uma nova aba, e possui descrições acessíveis através do atributo `aria-label`.
  
- **Texto de Copyright**:
  - Um parágrafo exibe uma mensagem de direitos autorais, com o ano atual sendo dinâmico, obtido através do objeto `Date()` em JavaScript.

### Estilo do Componente

#### Container Principal `.footer`
- **Centralização de Texto**: O conteúdo do rodapé é centralizado com `text-align: center`, o que proporciona uma aparência limpa e organizada.
- **Espaçamento**: O rodapé tem um padding de 20px, criando uma área confortável ao redor do conteúdo.
- **Cor de Fundo**: O fundo tem um tom suave de cinza claro `#f8f8f8`, ajudando a diferenciá-lo visualmente do restante da página.

#### Ícones de Redes Sociais `.social-icons`
- **Layout Flexbox**: O container que envolve os ícones usa `display: flex` para alinhar os ícones horizontalmente.
- **Centralização**: O conteúdo é centralizado horizontalmente com `justify-content: center`, garantindo que os ícones estejam bem posicionados no centro da página.
- **Espaçamento**: Há um espaçamento adicional de 10px abaixo dos ícones, criando uma separação visual confortável antes do texto de copyright.

#### Links dos Ícones `.social-icons a`
- **Margem entre Ícones**: Cada ícone possui 10px de margem em ambos os lados, garantindo espaçamento uniforme entre eles.
- **Cor dos Ícones**: A cor padrão dos ícones é um cinza escuro `#676767`, que harmoniza com o fundo do rodapé.
- **Tamanho dos Ícones**: Cada ícone tem um tamanho definido de 24px, garantindo que eles sejam suficientemente grandes para fácil interação, mas não excessivamente grandes a ponto de sobrecarregar visualmente o rodapé.
- **Transição Suave**: Ao passar o mouse sobre os ícones, há uma transição suave de 0.3s na cor, criando um efeito agradável e dinâmico.

#### Cores dos Ícones ao Passar o Mouse (Hover)
- **Facebook**: O ícone fica azul `#1877f2` quando o mouse está sobre ele, refletindo a cor oficial do Facebook.
- **Instagram**: O ícone muda para rosa `#e1306c`, a cor oficial do Instagram.
- **TripAdvisor**: O ícone fica verde `#00B300`, a cor representativa do TripAdvisor.

### Layout Responsivo
Embora o estilo específico para dispositivos móveis não esteja explicitamente definido, o uso de flexbox no container dos ícones e a centralização do texto garantem que o componente funcione bem em diferentes tamanhos de tela, ajustando automaticamente o espaçamento e a disposição conforme necessário.

Este rodapé é simples e eficaz, destacando as redes sociais importantes para o restaurante e fornecendo um rodapé informativo sem sobrecarregar o layout.