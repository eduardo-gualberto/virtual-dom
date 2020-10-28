//VirtualDOM extends Node

import IOptions from "../interfaces/Options";
import Node from "./Node";

/*
  Ponteiro para Node root
  Interações para batch de eventos e diff da árvore
*/

export default class VirtualDom extends Node {
  constructor() {
    super({
      tag: "document",
    });

    this.appendChild(
      new Node({
        tag: "html",
        props: {
          id: "__HTML__",
        },
        parent: this,
      })
    );
  }
}
