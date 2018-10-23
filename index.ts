import * as SVG from 'svg.js';


abstract class Component {
   _id:string;
   name:string;

   constructor(name:string,_id?:string){
     this._id = _id;
     this.name = name;
   }
}

enum Visibility {
    Public = "+",
    Protected = "#",
    Private = "-"
}

class Attribute{
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

}

class Arg{
  name:string;
  type:string;
  defaultValue:string;

  constructor(name:string,type:string,defaultValue?:string){
    this.name = name;
    this.type = type;
    this.defaultValue = defaultValue;
  }
}

class Method{
  name:string;
  returns:string;
  visibility:Visibility;
  args:Arg[] = [];

  constructor(name:string,returns:string,args?:Arg[],visibility?:Visibility){
    this.name = name;
    this.returns = returns;
    this.visibility = visibility || Visibility.Public;
    this.args = args;
  }
}



class ClassComponent extends Component {
   stereoType:string = "<<Class>>";
   attributes:Attribute[] = [];
   methods:Method[] = [];

}

class InterfaceComponent extends ClassComponent {
  stereoType:string = "<<Interface>>";

}

class EnumComponent extends ClassComponent {
  stereoType:string = "<<Enum>>";
}



let airplaneClass = new ClassComponent("Airplane");
airplaneClass.attributes.push(new Attribute("make","String"));
airplaneClass.attributes.push(new Attribute("model","String"));
airplaneClass.attributes.push(new Attribute("noOfSeats","Int"));

airplaneClass.methods.push(new Method("getMake","String"));
airplaneClass.methods.push(new Method("setMake","Void",[
  new Arg("make","String")
]));


let passengerClass = new ClassComponent("Passenger");
passengerClass.attributes.push(new Attribute("firstName","String"));
passengerClass.attributes.push(new Attribute("lastName","String"));
passengerClass.attributes.push(new Attribute("hasJetlag","Boolean"));

passengerClass.methods.push(new Method("getFirstName","String"));
passengerClass.methods.push(new Method("setFirstName","Void",[
  new Arg("firstName","String")
]));




// var rect = draw.rect(100, 100).attr({ fill: '#f06' })
