import {Drawable} from './drawable';


export class SVGjsClassDraw implements Drawable{
  draw = (o:any) : string => {
        return o;
  }
}
