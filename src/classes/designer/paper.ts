import {Drawable} from './drawable';

export class Paper {

  el:string;
  width:string;
  height:string;

  constructor(config:any){
    this.el = config.el;
    this.width = config.width;
    this.height = config.height;
  }

  draw(o:any,drawable:Drawable){
    return drawable.draw(o);
  }


}
