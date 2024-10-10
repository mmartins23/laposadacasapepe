O componente `Contact` é uma seção de contato para o site do restaurante La Posada, exibindo informações de contato e um mapa do Google. Ele está estruturado para ser responsivo, ou seja, se adapta bem a diferentes tamanhos de tela.

### Estrutura do Componente

- **Título da Seção**: "Envíanos un mensaje" é seguido de um ícone de email para reforçar o tema de contato.
- **Descrição**: Um texto convida os usuários a se comunicarem com o restaurante, fornecendo detalhes sobre a importância do feedback.
- **Lista de Contatos**:
  - Links para o Facebook e WhatsApp com ícones e descrição.
  - Informações de horário de funcionamento com ícone de relógio.
  - Link para a localização no Google Maps com ícone correspondente.
- **Mapa do Google**: Um iframe embutido exibe a localização do restaurante.

### Estilo do Componente

#### Container Principal `.contact`
- **Layout Flexbox**: O container usa `display: flex` para alinhar as duas colunas de conteúdo horizontalmente.
- **Justificação e Alinhamento**: O conteúdo está centrado verticalmente com `align-content: center`, e o espaço é distribuído uniformemente com `justify-content: space-between`.
- **Flex-wrap**: Permite que as colunas se ajustem e reorganizem em telas menores.

#### Colunas `.contact-col`
- **Tamanho**: Cada coluna ocupa 48% da largura disponível em telas maiores, garantindo um layout equilibrado.
- **Margem Inferior**: Em dispositivos menores, um espaçamento é adicionado entre as colunas para melhor separação.

#### Título da Seção `.contact-col h3`
- **Estilo Visual**: O título tem cor escura (#000f38) e tamanho de 25px, além de usar flexbox para alinhar o texto e o ícone horizontalmente.
- **Espaçamento**: Há um espaçamento de 20px abaixo do título para separá-lo do próximo elemento.

#### Lista de Contatos `.contact-col ul li`
- **Alinhamento**: Cada item da lista, que inclui ícones de redes sociais e texto, é exibido horizontalmente com `display: flex` e centralizado verticalmente com `align-items: center`.
- **Ícones**: Os ícones recebem cores específicas conforme o serviço (Facebook, WhatsApp, Google Maps) e tamanho de 24px para mantê-los visualmente equilibrados.

#### Links e Ícones
- **Links**: Removem o sublinhado padrão com `text-decoration: none` e herdam a cor do texto ao seu redor.
- **Ícones**: Cada ícone é estilizado para ter uma cor correspondente à sua marca (azul para Facebook, verde para WhatsApp, vermelho para Google Maps) e um tamanho uniforme.

#### Mapa do Google `.google-map`
- **Sem Borda**: O iframe do Google Maps não tem borda, e ocupa toda a largura disponível dentro da coluna, garantindo que o mapa seja exibido de forma clara e limpa.
- **Altura Fixa**: O mapa tem uma altura fixa de 300px.

### Estilo Responsivo

#### Ajustes em Telas Menores (Máx. 768px)
- **Layout em Coluna**: Quando a largura da tela é menor que 768px, as colunas são organizadas verticalmente com `flex-direction: column`, o que permite que o conteúdo seja exibido em uma única coluna empilhada.
- **Centralização**: Os itens são centralizados no eixo principal, o que melhora a legibilidade em telas pequenas.
- **Largura Completa**: Cada coluna ocupa 100% da largura disponível, garantindo que o conteúdo fique bem distribuído em dispositivos móveis.