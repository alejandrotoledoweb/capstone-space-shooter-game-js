/* eslint-disable no-unused-expressions */
import Phaser from 'phaser';
import ButtonGen from '../objects/ButtonGen';
import config from '../config/config';

export default class StoryScene extends Phaser.Scene {
  constructor() {
    super('StoryScene');
  }

  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.gameMusic = this.sound.add('gameMusic', { volume: 0.5, loop: true });
    this.gameMusic.play();
    const textSource = 'Over the years the aliens\ntried to conquer the planet earth\n.\nOne soldier was the last \nstanding and fight against\n He fight endless fights to recover \nthe domain of the earth.';
    const wordCount = textSource.split(' ').length;
    const text = this.add.text(400, 400, '', {
      fontFamily: 'Retro Team',
      fontSize: '36px',
      fontStyle: 'normal',
      color: '#005784',
      wordWrap: true,
      wordWrapWidth: 400,
      align: 'center',
    }).setOrigin(0.5, 0.5);

    this.sfx = {
      btnHover: this.sound.add('buttonHover', { volume: 0.5 }),
      btnSelect: this.sound.add('buttonSelect', { volume: 0.5 }),
    };

    this.skipButton = new ButtonGen(this, config.width / 2, config.height / 2 + 200, 'skipButton', 'skipButtonFocus', 'Game', this.sfx.btnHover, this.sfx.btnSelect);

    this.tweens.addCounter({
      from: 0,
      to: wordCount,
      ease: (v) => Phaser.Math.Easing.Stepped(v, wordCount),
      onUpdate: (_, { value }) => {
        text.setText(textSource.split(' ').slice(0, value).join(' '));
      },

      onComplete: () => {
        setTimeout(() => {
          this.destroy;
          this.cameras.main.fadeIn(1000, 0, 0);
          this.tweens.addCounter({
            from: 0,
            to: wordCount,
            ease: (v) => Phaser.Math.Easing.Stepped(v, wordCount),
            onUpdate: (_, { value }) => {
              // eslint-disable-next-line no-undef
              text.setText(textSource2.split(' ').slice(0, value).join(' '));
            },

            onComplete: () => {
              setTimeout(() => {
                this.cameras.main.fadeOut(1000, 0, 0, 0);
                this.destroy;
                this.cameras.main.fadeIn(1000, 0, 0);
                this.tweens.addCounter({
                  from: 0,
                  to: wordCount,
                  ease: (v) => Phaser.Math.Easing.Stepped(v, wordCount),
                  onUpdate: (_, { value }) => {
                    // eslint-disable-next-line no-undef
                    text.setText(textSource3.split(' ').slice(0, value).join(' '));
                  },
                  onComplete: () => {
                    setTimeout(() => {
                      this.cameras.main.fadeOut(1000, 0, 0, 0);
                      this.destroy;
                      this.cameras.main.once(
                        Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
                          this.time.delayedCall(3000, () => {
                            this.scene.start('Game');
                          });
                        },
                      );
                    }, 15000);
                  },
                });
              }, 20000);
            },
          });
        }, 20000);
      },
    });
  }
}
