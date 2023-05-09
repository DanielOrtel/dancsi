export class Makako {
  constructor(wedding, config, final) {
    this.wedding = wedding;
    this.width = config.width;
    this.height = config.height;
    this.x = config.position.x;
    this.y = config.position.y;
    this.image = config.image;
    this.sequenceY = config.sequenceY;
    this.sequenceX = config.sequenceX;
    this.animationTiming = wedding.animationTiming;
    this.position = config.position;
    this.frameX = 0;
    this.frameY = 0;
    this.dx = this.position.directionX ? (this.position.directionX === 'right' ? 1800 : -280) : config.position.x;
    this.dy = this.position.directionY ? (this.position.directionY === 'top' ? 700 : -200) : config.position.y;
    this.speed = config.speed || 1;
    this.state = 'static';
    this.final = final;
    this.previousTime = 0; // internal time delta calculation
  }

  setState(state) {
    this.state = state;
    this.frameX = 0;
    this.frameY = this.sequenceY[state];
  }

  updateWalking({ currentTime }) {
    if (currentTime - this.previousTime >= this.animationTiming / 4) {
      if (this.position.directionX === 'right') {
        if (this.dx > this.x) {
          this.movingOnScreen = true;
          this.dx = this.dx - 4;
        } else if (this.movingOnScreen) {
          this.dx = this.x;
          this.movingOnScreen = false;
          this.sequenceX.special ? this.setState('special') : this.setState('idle');
        }
      }

      if (this.position.directionX === 'left') {
        if (this.dx < this.x) {
          this.movingOnScreen = true;
          this.dx = this.dx + 5;
        } else if (this.movingOnScreen) {
          this.dx = this.x;
          this.movingOnScreen = false;
          this.sequenceX.special ? this.setState('special') : this.setState('idle');
        }
      }
    }

    if (currentTime - this.previousTime >= this.animationTiming) {
      if (this.frameX >= this.sequenceX[this.state].length - 1) this.frameX = 0;
      else this.frameX = this.frameX + 1;

      this.previousTime = currentTime;
    }
  }

  drawWalking(context) {
    context.drawImage(
      this.image,
      this.sequenceX[this.state][this.frameX] * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.dx,
      this.dy,
      this.width,
      this.height
    );
  }

  updateFlying({ currentTime }) {
    if (currentTime - this.previousTime >= this.animationTiming / 4) {
      if (this.dx > -200) {
        this.movingOnScreen = true;
        this.dx = this.dx - 8;
      } else if (this.movingOnScreen) {
        this.dx = 2400;
        this.movingOnScreen = false;
        this.setState('idle');
      }
    }

    if (currentTime - this.previousTime >= this.animationTiming) {
      if (this.frameX >= this.sequenceX[this.state].length - 1) this.frameX = 0;
      else this.frameX = this.frameX + 1;

      this.previousTime = currentTime;
    }
  }

  updateFlyingAndStopping({ currentTime }) {
    if (currentTime - this.previousTime >= this.animationTiming / 4) {
      if (this.position.directionX === 'right') {
        if (this.dx > this.x) {
          this.movingOnScreen = true;
          this.dx = this.dx - 8;
        } else if (this.movingOnScreen) {
          this.dx = this.x;
          this.movingOnScreen = false;
          this.setState('idle');
          if (this.final) this.wedding.setOver(true);
        }
      }
      if (this.position.directionX === 'left') {
        if (this.dx < this.x) {
          this.movingOnScreen = true;
          this.dx = this.dx + 8;
        } else if (this.movingOnScreen) {
          this.dx = this.x;
          this.movingOnScreen = false;
          this.setState('idle');
          if (this.final) this.wedding.setOver(true);
        }
      }
    }

    if (currentTime - this.previousTime >= this.animationTiming) {
      if (this.frameX >= this.sequenceX[this.state].length - 1) this.frameX = 0;
      else this.frameX = this.frameX + 1;

      this.previousTime = currentTime;
    }
  }

  drawFlying(context) {
    context.drawImage(
      this.image,
      this.sequenceX[this.state][this.frameX] * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.dx,
      this.dy,
      this.width,
      this.height
    );
  }

  updateRising({ currentTime }) {
    console.log(this.frameX, this.frameY, this.dy, this.dx);
    if (currentTime - this.previousTime >= this.animationTiming / 4) {
      if (this.dy > this.y) {
        this.movingOnScreen = true;
        this.dy = this.dy - 5;
      } else if (this.movingOnScreen) {
        this.dy = this.y;
        this.movingOnScreen = false;
        this.setState('idle');
      }
    }
  }

  drawRising(context) {
    context.drawImage(
      this.image,
      this.sequenceX[this.state][this.frameX] * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.dx,
      this.dy,
      this.width,
      this.height
    );
  }

  updateSpecial({ currentTime }) {
    if (currentTime - this.previousTime >= this.animationTiming) {
      if (this.frameX >= this.sequenceX[this.state].length - 1) this.setState('idle');
      else this.frameX = this.frameX + 1;

      this.previousTime = currentTime;
    }
  }

  drawSpecial(context) {
    context.drawImage(
      this.image,
      this.sequenceX[this.state][this.frameX] * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.dx,
      this.dy,
      this.width,
      this.height
    );
  }

  updateIdle({ currentTime }) {
    if (currentTime - this.previousTime >= this.animationTiming) {
      if (this.frameX >= this.sequenceX[this.state].length - 1) this.frameX = 0;
      else this.frameX = this.frameX + 1;

      this.previousTime = currentTime;
    }
  }

  drawIdle(context) {
    context.drawImage(
      this.image,
      this.sequenceX[this.state][this.frameX] * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.dx,
      this.dy,
      this.width,
      this.height
    );
  }

  update({ deltaTime, currentTime }) {
    switch (this.state) {
      case 'hidden':
        return;
      case 'walking':
        return this.updateWalking({ currentTime });
      case 'flying':
        return this.updateFlying({ currentTime });
      case 'flyingAndStopping':
        return this.updateFlyingAndStopping({ currentTime });
      case 'rising':
        return this.updateRising({ currentTime });
      case 'idle':
        return this.updateIdle({ currentTime });
      case 'special':
        return this.updateSpecial({ currentTime });
      default:
        return;
    }
  }

  draw(context) {
    switch (this.state) {
      case 'hidden':
        return;
      case 'walking':
        return this.drawWalking(context);
      case 'flying':
        return this.drawFlying(context);
      case 'flyingAndStopping':
        return this.drawFlying(context);
      case 'rising':
        return this.drawRising(context);
      case 'idle':
        return this.drawIdle(context);
      case 'special':
        return this.drawSpecial(context);
      default:
        return;
    }
  }
}

export default function makakos(wedding, config) {
  const noncsim = new Makako(wedding, config.makakos.noncsim);
  const danim = new Makako(wedding, config.makakos.danim);
  const madar = new Makako(wedding, config.makakos.madar, true);

  const nap = new Makako(wedding, config.sky.nap);
  const felhoNagy = new Makako(wedding, config.sky.felhoNagy);
  const felhoKicsi = new Makako(wedding, config.sky.felhoKicsi);

  return {
    noncsim,
    danim,
    madar,
    nap,
    felhoNagy,
    felhoKicsi
  };
}
