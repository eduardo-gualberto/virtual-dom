import Node from "../models/Node";
import IProps from "./Props";

export default interface IOptions {
  tag: string;
  parent?: Node;
  children?: Node[];
  props?: IProps;
  text_content?: string;
}
