import {Component} from "./component";
import {Attribute} from "../elements/attribute";
import {Method} from "../elements/method";

export class Class extends Component {
   stereoType:string = "<<Class>>";
   attributes:Attribute[] = [];
   methods:Method[] = [];

}
