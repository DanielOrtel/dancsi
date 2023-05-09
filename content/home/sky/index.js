class Sky {
  constructor(wedding, config, elements = [], makakos = []) {
    this.wedding = wedding;
    this.width = config.width;
    this.height = config.height;
    this.image = config.image;
    this.elements = elements;
    this.makakos = makakos;
    this.x = 0;
    this.y = 0;
    this.aspect = this.width / this.height;
    this.state = 'loading';
    this.animationTiming = wedding.animationTiming;
  }

  setState(state) {
    this.state = state;
  }

  update({ currentTime, deltaTime }) {
    this.makakos.forEach((element) => {
      element.update({ currentTime, deltaTime });
    });
  }

  draw(context) {
    for (let i = 0; i < this.makakos.length; i++) {
      this.makakos[i].draw(context);
    }
  }
}

export default function sky(wedding, config, elements, makakos) {
  return new Sky(wedding, config.layers.zero, [], [makakos.felhoKicsi, makakos.felhoNagy, makakos.nap]);
}
