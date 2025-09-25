import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.image('backyard', 'assets/images/backyard.png');
    this.load.image('apple', 'assets/images/apple.png');
    this.load.image('candy', 'assets/images/candy.png');
    this.load.image('rubber_duck', 'assets/images/rubber_duck.png');
    this.load.image('logo', 'assets/images/ciberduck.png');
    this.load.audio('music', 'assets/audio/sinnesloschen.ogg');
  }

  create() {
    this.scene.start('MenuScene');
  }
}

export default PreloadScene;
