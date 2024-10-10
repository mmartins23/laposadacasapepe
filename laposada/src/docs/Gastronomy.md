O componente `Gastronomy` exibe uma galeria de fotos de pratos do restaurante La Posada Casa Pepe, organizada por categorias (Aperitivos, Platos Principales, Postres). Ele permite a filtragem das imagens por categoria usando botões interativos e é responsivo para diferentes tamanhos de tela. Abaixo estão os detalhes do componente e seu estilo:

### Estrutura do Componente

- **Imagens e Categorias**: 
  - Um array `images` contém objetos com informações sobre cada prato: a imagem, o nome do prato (`text`) e a categoria (`category`).
  
- **Estado do Componente**: 
  - Utiliza `useState` para controlar a categoria ativa selecionada pelo usuário.
  - Dependendo da categoria selecionada, as imagens exibidas são filtradas com base no valor do estado `activeCategory`.

- **Botões de Categoria**: 
  - Botões são renderizados para permitir a seleção de categorias, com uma classe `active` aplicada ao botão correspondente à categoria ativa. Quando um botão é clicado, a galeria exibe apenas as imagens da categoria correspondente.

- **Galeria de Imagens**: 
  - As imagens são exibidas em um layout flexível que se ajusta de acordo com o tamanho da tela, e cada imagem é acompanhada de uma legenda com o nome do prato.

### Estilos do Componente

#### Container Principal `.gastromomy`
- **Margem e Centralização**: A margem vertical de 80px e a largura de 90% garantem que o conteúdo esteja centralizado e tenha espaçamento confortável.
- **Alinhamento do Texto**: `text-align: center` garante que todos os elementos textuais dentro do container fiquem centralizados.

#### Botões de Categoria `.category-buttons`
- **Espaçamento e Layout**: Os botões possuem espaçamento adequado com `margin-right` e `margin-bottom`, permitindo uma boa separação entre eles.
- **Estilo Base dos Botões**: Com `padding: 10px 20px`, os botões são grandes o suficiente para facilitar a interação. A cor de fundo é cinza claro `#d8d3d3`, e o design inclui bordas arredondadas com `border-radius: 20px`, criando um visual amigável.
- **Interatividade**: 
  - Os botões têm um efeito de transição suave de 0.3s na cor de fundo e do texto quando o mouse passa sobre eles.
  - O botão ativo é destacado com a cor de fundo #e43c5c e o texto branco, proporcionando feedback visual claro sobre a categoria selecionada.

#### Galeria de Imagens `.gallery`
- **Layout Flexível**: A galeria utiliza `display: flex` e `flex-wrap: wrap`, o que permite que as imagens se ajustem e movam-se para a próxima linha quando o espaço horizontal acabar.
- **Espaçamento e Centralização**: O uso de `gap: 20px` adiciona espaçamento uniforme entre as imagens, e `justify-content: center` garante que elas sejam centralizadas na página.

#### Contêiner Individual de Imagem `.image-container`
- **Layout Responsivo**: 
  - Em telas de desktop, três imagens são exibidas por linha com `width: calc(33.333% - 20px)`.
  - Em tablets, o layout se ajusta para duas imagens por linha, e em dispositivos móveis, exibe uma imagem por linha.
- **Bordas e Margens**: Cada imagem tem cantos arredondados com `border-radius: 10px` e uma margem inferior para espaçamento adicional entre as linhas de imagens.

#### Texto Sobreposto na Imagem `.image-text`
- **Sobreposição**: O texto do nome do prato é sobreposto na parte inferior da imagem com `position: absolute` e alinhado horizontalmente no centro.
- **Fundo Semi-transparente**: O fundo do texto tem uma leve transparência com `rgba(0, 0, 0, 0.5)` para destacar o texto sem esconder a imagem.
- **Estilo do Texto**: O texto é branco e centralizado, com um tamanho de 16px, garantindo legibilidade.

### Estilo Responsivo

O componente é responsivo, adaptando-se a diferentes tamanhos de tela:

- **Telas de Tablets (max-width: 1024px)**: Exibe duas imagens por linha, ajustando a largura do contêiner para `50%`.
- **Telas Móveis (max-width: 768px)**: Exibe uma imagem por linha, com `width: calc(100% - 20px)`.
- **Botões Empilhados em Mobile**: Em dispositivos móveis com telas menores (max-width: 480px), os botões de categoria são empilhados verticalmente usando `flex-direction: column`, ocupando 100% da largura.

### Conclusão

O componente `Gastronomy` é visualmente atraente, proporcionando uma galeria interativa de pratos com filtragem de categorias e um layout flexível que funciona bem em diferentes dispositivos. A estilização elegante e responsiva garante uma boa experiência do usuário em qualquer tamanho de tela.