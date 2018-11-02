import {Class} from "./class";
import {Attribute} from "../elements/attribute";
import {Method} from "../elements/method";

export class Interface extends Class {
   stereoType:string = "<<Interface>>";
   attributes:Attribute[] = [];
   methods:Method[] = [];

}
