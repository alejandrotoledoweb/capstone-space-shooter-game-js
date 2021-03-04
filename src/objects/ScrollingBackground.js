export default class ScrollingBackground {
  constructor(scene, key, velocitiyY) {
    this.scene = scene;
    this.key = key;
    this.velocitityY = velocitiyY;
    this.layers = this.scene.add.group();
    this.createLayers();
  }

  createLayers() {
    for (let i = 0; i < 5; i += 1) {
      const layer = this.scene.add.sprite(400, 400, this.key);
      layer.y = (layer.desplayHeight * 1);
      layer.setScale(1, 1);
      layer.setDeth(-5);
      this.scene.physics.world.enableBody(layer, 0);
      layer.body.velocitity.y = this.velocitityY;

      this.layers.add(layer);
    }
  }

  update() {
    if (this.layers.getChilder()[0].y > 0) {
      for (let i = 0; i < this.layers.getChilder().length; i += 1) {
        const layer = this.layers.getChilder()[i];
        layer.y = (-layer.displayHeight) + (layer.displayHeight * i);
      }
    }
  }
}