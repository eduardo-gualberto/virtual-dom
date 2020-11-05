/*
  ARQUIVO PARA PROPOSITOS DE TESTE DA BIBLIOTECA

  THIS ARCHIVE'S PURPOUSE IS FOR TESTING THE LIBRARY

*/

import Node from "./models/Node";
import VirtualDOM_ from "./models/VirtualDOM";

const VirtualDOM = new VirtualDOM_("#app");

const root = VirtualDOM.root;

const div = new Node({
  tag: "div",
  text_content: "texto da div",
  props: {
    id: "divinha",
  },
});

const h1 = new Node({
  tag: "h1",
  text_content: "cade",
  props: {
    id: "h1zinha",
    class: "aloww",
  },
});

div.appendChild(h1);
root.appendChild(div);

console.log(div.getChildren);

console.log(root.HTMLElement);
