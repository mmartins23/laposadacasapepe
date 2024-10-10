O componente `Navbar` é responsável pela navegação no site da La Posada. Ele é interativo e muda de comportamento com base na rolagem da página e no tamanho da tela, fornecendo uma experiência de usuário responsiva e acessível tanto para desktops quanto para dispositivos móveis.

### Estrutura e Comportamento

1. **Estados do Componente:**
   - `sticky`: Um estado booleano que determina se a barra de navegação deve mudar de estilo ao rolar a página. Quando o usuário faz scroll e passa de 50px, a navbar adquire uma cor de fundo escura.
   - `mobileMenu`: Um estado booleano que alterna a visibilidade do menu no modo mobile.

2. **Eventos:**
   - `useEffect`: Um hook que adiciona um event listener para monitorar o scroll da página e, com base nisso, alterna o estado `sticky` entre verdadeiro e falso.
   - `toggleMenu`: Função que alterna o estado `mobileMenu`, usada para exibir ou esconder o menu no modo mobile.

3. **Links:**
   - Utiliza o componente `Link` do pacote `react-scroll` para navegação suave entre as seções da página. Cada link tem um identificador que corresponde a uma seção específica da página, como "El Restaurante", "Gastronomía", "Menú", etc.

4. **Ícones:**
   - Ícones são importados do pacote `react-icons`, como o ícone de comida (`MdOutlineFoodBank`) e o ícone de WhatsApp (`MdOutlineWhatsapp`).

5. **Botão WhatsApp:**
   - Inclui um botão com link externo para o WhatsApp, permitindo que os usuários entrem em contato diretamente com o restaurante. Esse botão muda de tamanho em telas menores para melhor adaptação.

### Estilos (CSS)

1. **Nav (Barra de Navegação):**
   - `width: 100%`: O navbar ocupa toda a largura da tela.
   - `position: fixed`: A barra de navegação fica fixa no topo da página, sempre visível durante a rolagem.
   - `display: flex`: Utiliza Flexbox para alinhar os elementos horizontalmente, com o logo à esquerda e o menu à direita.
   - `z-index: 10`: Garante que o navbar fique acima de outros elementos da página.

2. **Itens do Menu:**
   - `display: inline-block`: Os itens do menu são exibidos em linha.
   - Margens e fontes são ajustadas para fornecer espaçamento apropriado e legibilidade.

3. **Botão:**
   - O botão do WhatsApp tem um tamanho de fonte e padding que variam conforme o tamanho da tela. Em telas menores, o botão e o ícone são reduzidos para economizar espaço.

4. **Dark Navigation (Scroll):**
   - `dark-nav`: Quando o usuário faz scroll, o navbar recebe uma classe `dark-nav`, que altera o fundo para preto e aplica uma transição suave.

5. **Mobile Menu:**
   - Para telas menores (até 840px), o ícone de menu (hambúrguer) é exibido e o menu de navegação muda para um formato vertical que desliza do lado direito da tela.
   - O estado `mobileMenu` é utilizado para esconder e mostrar o menu com uma animação de transição suave.
   
6. **Responsividade:**
   - **Telas médias (até 1000px):** Ajusta o tamanho da logo e diminui o espaçamento entre os itens do menu.
   - **Telas pequenas (até 840px):** O menu é convertido para um layout de coluna, com espaçamento aumentado entre os itens e o ícone de menu sendo exibido. O botão do WhatsApp é reduzido para economizar espaço.

### Resumo
Este componente `Navbar` é responsivo, adaptando-se a diferentes tamanhos de tela. Ele usa um layout flexível para garantir que a navegação seja clara e acessível em dispositivos móveis e desktops, com transições suaves e design dinâmico que melhora a experiência do usuário ao longo da navegação.