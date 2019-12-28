import { Global } from '../global';

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: "main-menu",
    });
  }
  
  preload() {
  	console.info("MainMenuScene.preload()");
  }
  
  create() {
  	console.info("MainMenuScene.create()");
  	this.cameras.main.setBackgroundColor(0x000000);
  	
  	const bg = this.add﻿.sprite(0, 0,﻿ 'bg/cave')﻿;
  	bg.offset.x = 0;
  	bgoffset.y = 0;
  	bg.body.offset.width = 50;
  	bg.body.offset.height = 26;
  }
}