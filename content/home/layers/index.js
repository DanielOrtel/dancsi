class Layer {
  constructor(wedding, config, start, elements, makakos = [], makakoPos = elements.length, last = false) {
    this.wedding = wedding;
    this.width = config.width;
    this.height = config.height;
    this.speedModifier = config.speed;
    this.image = config.image;
    this.elements = elements;
    this.makakos = makakos;
    this.x = start || this.width / 2; //-180; // starting X
    this.y = 0;
    this.scaleX = this.width * 1.55;
    this.scaleY = this.height * 2;
    this.offsetY = this.height;
    this.aspect = this.width / this.height;
    this.makakoPos = makakoPos;
    this.state = 'loading';
    this.animationTiming = wedding.animationTiming;
    this.previousTime = 0;
    this.cycleComplete = false;
    this.last = last;
  }

  setState(state) {
    this.state = state;
  }

  updateLoading({ currentTime, deltaTime }) {
    if (currentTime - this.previousTime > this.animationTiming / 50) {
      if (this.scaleX <= this.width && this.scaleY <= this.height && this.offsetY >= this.height) this.state = 'moving';
      else {
        this.scaleX = this.scaleX - 16 * this.aspect > this.width ? this.scaleX - 16 * this.aspect : this.width;
        this.scaleY = this.scaleY - 16 * this.aspect > this.height ? this.scaleY - 16 * this.aspect : this.height;
        this.offsetY = this.offsetY - 32 > 0 ? this.offsetY - 32 : 0;
      }

      this.previousTime = currentTime;
    }

    this.elements.forEach((element) => {
      element.update({ currentTime, deltaTime, dx: this.x });
    });
  }

  drawLoading(context) {
    context.drawImage(
      this.image,
      this.x,
      this.y,
      this.width,
      this.height,
      this.width / 2 - this.scaleX / 2,
      this.offsetY,
      this.scaleX,
      this.scaleY
    );
    context.drawImage(
      this.image,
      this.x + this.width * 2,
      this.y,
      this.width,
      this.height,
      this.width / 2 - this.scaleX / 2,
      this.offsetY,
      this.scaleX,
      this.scaleY
    );

    this.elements.forEach((element) => {
      element.draw(context, this.x, this.offsetY);
    });
  }

  updateMoving({ currentTime, deltaTime }) {
    if (this.cycleComplete && this.x <= this.width / 2) {
      this.setState('static');
      if (this.makakos?.length) {
        this.makakos[0].setState('idle');
        this.makakos[1].setState('walking');
        this.makakos[2].setState('flyingAndStopping');
      }
    }

    if (this.x < -this.width) {
      this.x = this.width;
      this.cycleComplete = true;
    } else {
      this.x -= Math.ceil(this.wedding.speed * this.speedModifier);
    }

    this.makakos.forEach((element) => {
      element.update({ currentTime, deltaTime, dx: this.x });
    });
    this.elements.forEach((element) => {
      element.update({ currentTime, deltaTime, dx: this.x });
    });
  }

  drawMoving(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
    context.drawImage(this.image, this.x + this.width * 2, this.y, this.width, this.height, 0, 0, this.width, this.height);
    for (let i = 0; i < this.makakoPos; i++) {
      this.elements[i].draw(context, this.x, this.y);
    }
    for (let i = 0; i < this.makakoPos; i++) {
      this.elements[i].draw(context, this.x + this.width * 2, this.y);
    }
    this.makakos.forEach((makako) => {
      makako.draw(context, this.x, this.y);
    });
    for (let i = this.makakoPos; i < this.elements.length; i++) {
      this.elements[i].draw(context, this.x, this.y);
    }
    for (let i = this.makakoPos; i < this.elements.length; i++) {
      this.elements[i].draw(context, this.x + this.width * 2, this.y);
    }
    // sprite, frame * width, 0, width, height, 0, 0, width, height
  }

  updateStatic({ currentTime, deltaTime }) {
    this.makakos.forEach((element) => {
      element.update({ currentTime, deltaTime, dx: this.x });
    });
    this.elements.forEach((element) => {
      element.update({ currentTime, deltaTime, dx: this.x });
    });
  }

  drawStatic(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
    context.drawImage(this.image, this.x + this.width * 2, this.y, this.width, this.height, 0, 0, this.width, this.height);
    for (let i = 0; i < this.makakoPos; i++) {
      this.elements[i].draw(context, this.x, this.y);
    }
    for (let i = 0; i < this.makakoPos; i++) {
      this.elements[i].draw(context, this.x + this.width * 2, this.y);
    }
    this.makakos.forEach((makako) => {
      makako.draw(context, this.x, this.y);
    });
    for (let i = this.makakoPos; i < this.elements.length; i++) {
      this.elements[i].draw(context, this.x, this.y);
    }
    for (let i = this.makakoPos; i < this.elements.length; i++) {
      this.elements[i].draw(context, this.x + this.width * 2, this.y);
    }
    // sprite, frame * width, 0, width, height, 0, 0, width, height
  }

  update({ currentTime, deltaTime }) {
    switch (this.state) {
      case 'hidden':
        return;
      case 'loading':
        return this.updateLoading({ currentTime, deltaTime });
      case 'moving':
        return this.updateMoving({ currentTime, deltaTime });
      case 'static':
        return this.updateStatic({ currentTime, deltaTime });
      default:
        return;
    }
  }

  draw(context, dx, dy) {
    switch (this.state) {
      case 'hidden':
        return;
      case 'loading':
        return this.drawLoading(context, dx, dy);
      case 'moving':
        return this.drawMoving(context, dx, dy);
      case 'static':
        return this.drawStatic(context, dx, dy);
      default:
        return;
    }
  }
}

export default function layers(wedding, config, elements, makakos) {
  const one = new Layer(wedding, config.layers.one, -1800, [], [], 0, true);
  const two = new Layer(wedding, config.layers.two, -700, []);
  const three = new Layer(wedding, config.layers.three, -380, [
    elements.kisKekFaJobb2,
    elements.lilaHegy,
    elements.kisFenyo,
    elements.kisKekFaBal,
    elements.kisKekFaBal2
  ]);
  const four = new Layer(
    wedding,
    config.layers.four,
    -280,
    [
      elements.fenyo,
      elements.fenyo2,
      elements.fenyo3,
      elements.pafrany2,
      elements.kekBokor2,
      elements.zoldbokor2,
      elements.lilabokor2,
      elements.sargaVirag2,
      elements.sargaVirag3,
      elements.kisKekViragBal,
      elements.nagyLilaVirag,
      elements.sargaVirag,
      elements.pafrany,
      elements.rokaGomba,
      elements.kekBokor,
      elements.zoldbokor,
      elements.lilabokor,
      elements.kisKekFaBal3,
      elements.kisKekFaBal4,
      elements.aproLilaBal,
      elements.zoldLevelBal2,
      elements.kisKekViragBal2,
      elements.zoldPafrany2,
      elements.kisKekFaJobb,
      elements.zoldLevelBal,
      elements.fuszalakBal,
      elements.kekLevel,
      elements.kekLevel2,
      elements.zoldPafrany
    ],
    [makakos.noncsim, makakos.danim, makakos.madar],
    20
  );

  return {
    one,
    two,
    three,
    four
  };
}
