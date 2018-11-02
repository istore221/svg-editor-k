export class Arg{
  name:string;
  type:string;
  defaultValue:string;

  constructor(name:string,type:string,defaultValue?:string){
    this.name = name;
    this.type = type;
    this.defaultValue = defaultValue;
  }

  toString = () : string => {
        return `${this.name}:${this.type}${(this.defaultValue ? " = "+this.defaultValue : "")}`;
  }

}
