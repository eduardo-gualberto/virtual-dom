# virtual-dom
Implementação de um Virtual DOM enxuto. Estes são comumente utilizados em frameworks front-end como ReactJS e VueJS.
O objetivo do projeto é o aprendizado aprofundado sobre conceitos web front-end que são cada vez mais necessários.

## Estrutura da Árvore
O VDOM, assim como o DOM dos browsers consiste numa estrutura de árvore. Exemplo (ilustrativo):
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

## Motivação para utilizar um VDOM
Um DOM Virtual é muito utilizado para otimizar a renderição do layout do DOM. Isso se dá pois em muitos frameworks, a estratégia de renderização é a de renderizar toda a estrutura do DOM sempre que alguma peça reativa do framework estiver sob interação de usuário/servidor. Com o VDOM é possível implementar de forma razoavelmente barata alguns algoritmos que o percorrem com o intuito de encontrar aqueles nós que precisam ser renderizados novamente e assim fazê-los, deixando de fora aqueles que não precisam. No ReactJS, por exemplo, é utilizado o VDOM e em todo ciclo de atualização do layout é feito um "diff" entre o VDOM vigente e o novo VDOM que é aquele que contém o layout atualizado, daí encontra-se os nós que entraram para o "update" do DOM do browser.

# Utilização

```javascript
import VirtualDOM from "./models/VirtualDOM";
import Node from "./models/Node";

const VDOM = new VirtualDOM("#app");
const root = VDOM.root;
```
O argumento passado para o construtor da classe é o seletor CSS do elemento no qual o VDOM irá ter seu nó raiz. Logo na instanciação da classe, um método será chamado para popular o VDOM com os elementos já presentes no elemento indicado.

```javascript
//adiciona nó filho em root
root.appendNodeChild(new Node({
  ...options
}));

...

//adiciona nó filho em root e cria o vínculo entre seus elementos HTML
root.appendChild(new Node({
  ...options
}));
```

As funções appendChild e appendNodeChild adicionam á estrutura da arvore o nó passado como argumento. A diferença entre as duas é que appendNodeChild no interege com o DOM do browser, apenas com o VDOM, já appendChild cria vínculos com o DOM do browser.

```javascript
const queried_node = root.queryNode(node.getQueryFields);
```

node.queryNode procura, a partir do nó do qual se chama, filhos que satisfaçam os critérios indicados em seu único parâmetro.

Existem mais alguns métodos, principalmente getters e setters, na classe dos nós, porém são triviais. Nota-se aqui que existem métodos para escrita no DOM do browser, porém não existem os de leitura. Isso acontece por que a leitura no DOM não implica em problemas de performance devido ao "update" do layout inteiro da aplicação, portanto é indicado ler diretamente do DOM, uma vez que assim não haverá "overhead".
