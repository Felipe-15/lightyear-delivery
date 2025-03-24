# :rocket: Lightyear Delivery

## :pencil2: Descrição

O site consiste em uma listagem de endereços para entregas, com a possibilidade de seleção entre Terra e Marte, com cada um tendo seus próprios dados relativos.

[Site em produção](https://lightyear-delivery.netlify.app/) || [Meu Figma](https://www.figma.com/design/3pgUxys1yNWxS15J5Xh0WX/desafio---beyond?node-id=0-1&t=tfSebiXxW2EKRa1y-1)

## :computer: Como executar

Caso opte por executar localmente o projeto, é extremamente simples, basta clonar o repositório e executar `npm run dev` - para modo desenvolvimento -, se preferir uma build local, `npm run build` e `npm start`, irão fazer executar o projeto em estado de produção.

## :page_facing_up: Páginas

- [x] Home - (Listagem de Endereços)
- [x] Criação de Endereço da Terra
- [x] Criação de Endereço de Marte

## :sparkles: Features

:heavy_check_mark: Listagem de endereços com memoização

:heavy_check_mark: Filtragem por pesquisa baseada em CEP e Número de Lote

:heavy_check_mark: Possibilidade de exclusão de endereço

:heavy_check_mark: Busca de informações do endereço por meio do CEP (Endereço da Terra)

:heavy_check_mark: Validação de formulários

:heavy_check_mark: Responsividade em todas as telas

## :boom: Problemas enfrentados

Sempre tento me atentar a performance e evitar criação de estados desnecessários, nesse projeto por ser mais simples, tentei aplicar mais regras de CSS para lógicas básicas como sumir ou alterar comportamentos simples de componentes, afim de evitar renderizações sem necessidade, oque deu um pouco mais de trabalho no input radio invisível que controla a escolha do card, ele faz evitar a necessidade de um estado geral na página que identifica o endereço selecionado.

## :arrow_up_small: Possíveis melhorias

:small_orange_diamond: Adição de um `json-server` para persistência dos dados em um banco de dados

:small_orange_diamond: Maior utilização de SSR, como inicialmente é usado o `localStorage` que é executado em Client Side, algumas páginas poderiam ser completamente do lado do servidor, usando `Server Actions` para enviar os formulários

:small_orange_diamond: Paginação com scroll infinito na listagem de endereços

:small_orange_diamond: Implementação de `Skeleton Loadings` e `Loading Pages` com `Suspense API` para uma melhor interatividade, que casaria bem com a implementação do `json-server` para aguardar o retorno das chamadas.
