import VirtualDOM from "./models/VirtualDOM";
import Node from "./models/Node";

const document = new VirtualDOM();

const html = document.queryNode({ id: "__HTML__" })[0];

for (let i = 1; i < 6; i++)
  html.appendChild(
    new Node({
      tag: `h${i}`,
      props: {
        id: i.toString(),
      },
    })
  );

const h4 = html.queryNode({ id: "4" })[0];

h4.appendChild(
  new Node({
    tag: "p",
    props: {
      id: "pzin",
    },
  })
);

h4.appendChild("alowwww marilene");

const res = html.queryNode({ tag: "text" });
console.log(res);
