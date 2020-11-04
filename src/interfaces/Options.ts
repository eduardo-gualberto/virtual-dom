import Node from "../models/Node";
import IProps from "./Props";

export default interface IOptions {
  tag: string;
  parent?: Node;
  children?: Node[];
  props?: any;
  text_content?: string;
  el?: Element | Document;
}
