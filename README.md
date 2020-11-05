# virtual-dom
Implementação de um Virtual DOM enxuto. Estes são comumente utilizados em frameworks front-end como ReactJS e VueJS.
O objetivo do projeto é o aprendizado aprofundado sobre conceitos web front-end que são cada vez mais necessários.

# Base
## Estrutura da Árvore
O VDOM, assim como o DOM dos browsers consiste numa estrutura de árvore. Exemplo:
```javascript
{
  tag: "...",
  props: {
    id: "...",
    class: "...",
    ...outrasProps
  },
  children: [],
}
```
A propriedade 'children' contém outras estruturas idênticas á dada acima.

## Motivação
Um DOM Virtual é muito utilizado para otimizar a renderição do layout do DOM. Isso se dá pois em muitos frameworks, a estratégia de renderização é a de renderizar toda a estrutura do DOM sempre que alguma peça reativa do framework estiver sob interação de usuário/servidor. Com o VDOM é possível implementar de forma razoavelmente barata alguns algoritmos que o percorrem com o intuito de encontrar aqueles nós que precisam ser renderizados novamente e assim fazê-los, deixando de fora aqueles que não precisam. No ReactJS, por exemplo, é utilizado o VDOM e em todo ciclo de atualização do layout é feito um "diff" entre o VDOM vigente e o novo VDOM que é aquele que contém o layout atualizado, daí encontra-se os nós que entraram para o "update" do DOM do browser.

# Utilização

```javascript
import VirtualDOM from "./models/VirtualDOM";

const VDOM = new VirtualDOM("#app");
```
O argumento passado para o construtor da classe é o seletor CSS do elemento no qual o VDOM irá ter seu nó raiz. Logo na instanciação da classe, um método será chamado para popular o VDOM com os elementos já presentes no elemento indicado.

