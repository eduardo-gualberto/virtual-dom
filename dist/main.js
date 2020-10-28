"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var VirtualDOM_1 = __importDefault(require("./models/VirtualDOM"));
var Node_1 = __importDefault(require("./models/Node"));
var document = new VirtualDOM_1.default();
var html = document.queryNode({ id: "__HTML__" })[0];
for (var i = 1; i < 6; i++)
    html.appendChild(new Node_1.default({
        tag: "h" + i,
        props: {
            id: i.toString(),
        },
    }));
var h4 = html.queryNode({ id: "4" })[0];
h4.appendChild(new Node_1.default({
    tag: "p",
    props: {
        id: "pzin",
    },
}));
h4.appendChild("alowwww marilene");
var res = html.queryNode({ tag: "text" });
console.log(res);
