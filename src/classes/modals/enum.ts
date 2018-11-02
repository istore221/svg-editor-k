import {Class} from "./class";
import {Attribute} from "../elements/attribute";
import {Method} from "../elements/method";

export class Enum extends Class {
   stereoType:string = "<<Enum>>";
   attributes:Attribute[] = [];
   methods:Method[] = [];

}
