var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Node = /** @class */ (function () {
    function Node(options) {
        this.options = options;
        this.node_id = Math.random();
        this.options.children = this.options.children || [];
    }
    Node.prototype.appendChild = function (child) {
        var _a, _b, _c;
        if (child.node_id) {
            child.setParentNode = this;
            (_a = this.options.children) === null || _a === void 0 ? void 0 : _a.push(child);
            //api de escrita no dom... (temporário)
            if (child.HTMLElement)
                this.HTMLElement.appendChild(child.HTMLElement);
            else {
                var newEl = document.createElement(child.getTag);
                newEl.textContent = child.getTextContent || "";
                var childProps = Object.keys(child.getProps);
                for (var _i = 0, childProps_1 = childProps; _i < childProps_1.length; _i++) {
                    var prop = childProps_1[_i];
                    newEl[prop] = child.getProps[prop];
                }
                (_b = this.HTMLElement) === null || _b === void 0 ? void 0 : _b.appendChild(newEl);
                child.setHTMLElement = newEl;
            }
            return;
        }
        var new_node = new Node({
            tag: "text",
            parent: this,
            text_content: child,
        });
        (_c = this.options.children) === null || _c === void 0 ? void 0 : _c.push(new_node);
    };
    Node.prototype.removeChild = function (child) {
        var _a, _b;
        console.log("child", child);
        var index = (_a = this.options.children) === null || _a === void 0 ? void 0 : _a.findIndex(function (c) { return c.getNodeId === child.getNodeId; });
        if (index === -1 || index === undefined)
            return false;
        (_b = this.options.children) === null || _b === void 0 ? void 0 : _b.splice(index, 1);
        //api de escrita no dom... (temporário)
        this.HTMLElement.removeChild(child.HTMLElement);
        return true;
    };
    Object.defineProperty(Node.prototype, "HTMLElement", {
        get: function () {
            return this.options.el;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "setHTMLElement", {
        set: function (el) {
            this.options.el = el;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getParent", {
        get: function () {
            return this.options.parent || {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getChildren", {
        get: function () {
            return this.options.children || [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getTag", {
        get: function () {
            return this.options.tag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getProps", {
        get: function () {
            return this.options.props || {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getNodeId", {
        get: function () {
            return this.node_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getTextContent", {
        get: function () {
            return this.options.text_content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getQueryFields", {
        get: function () {
            return __assign({ node_id: this.node_id, tag: this.getTag }, this.getProps);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "setParentNode", {
        set: function (parent) {
            if (this.options.parent)
                return;
            this.options.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Node.prototype.setProp = function (prop, value) {
        this.options.props[prop] = value;
    };
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
export default Node;
