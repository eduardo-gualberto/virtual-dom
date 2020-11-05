# virtual-dom
Implementação de um Virtual DOM enxuto. Estes são comumente utilizados em frameworks front-end como ReactJS e VueJS.
O objetivo do projeto é o aprendizado aprofundado sobre conceitos web front-end que são cada vez mais necessários.

#Base
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

#Utilização

```javascript
import VirtualDOM from "./models/VirtualDOM";

const VDOM = new VirtualDOM("#app");
```
O argumento passado para o construtor da classe é o seletor CSS do elemento no qual o VDOM irá ter seu nó raiz. Logo na instanciação da classe, um método será chamado para popular o VDOM com os elementos já presentes no elemento indicado.

