//VirtualDOM extends Node

import IOptions from "../interfaces/Options";
import Node from "./Node";

/*
  Ponteiro para Node root
  Interações para batch de eventos e diff da árvore
*/

export default class VirtualDom {
  root: Node;
  constructor() {
    this.root = new Node({
      tag: "root",
      el: document,
    });
  }

  get document(): Node {
    return this.root;
  }

  getContext(): void {
    console.log(document.children);
  }

  //recursivamente preenche o VDOM baseado no estado do DOM
  //para quando todos os nodes forem incluidos no VDOM
  populate(htmlEl: Element, parent: Node): void {
    //cria novo node para o VDOM
    const node = new Node({
      tag: htmlEl.localName,
      parent: parent,
      el: htmlEl,
      props: {
        id: htmlEl.id,
        class: htmlEl.className,
      },
      text_content: htmlEl.textContent as string | undefined,
    });

    //adiciona o novo node como filho do pai
    parent.appendChild(node);

    //popula os nodes filhos
    for (let i = 0; i < htmlEl.children.length; i++)
      this.populate(htmlEl.children[i], node);
  }
}
