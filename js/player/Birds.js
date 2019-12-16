import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";

//小鸟类
export class Birds extends Sprite{
constructor(){
    
    const img = Sprite.getImage("birds");
    // console.log(img+"执行");
    super(img,0,0,img.width,img.height,0,0,img.width,img.height);
//小鸟的宽34 高24.上下边距10.左右边距9
//裁剪的X坐标
this.clippngX = [9,9+34+18,9+34+18+34+18];
//裁剪Y坐标
this.clippngY = [10,10,10];
//裁剪的宽高
this.clippngwidth = [34,34,34];
this.clippngheight = [24,24,24];
//小鸟的坐标
const canvas = DataStore.getInstance().canvas;
const birdsX = canvas.width/4;
this.birdsX = [birdsX,birdsX,birdsX];
const land = Sprite.getImage("land");
const birdsY = (canvas.height-land.height)/2;
this.birdsY = [birdsY,birdsY,birdsY];
//每只小鸟的宽高
this.birdswidth = [34,34,34];
this.birdsheight = [24,24,24];
//小鸟的实时y的坐标
this.y = [birdsY,birdsY,birdsY];
this.index = 0;//切换小鸟，实现动态效果
this.count = 0;//计时器
this.time = 0;//计时器。自由落体事件
}
draw(){
   this.count +=0.1;
   if(this.index>=2){
       this.count = 0;
   }
   this.index = Math.floor(this.count);
   const g = 0.98/2.4;//模拟的重力加速度
   const offSetUp = 30;//向上的偏移量
   const offSetY = (g*this.time*(this.time-offSetUp))/2;
   for(let i=0;i<3;i++){
       this.birdsY[i] = this.y[i]+ offSetY;
   }
   this.time++;

    super.draw(this.img,
        this.clippngX[this.index],
        this.clippngY[this.index],
        this.clippngwidth[this.index],
        this.clippngheight[this.index],
        this.birdsX[this.index],
        this.birdsY[this.index],
        this.birdswidth[this.index],
        this.birdsheight[this.index],
        );
    }
}