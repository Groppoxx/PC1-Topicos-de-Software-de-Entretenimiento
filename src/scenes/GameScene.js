import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    const { width, height } = this.scale;

    this.add.image(0, 0, 'backyard').setOrigin(0, 0).setDisplaySize(width, height);

    this.keys = ['apple', 'candy', 'rubber_duck'];
    this.items = [];

    this.spawnEvent = this.time.addEvent({
      delay: 900,
      loop: true,
      callback: () => this.spawnRandomItem()
    });

    this.music = this.sound.add('music', { loop: true, volume: 0.2 });
    this.music.play();
  }

  update() {
    const { width, height } = this.scale;

    for (const item of this.items) {
      item.x += item.dx;
      item.y += item.dy;

      const halfW = item.displayWidth * 0.5;
      if (item.x - halfW <= 0 || item.x + halfW >= width) {
        item.dx *= -1;
        item.x = Phaser.Math.Clamp(item.x, halfW, width - halfW);
      }

      const halfH = item.displayHeight * 0.5;
      if (item.y - halfH <= 0 || item.y + halfH >= height) {
        item.dy *= -1;
        item.y = Phaser.Math.Clamp(item.y, halfH, height - halfH);
      }
    }
  }

  spawnRandomItem() {
    const { width, height } = this.scale;

    const key = Phaser.Utils.Array.GetRandom(this.keys);

    const x = Phaser.Math.Between(40, width - 40);
    const y = Phaser.Math.Between(40, height - 40);

    const sprite = this.add.sprite(x, y, key).setInteractive({ useHandCursor: true });

    const speed = () => (Phaser.Math.Between(0, 1) === 0 ? -1 : 1) * Phaser.Math.Between(1, 2);
    sprite.dx = speed();
    sprite.dy = speed();

    sprite.on('pointerdown', () => {
      this.items = this.items.filter(s => s !== sprite);
      sprite.destroy();
    });

    this.items.push(sprite);
  }
}

export default GameScene;
