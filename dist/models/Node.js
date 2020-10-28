"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(options) {
        this.options = options;
        this.node_id = Math.random();
        this.options.children = this.options.children || [];
    }
    Node.prototype.appendChild = function (child) {
        var _a;
        child.setParentNode = this;
        (_a = this.options.children) === null || _a === void 0 ? void 0 : _a.push(child);
    };
    Node.prototype.removeChild = function (child) {
        var _a, _b;
        var index = (_a = this.options.children) === null || _a === void 0 ? void 0 : _a.findIndex(function (c) { return c.getNodeId === child.getNodeId; });
        if (index === -1 || index === undefined)
            return false;
        (_b = this.options.children) === null || _b === void 0 ? void 0 : _b.splice(index, 1);
        return true;
    };
    Object.defineProperty(Node.prototype, "getParent", {
        get: function () {
            return this.options.parent || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getChildren", {
        get: function () {
            return this.options.children || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getTag", {
        get: function () {
            return this.options.tag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getProps", {
        get: function () {
            return this.options.props || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getNodeId", {
        get: function () {
            return this.node_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getQueryFields", {
        get: function () {
            return {
                node_id: this.node_id,
                tag: this.getTag,
                class: this.getProps.class,
                id: this.getProps.id,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "setParentNode", {
        set: function (parent) {
            if (this.options.parent)
                return;
            this.options.parent = parent;
        },
        enumerable: true,
        configurable: true
    });
    Node.prototype.queryNode = function (opt) {
        var opt_keys = Object.keys(opt);
        var checker = true;
        for (var i = 0; i < opt_keys.length; i++)
            checker =
                checker &&
                    opt[opt_keys[i]] === this.getQueryFields[opt_keys[i]];
        if (checker)
            return [this];
        return this.qN(opt, this.getChildren);
    };
    Node.prototype.qN = function (opt, queue) {
        if (queue.length === 0)
            return [];
        var prop = Object.keys(opt)[0];
        var els = queue.filter(function (el) {
            var opt_keys = Object.keys(opt);
            var checker = true;
            for (var i = 0; i < opt_keys.length; i++)
                checker =
                    checker &&
                        opt[opt_keys[i]] === el.getQueryFields[opt_keys[i]];
            return checker;
        });
        if (els.length > 0)
            return els;
        var new_queue = [];
        queue.forEach(function (el) { return new_queue.push.apply(new_queue, el.getChildren); });
        return this.qN(opt, new_queue);
    };
    return Node;
}());
exports.default = Node;
