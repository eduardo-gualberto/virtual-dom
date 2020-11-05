import Node from "./models/Node";
import VirtualDOM_ from "./models/VirtualDOM";
var VirtualDOM = new VirtualDOM_("#app");
var root = VirtualDOM.root;
var div = new Node({
    tag: "div",
    text_content: "texto da div",
    props: {
        id: "divinha",
    },
});
var h1 = new Node({
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
