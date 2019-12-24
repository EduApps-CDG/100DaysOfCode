import 'phaser';

import { Global } from './global';
import { LoadingScene } from './scene/loading';
import { MainMenuScene } from './scene/mainmenu';

const gameConfig = {
  width: Global.screen.WIDTH,
  height: Global.screen.HEIGHT,
};

const game = new Phaser.Game(gameConfig);
Global.game = game;
game.scene.add("loading", new LoadingScene());
game.scene.add("main-menu", new MainMenuScene());

game.scene.start("loading");