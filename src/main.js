import Phaser from 'phaser';
import PreloadScene from './scenes/PreloadScene.js';
import MenuScene from './scenes/MenuScene.js';
import GameScene from './scenes/GameScene.js';

const config = {
  type: Phaser.AUTO,
  width: 360,
  height: 460,
  scene: [PreloadScene, MenuScene, GameScene]
};

new Phaser.Game(config);
