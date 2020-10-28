import IOptions from "../interfaces/Options";
import IProps from "../interfaces/Props";
import IQuery from "../interfaces/Query";

export default class Node {
  private node_id: number;

  constructor(private options: IOptions) {
    this.node_id = Math.random();
    this.options.children = this.options.children || [];
  }

  appendChild(child: Node | string): void {
    if ((child as Node).node_id) {
      (child as Node).setParentNode = this;
      this.options.children?.push(child as Node);
      return;
    }
    const new_node = new Node({
      tag: "text",
      parent: this,
      text_content: child as string,
    });
    this.options.children?.push(new_node);
  }

  removeChild(child: Node): boolean {
    const index = this.options.children?.findIndex(
      (c) => c.getNodeId === child.getNodeId
    );
    if (index === -1 || index === undefined) return false;
    this.options.children?.splice(index, 1);
    return true;
  }

  get getParent(): Node {
    return this.options.parent || ({} as Node);
  }

  get getChildren(): Node[] {
    return this.options.children || ([] as Node[]);
  }

  get getTag(): string {
    return this.options.tag;
  }

  get getProps(): IProps {
    return this.options.props || ({} as IProps);
  }

  get getNodeId(): number {
    return this.node_id;
  }

  get getQueryFields(): IQuery {
    return {
      node_id: this.node_id,
      tag: this.getTag,
      class: this.getProps.class,
      id: this.getProps.id,
    } as IQuery;
  }

  set setParentNode(parent: Node) {
    if (this.options.parent) return;
    this.options.parent = parent;
  }

  queryNode(opt: IQuery): Node[] {
    const opt_keys = Object.keys(opt);
    let checker = true;

    for (let i = 0; i < opt_keys.length; i++)
      checker =
        checker &&
        (opt as any)[opt_keys[i]] === (this.getQueryFields as any)[opt_keys[i]];

    if (checker) return [this];
    return this.qN(opt, this.getChildren);
  }

  private qN(opt: IProps, queue: Node[]): Node[] {
    if (queue.length === 0) return [] as Node[];

    const prop = Object.keys(opt)[0];

    const els = queue.filter((el) => {
      const opt_keys = Object.keys(opt);
      let checker = true;

      for (let i = 0; i < opt_keys.length; i++)
        checker =
          checker &&
          (opt as any)[opt_keys[i]] === (el.getQueryFields as any)[opt_keys[i]];

      return checker;
    });

    if (els.length > 0) return els;

    const new_queue: Node[] = [];
    queue.forEach((el) => new_queue.push(...el.getChildren));
    return this.qN(opt, new_queue);
  }
}
