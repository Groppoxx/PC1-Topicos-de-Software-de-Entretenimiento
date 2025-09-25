import Phaser from 'phaser';

class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    const { width, height } = this.scale;

    this.add.image(0, 0, 'backyard').setOrigin(0, 0).setDisplaySize(width, height);

    const logo = this.add.image(width * 0.5, height * 0.60, 'logo');
    logo.setScale(Math.min(width / 300, height / 200));

    const title = this.add.text(width / 2, height * 0.15, 'BIENVENIDA\n\t\tCiberDuck', {
      fontFamily: 'Arial',
      fontSize: '40px',
      color: '#000000'
    });
    title.setOrigin(0.5, 0.5);

    this.input.once('pointerdown', () => {
      this.scene.start('GameScene');
    });
  }
}

export default MenuScene;
