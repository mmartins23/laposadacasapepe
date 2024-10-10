O componente `Team` é projetado para exibir informações sobre a equipe e os valores do restaurante La Posada Casa Pepe. Ele combina texto descritivo com uma foto da equipe, apresentando-se de forma visualmente equilibrada, tanto em dispositivos grandes quanto pequenos. O componente se adapta a diferentes tamanhos de tela, graças à utilização de `Flexbox` e regras de estilo responsivo.

### Estrutura do Componente

1. **Divisão Principal:**
   - O `Team` está envolvido por uma `div` de classe `team-section`, que é o container principal. Dentro dela, existem duas divisões:
     - `team-text`: Contém dois parágrafos descrevendo a qualidade dos alimentos e o compromisso com a experiência gastronômica.
     - `team-photo`: Contém uma imagem que mostra a equipe do restaurante.

2. **Imagem Importada:**
   - A imagem da equipe é importada do diretório `assets` e usada na `div` `team-photo`.

3. **Atributos de Identificação:**
   - A `div` tem o atributo `id="Equipo"`, permitindo que ela seja referenciada para navegação por âncora no site.

### Estilos CSS

1. **Team Section (Seção Principal):**
   - **`display: flex`**: Configura o layout para que o texto e a imagem fiquem lado a lado em telas maiores.
   - **`justify-content: space-between`**: Mantém espaço uniforme entre o texto e a imagem.
   - **`align-items: center`**: Centraliza verticalmente o texto e a imagem.
   - **`gap: 40px`**: Adiciona espaçamento entre o texto e a imagem para evitar que fiquem muito próximos.

2. **Texto da Equipe:**
   - **`flex: 1`**: O texto ocupa uma parte igual da largura disponível em relação à imagem.
   - **`font-size: 18px`**: Define um tamanho de fonte maior para boa legibilidade em desktops.
   - **`line-height: 1.6`**: Define um espaçamento confortável entre as linhas de texto.
   - **`color: #676767`**: O texto tem uma cor cinza suave para proporcionar uma leitura agradável.
   - **`p { margin-bottom: 20px }`**: Os parágrafos possuem espaçamento inferior para uma melhor separação entre blocos de texto.

3. **Foto da Equipe:**
   - **`flex: 1`**: A imagem ocupa a mesma quantidade de espaço que o texto.
   - **`max-width: 500px`**: Limita a largura máxima da imagem a 500px para evitar que fique muito grande.
   - **`border-radius: 10px`**: Arredonda as bordas da imagem, conferindo um visual mais suave.
   - **`box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)`**: Aplica uma sombra sutil na imagem, adicionando um efeito de profundidade e destaque.

### Estilos Responsivos

1. **Para Tablets (Máximo de 1024px):**
   - **`flex-direction: row`**: Mantém o layout lado a lado em tablets, mas com um espaçamento reduzido entre o texto e a imagem.
   - **`gap: 20px`**: Diminui o espaço entre o texto e a imagem para evitar que o layout pareça espaçado demais.
   - **`font-size: 16px`**: O tamanho da fonte é reduzido para 16px, proporcionando uma leitura mais confortável em telas menores.
   - **`max-width: 400px`**: A largura máxima da imagem é reduzida para 400px, ajustando-se ao espaço disponível.

2. **Para Dispositivos Móveis (Máximo de 768px):**
   - **`flex-direction: column`**: O layout muda para uma coluna, com o texto exibido acima da imagem, para facilitar a leitura e visualização em telas menores.
   - **`text-align: center`**: O texto é centralizado em dispositivos móveis, criando uma apresentação visual mais equilibrada.
   - **`font-size: 15px`**: O tamanho da fonte é ainda mais reduzido para 15px, melhorando a legibilidade em telas pequenas.
   - **`max-width: 100%`**: A imagem se adapta para ocupar 100% da largura disponível, maximizando o uso do espaço em dispositivos móveis.
   - **`margin-top: 20px`**: Adiciona espaçamento entre o texto e a imagem quando exibidos em formato de coluna.

### Resumo

O componente `Team` é responsivo e adaptável a diferentes tamanhos de tela, apresentando de forma clara o compromisso do restaurante com a qualidade dos alimentos e a experiência do cliente. Ele usa `Flexbox` para um layout flexível e garante que o texto e a imagem sejam exibidos de forma proporcional em todas as plataformas, com mudanças sutis no estilo para otimizar a apresentação em tablets e dispositivos móveis.