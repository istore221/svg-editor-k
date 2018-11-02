import {Visibility} from "./visibility";
import {Arg} from "./arg";

export class Method{
  name:string;
  returns:string;
  visibility:Visibility;
  args:Arg[] = [];

  constructor(name:string,returns:string,args?:Arg[],visibility?:Visibility){
    this.name = name;
    this.returns = returns;
    this.visibility = visibility || Visibility.Public;
    this.args = args || [];
  }

  toString = () : string => {
        return `${this.visibility} ${this.name}():${this.returns}`
  }
}
