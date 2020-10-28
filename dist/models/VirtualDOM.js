"use strict";
//VirtualDOM extends Node
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = __importDefault(require("./Node"));
/*
  Ponteiro para Node root
  Interações para batch de eventos e diff da árvore
*/
var VirtualDom = /** @class */ (function (_super) {
    __extends(VirtualDom, _super);
    function VirtualDom() {
        var _this = _super.call(this, {
            tag: "document",
        }) || this;
        _this.appendChild(new Node_1.default({
            tag: "html",
            props: {
                id: "__HTML__",
            },
            parent: _this,
        }));
        return _this;
    }
    return VirtualDom;
}(Node_1.default));
exports.default = VirtualDom;
