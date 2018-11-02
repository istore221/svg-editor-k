 import {UML} from "./src/uml";



 let airplaneClass = new UML.Classdiagram.Modals.Class("Airplane");
 airplaneClass.attributes.push(new UML.Classdiagram.Element.Attribute("make","String"));
 airplaneClass.attributes.push(new UML.Classdiagram.Element.Attribute("model","String"));
 airplaneClass.attributes.push(new UML.Classdiagram.Element.Attribute("noOfSeats","Int"));

 airplaneClass.methods.push(new UML.Classdiagram.Element.Method("getMake","String"));
 airplaneClass.methods.push(new UML.Classdiagram.Element.Method("setMake","Void",[
   new UML.Classdiagram.Element.Arg("make","String")
 ]));


 let passengerClass = new UML.Classdiagram.Modals.Class("Passenger");
 passengerClass.attributes.push(new UML.Classdiagram.Element.Attribute("firstName","String",undefined));
 passengerClass.attributes.push(new UML.Classdiagram.Element.Attribute("lastName","String"));
 passengerClass.attributes.push(new UML.Classdiagram.Element.Attribute("hasJetlag","Boolean"));

 passengerClass.methods.push(new UML.Classdiagram.Element.Method("getFirstName","String"));
 passengerClass.methods.push(new UML.Classdiagram.Element.Method("setFirstName","Void",[
   new UML.Classdiagram.Element.Arg("firstName","String")
 ]));


let paper1 = new UML.Designer.Paper({
    el: $('#paper'),
    width: 800,
    height: 600
});


paper1.draw(airplaneClass,new UML.Designer.SVGjsClassDraw());
paper1.draw(passengerClass,new UML.Designer.SVGjsClassDraw());


//
// var paper = new joint.dia.Paper({
//     el: $('#paper'),
//     width: 800,
//     height: 600,
//     gridSize: 1,
//     model: graph
// });
//
//
// var uml = joint.shapes.uml;
//
// _.each(classes, function(c) { graph.addCell(c); });
//
// var relations = [
//     new uml.Generalization({ source: { id: classes.man.id }, target: { id: classes.person.id }}),
//     new uml.Generalization({ source: { id: classes.woman.id }, target: { id: classes.person.id }}),
//     new uml.Implementation({ source: { id: classes.person.id }, target: { id: classes.mammal.id }}),
//     new uml.Aggregation({ source: { id: classes.person.id }, target: { id: classes.address.id }}),
//     new uml.Composition({ source: { id: classes.person.id }, target: { id: classes.bloodgroup.id }})
// ];
//
// _.each(relations, function(r) { graph.addCell(r); });



declare const SVG:any;
declare const svgdraggablez:any;

var draw = SVG('drawing').size('100%', '100%')

var group = draw.group().id("ClassDiagramNode_1").addClass("node")


var rect = draw.rect(181, 246).addClass("node_rect").attr({

})

var typeText = draw.text("<<interface>>").attr({
  x:90.640625,
  y:0.203125
}).addClass("node_text node_type")


var nodeName = draw.text("Person").attr({
  x:90.640625,
  y:14.0
}).addClass("node_text node_name")



var separator = draw.line(0, 0, 181, 0).stroke({ color: 'black', width: .1 }).move(0, 100)



var attrs = draw.text(function(add:any) {
  add.tspan('+').addClass("node_visibility").attr({dy:20,x:12})
  add.tspan(' ')
  add.tspan('name').addClass("node_attribute")
  add.tspan(' ')
  add.tspan(':').addClass("node_symbol")
  add.tspan(' ')
  add.tspan('String').addClass("node_datatype")
  add.tspan(' ')
  add.tspan('=').addClass("node_symbol")
  add.tspan(' ')
  add.tspan('"Alex"').addClass("node_value")
  add.tspan('+').addClass("node_visibility").attr({dy:20,x:12})
  add.tspan(' ')
  add.tspan('name').addClass("node_attribute")
  add.tspan(' ')
  add.tspan(':').addClass("node_symbol")
  add.tspan(' ')
  add.tspan('String').addClass("node_datatype")

}).attr({
  x:11,
  y:50
}).addClass("node_text")


var methods = draw.text(function(add:any) {
  add.tspan('+').addClass("node_visibility").attr({dy:20,x:12})
  add.tspan(' ')
  add.tspan('String').addClass("node_datatype")
  add.tspan(' ')
  add.tspan('foo').addClass("node_attribute")
  add.tspan(' (')
  add.tspan(')')
  add.tspan('+').addClass("node_visibility").attr({dy:20,x:12})
  add.tspan(' ')
  add.tspan('String').addClass("node_datatype")
  add.tspan(' ')
  add.tspan('foo').addClass("node_attribute")
  add.tspan(' (')
  add.tspan('name').addClass("node_attribute").attr({dy:20,x:32})
  add.tspan(' ')
  add.tspan(':').addClass("node_symbol")
  add.tspan(' ')
  add.tspan('String').addClass("node_datatype")
  add.tspan(' ')
  add.tspan('=').addClass("node_symbol")
  add.tspan(' ')
  add.tspan('"Alex"').addClass("node_value")
  add.tspan('age').addClass("node_attribute").attr({dy:20,x:32})
  add.tspan(' ')
  add.tspan(':').addClass("node_symbol")
  add.tspan(' ')
  add.tspan('String').addClass("node_datatype")
  add.tspan(' ')
  add.tspan(')').attr({dy:20,x:20})

  add.tspan('+').addClass("node_visibility").attr({dy:20,x:12})
  add.tspan(' ')
  add.tspan('String').addClass("node_datatype")
  add.tspan(' ')
  add.tspan('foo2').addClass("node_attribute")
  add.tspan(' (')
  add.tspan(')')

}).attr({
  x:11,
  y:100,

}).addClass("node_text")



group.add(rect).add(typeText).add(nodeName).add(attrs).add(separator).add(methods)

group.transform({
  x:220,
  y:20
})











// var rect = draw.rect(100, 100).attr({ fill: '#f06' })
