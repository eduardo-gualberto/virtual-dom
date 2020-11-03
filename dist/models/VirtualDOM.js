//VirtualDOM extends Node
import Node from "./Node";
/*
  Ponteiro para Node root
  Interações para batch de eventos e diff da árvore
*/
var VirtualDom = /** @class */ (function () {
    function VirtualDom(id) {
        var _a, _b;
        this.root = new Node({
            tag: "root",
            props: {
                id: id,
                class: (_a = document.querySelector(id)) === null || _a === void 0 ? void 0 : _a.className,
            },
            el: document.querySelector(id),
            text_content: (_b = document.querySelector(id)) === null || _b === void 0 ? void 0 : _b.textContent,
        });
        for (var i = 0; i < this.root.HTMLElement.children.length; i++)
            this.populate(this.root.HTMLElement.children[i], this.root);
    }
    Object.defineProperty(VirtualDom.prototype, "document", {
        get: function () {
            return this.root;
        },
        enumerable: true,
        configurable: true
    });
    VirtualDom.prototype.getContext = function () {
        console.log(this.document.HTMLElement.children);
    };
    //recursivamente preenche o VDOM baseado no estado do DOM
    //para quando todos os nodes forem incluidos no VDOM
    VirtualDom.prototype.populate = function (htmlEl, parent) {
        //cria novo node para o VDOM
        var node = new Node({
            tag: htmlEl.localName,
            parent: parent,
            el: htmlEl,
            props: {
                id: htmlEl.id,
                class: htmlEl.className,
            },
            text_content: htmlEl.textContent,
        });
        //adiciona o novo node como filho do pai
        parent.appendChild(node);
        //popula os nodes filhos
        for (var i = 0; i < htmlEl.children.length; i++)
            this.populate(htmlEl.children[i], node);
    };
    return VirtualDom;
}());
export default VirtualDom;
