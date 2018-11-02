import {Visibility} from "./visibility";

export class Attribute{
  name:string;
  type:string;
  defaultValue:string;
  visibility:Visibility;

  constructor(name:string,type:string,visibility?:Visibility,defaultValue?:string){
    this.name = name;
    this.type = type;
    this.visibility = visibility || Visibility.Private;
    this.defaultValue = defaultValue;
  }

  toString = () : string => {
        return `${this.visibility} ${this.name} : ${this.type}${(this.defaultValue ? " = "+this.defaultValue : "")}`
  }

}
