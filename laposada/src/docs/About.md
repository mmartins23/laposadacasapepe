O componente `About` é uma seção da página que descreve a história do restaurante La Posada, destacando a tradição e a importância cultural do local. Ele utiliza uma combinação de imagem e texto para transmitir essa narrativa de forma visualmente atraente e informativa. A seguir, explico em detalhes a estrutura e o estilo desse componente:

### Estrutura do Componente `About`

1. **`<div className="about">`**: 
   - Este é o contêiner principal que envolve todo o conteúdo da seção, incluindo a imagem e o texto.

2. **`<div className="about-left">`**:
   - Esta divisão contém a imagem da história do restaurante, que é importada no topo do componente como `about_img`. 
   - A classe `about-img` é aplicada para estilizar a imagem, incluindo bordas arredondadas.

3. **`<div className="about-right">`**:
   - Contém o conteúdo textual sobre a história do restaurante. O texto é organizado em três parágrafos, precedidos por um subtítulo (`<h3>`) e um título principal (`<h2>`).
   - O subtítulo apresenta uma breve introdução, e o título principal destaca a essência da mensagem: o legado culinário transmitido por gerações.

### Estilo do Componente `About`

O estilo é definido no arquivo `About.css`, e os principais pontos incluem:

1. **Estrutura Geral (`.about`)**:
   - **Layout Flexbox**: O layout usa `flexbox` para alinhar a imagem e o texto lado a lado em telas maiores, com a propriedade `justify-content: space-between` para distribuir o espaço entre a imagem e o texto de maneira uniforme.
   - **Alinhamento Vertical**: `align-items: center` garante que a imagem e o texto fiquem centralizados verticalmente.
   - **Responsividade**: A largura do contêiner é definida como `90%` da tela para garantir um espaçamento adequado nas laterais, e a margem de `100px auto` adiciona um espaçamento entre essa seção e outras partes da página.

2. **Seção da Imagem (`.about-left`)**:
   - A imagem ocupa `40%` do espaço disponível em telas grandes, mantendo uma proporção menor em relação ao texto.
   - A classe `.about-img` define a largura total da imagem dentro do seu contêiner (`width: 100%`) e adiciona um efeito de bordas arredondadas com `border-radius: 10px`.

3. **Seção do Texto (`.about-right`)**:
   - O texto ocupa `56%` da largura disponível, dando mais destaque à história.
   - **Título Principal (`h2`)**: O título utiliza a cor primária do projeto (`#e43c5c`) e um tamanho de fonte grande (`30px`) para chamar a atenção. Ele também tem um limite de largura (`max-width: 400px`) para garantir legibilidade e evitar que o texto se espalhe demais.
   - **Subtítulo (`h3`)**: O subtítulo é estilizado com fonte semi-negrito (`font-weight: 600`) e uma cor escura.
   - **Texto dos Parágrafos (`p`)**: Os parágrafos são estilizados com um tom de cinza suave (`#676767`) e espaçamento entre eles (`margin-bottom: 15px`), garantindo que o conteúdo seja fácil de ler.

4. **Responsividade**:
   - **Telas menores (até 1024px)**:
     - O layout muda de horizontal para vertical (`flex-direction: column`), fazendo com que a imagem e o texto sejam exibidos um abaixo do outro.
     - A ordem dos elementos também muda: o texto é exibido primeiro (`order: 1`) e a imagem vem em segundo (`order: 2`).
     - A imagem e o texto ocupam 100% da largura da tela em dispositivos menores, o que garante que o conteúdo seja totalmente visível e acessível em smartphones e tablets.
   
   - **Ajustes móveis (até 800px)**:
     - O tamanho do título principal é reduzido para `24px` e o texto dos parágrafos é reduzido para `14px`, tornando o conteúdo mais compacto e legível em telas pequenas.

### Resumo

O componente `About` combina imagem e texto de forma equilibrada para contar a história do restaurante La Posada. O layout flexível ajusta-se a diferentes tamanhos de tela, garantindo que a experiência visual seja consistente tanto em dispositivos grandes quanto em pequenos. O estilo utiliza variáveis de cor e regras de responsividade para tornar o design moderno, limpo e alinhado com a identidade visual do site.