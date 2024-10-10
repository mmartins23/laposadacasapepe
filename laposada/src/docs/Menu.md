O componente `Menu` exibe uma lista de menus disponíveis no restaurante La Posada Casa Pepe. Ele apresenta informações detalhadas sobre cada menu, como o nome, preço, descrição dos pratos e bebidas oferecidas. O layout do componente é feito usando `grid` para garantir a responsividade, adaptando-se a diferentes tamanhos de tela. Vamos explicar em detalhes sua estrutura e estilo:

### Estrutura do Componente

- **`menu-container`**: 
  - O contêiner principal onde todos os itens do menu são organizados. Ele usa um layout `grid` para organizar os itens de forma responsiva.

- **`menu-item`**: 
  - Cada menu é representado por um item com detalhes como nome, preço, descrição dos pratos, bebidas e outras informações relevantes. Existem quatro menus diferentes dentro do contêiner, dois deles com uma classe especial de recomendação (`recommended`), que os destaca visualmente.

- **Informações dos menus**:
  - **Título (`h3`)**: Nome do menu, como "Menú Degustación", "Menú Especial", etc.
  - **Preço (`h4`)**: O preço do menu, como "€28" ou "€40".
  - **Descrição (`p`)**: Descrição detalhada dos pratos oferecidos em cada menu, divididos em categorias como `Entrantes`, `Plato Principal`, `Postres`, e `Bebidas`, com subtítulos para cada seção (`h5`).

### Estilo do Componente

#### Container `.menu-container`

O contêiner principal organiza os itens do menu em um layout de grid flexível:

- **`display: grid`**: Define o layout em grade para facilitar a disposição dos itens de forma responsiva.
- **`grid-template-columns: repeat(1, 1fr)`**: Para telas pequenas (como celulares), os itens são organizados em uma única coluna.
- **`gap: 20px`**: Adiciona um espaçamento de 20px entre os itens do menu.
- **`padding: 40px`**: Adiciona um espaçamento interno ao redor de todo o contêiner, proporcionando uma margem confortável.

#### Responsividade

O layout é ajustado para diferentes larguras de tela usando media queries:

- **Telas médias (768px)**: 
  - O layout se ajusta para exibir os itens do menu em 2 colunas (`grid-template-columns: repeat(2, 1fr)`), ideal para tablets ou dispositivos com telas intermediárias.
  
- **Telas grandes (1024px)**: 
  - Em telas maiores, como desktops, o layout exibe os itens em 4 colunas (`grid-template-columns: repeat(4, 1fr)`), aproveitando melhor o espaço horizontal.

#### Itens do Menu `.menu-item`

Cada item do menu é estilizado individualmente para criar um design limpo e agradável:

- **`background-color: #f9f9f9`**: O fundo dos itens tem um tom claro para diferenciar os menus e manter a legibilidade.
- **`padding: 20px`**: Adiciona espaçamento interno em cada item, proporcionando uma boa separação entre o texto e as bordas.
- **`border-radius: 8px`**: Os cantos dos itens são levemente arredondados para criar um visual mais suave.
- **`box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)`**: Uma sombra sutil é aplicada aos itens, dando a impressão de profundidade e destacando-os.
- **`text-align: center`**: O texto dentro de cada item é centralizado.
- **`color: #4a4a4a`**: O texto tem uma cor cinza escuro, mantendo uma boa legibilidade.

#### Título do Menu `.menu-item h3`

- **`font-size: 24px`**: O título do menu tem um tamanho de fonte grande, destacando-se no item.
- **`margin-bottom: 10px`**: Adiciona um pequeno espaçamento abaixo do título para separar o conteúdo.
- **`color: #e43c5c`**: O título usa a cor #e43c5c, criando consistência visual com o design geral.

#### Preço do Menu `.menu-item h4`

- **`font-size: 32px`**: O preço é destacado com uma fonte maior, para chamar a atenção.
- **`color: #e43c5c`**: A cor também é #e43c5c, que faz parte da paleta de cores do site.
- **`margin: 15px 0`**: Cria espaçamento ao redor do preço para separar visualmente os diferentes elementos do item.

#### Texto e Seções do Menu `.menu-item p` e `.menu-item h5`

- **Texto Descritivo (`p`)**:
  - **`font-size: 16px`**: O tamanho da fonte para a descrição é padrão, facilitando a leitura.
  - **`margin: 10px 0`**: Espaçamento ao redor dos parágrafos para garantir que o texto fique bem separado.
  - **`line-height: 1.6`**: A altura da linha é aumentada para melhorar a legibilidade do texto.

- **Subtítulos das Seções (`h5`)**:
  - **`font-size: 18px`**: Os subtítulos, como "Entrantes", "Plato Principal", "Postres", etc., têm um tamanho de fonte maior do que o texto descritivo, mas menor do que o título principal.
  - **`color: #719A0B`**: Eles são estilizados com uma cor verde (#719A0B) para criar destaque e indicar uma nova seção no menu.

#### Efeito de Hover `.menu-item:hover`

- **`transform: translateY(-5px)`**: Quando o usuário passa o mouse sobre um item do menu, ele se desloca ligeiramente para cima, criando uma sensação de interação.
- **`box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15)`**: A sombra aumenta no hover, destacando o item ainda mais.

#### Estilo Especial para Menus Recomendados `.menu-item.recommended`

- **`border: 2px solid #e43c5c`**: Um destaque especial é dado aos itens recomendados com uma borda vermelha (#e43c5c), a mesma cor usada para os títulos e preços.
- **`background-color: #fff`**: O fundo dos menus recomendados é branco, diferenciando-os dos outros menus.

### Conclusão

O componente `Menu` oferece uma disposição organizada e visualmente atraente para apresentar as opções de menu do restaurante La Posada. Usando o layout `grid`, ele garante que o design seja responsivo, adaptando-se automaticamente a diferentes tamanhos de tela. Estilos como bordas arredondadas, sombras sutis e efeitos de hover criam uma experiência de usuário agradável e envolvente. Os menus recomendados têm um destaque visual claro, incentivando os visitantes a considerá-los como opções preferenciais.