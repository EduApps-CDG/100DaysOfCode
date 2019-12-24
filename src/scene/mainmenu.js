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
  }
}