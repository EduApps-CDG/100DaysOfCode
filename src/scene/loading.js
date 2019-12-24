import { Global } from '../global';

export class LoadingScene extends Phaser.Scene {
  constructor() {
    super({
      key: "loading",
    });
  }

  superload(name,src) {
  	this.load.image(name, src);
  	for (var i = 0; i < 500; i++) {
  		this.load.image(name + i, src);
    }
  }
  
  preload() {
  	console.info('LoadingScene.preload()');
    this.cameras.main.setBackgroundColor(0x000000);
    
    
    this.load.image("logo","assets/eduapps.png");
    this.load.image("bg/land","assets/background/land.png");
    this.load.image("bg/cave","assets/background/cave.png");
    this.load.image("bg/animated","assets/background/animated.png");
    this.load.image("mario","assets/entity/mario.png");
    
    
    const progressBox = this.add.graphics();
    const progressBar = this.add.graphics();
    const text = this.add.text(25,(Global.screen.HEIGHT / 2) +53, "LOADING: /", { fontSize:"14px", fill:"#FFFFFF"});
    progressBox.fillStyle(0x333333, 0.8);
    progressBox.fillRect(20, (Global.screen.HEIGHT / 2) + 50, Global.screen.WIDTH - 40, 20);


    this.load.on("progress", function(value) {
      progressBar.clear();
      progressBar.fillStyle(0xCC0000, 1);
      progressBar.fillRect(25, (Global.screen.HEIGHT / 2) + 55, (Global.screen.WIDTH - 50) * value, 10);
    });

    this.load.on("fileprogress", function(file) {
      text.setText("LOADING: @DAT:/" + file.src)
    });

    this.load.on("complete", function(file) {
        progressBar.destroy();
        progressBox.destroy();
    });
  }

  create() {
  	console.info("LoadingScene.create()");
  	
    this.cameras.main.setBackgroundColor(0xFFFFFF);
    const logo = this.add.sprite(Global.screen.WIDTH / 2, Global.screen.HEIGHT / 2, "logo");
    logo.displayWidth = 50;
    logo.displayHeight = 50;
    
    this.time.addEvent({delay:3000, callback: function() {
    	Global.game.scene.start("main-menu");
    }, loop:false});
  }

}