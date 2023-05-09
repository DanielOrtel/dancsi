import React from 'react';

class Element {
  constructor(wedding, config, canvasX, canvasY, name, isPhone) {
    this.wedding = wedding;
    this.image = config.image;
    this.width = config.width;
    this.height = config.height;
    this.name = name;
    this.animationTiming = wedding.animationTiming;
    this.frameNr = config.length;
    this.canvasX = canvasX;
    this.canvasY = canvasY;
    this.sequence = config.sequence;
    this.fastLoading = config.fast || false;
    this.slowLoading = config.slow || false;
    this.frame = 0;
    this.frameX = 0;
    this.frameY = 0;
    this.scaleX = 0;
    this.scaleY = 0;
    this.aspect = this.width / this.height;
    this.previousTime = 0; // internal time delta calculation
    this.state = 'hidden';
    this.visible = false;
    this.disableLoading = config.disableLoading || false;
    this.isPhone = isPhone;
  }

  setState(state) {
    this.state = state;
  }

  updateLoading({ currentTime }) {
    if (this.disableLoading) this.state = 'dancing';

    if (currentTime - this.previousTime > this.animationTiming / 4) {
      if (this.scaleX >= this.width && this.scaleY >= this.height) this.state = 'dancing';
      else {
        const multiplier = this.fastLoading ? 48 : this.slowLoading ? 4 : 16;
        this.scaleX = this.scaleX + multiplier * this.aspect < this.width ? this.scaleX + multiplier * this.aspect : this.width;
        this.scaleY = this.scaleY + multiplier * this.aspect < this.height ? this.scaleY + multiplier * this.aspect : this.height;
      }
      this.updateDancing({ currentTime });
    }
  }

  loading(context, dx, dy) {
    context.drawImage(
      this.image,
      this.sequence.length ? this.width * this.sequence[this.frameX] : 0,
      this.frameY,
      this.width,
      this.height,
      this.canvasX + this.width / 2 - this.scaleX / 2 - dx,
      this.canvasY + this.height - this.scaleY - dy,
      this.scaleX,
      this.scaleY
    );
  }

  updateDancing({ currentTime }) {
    if (!this.sequence.length) {
      return;
    }

    if (currentTime - this.previousTime > this.animationTiming) {
      if (this.frameX >= this.sequence.length - 1) this.frameX = 0;
      else this.frameX = this.frameX + 1;

      this.previousTime = currentTime;
    }
  }

  updateVisibility(dx) {
    const marginUp = this.isPhone ? -500 : -200;
    const marginDown = this.isPhone ? 100 : -200;

    if (dx < 0) {
      const lower = this.wedding.width * 2 - Math.abs(dx) + marginDown;
      const higher = this.wedding.width - Math.abs(dx) + marginUp;

      this.visible = (this.canvasX > lower && this.canvasX < this.wedding.width * 2) || (this.canvasX > 0 && this.canvasX < higher);
    } else {
      this.visible = this.canvasX - Math.abs(dx) > 0 + marginDown && this.canvasX - Math.abs(dx) < this.wedding.width + marginUp;
    }
  }

  dancing(context, dx, dy) {
    context.drawImage(
      this.image,
      this.sequence.length ? this.width * this.sequence[this.frameX] : 0,
      this.frameY,
      this.width,
      this.height,
      this.canvasX - dx,
      this.canvasY - dy,
      this.width,
      this.height
    );
  }

  update({ dx, currentTime }) {
    if (this.disableLoading) this.state = 'dancing';
    this.updateVisibility(dx);

    switch (this.state) {
      case 'hidden':
        return;
      case 'loading':
        return this.updateLoading({ currentTime });
      case 'dancing':
        return this.updateDancing({ currentTime });
      default:
        return;
    }
  }

  draw(context, dx, dy) {
    switch (this.state) {
      case 'hidden':
        return null;
      case 'loading':
        return this.loading(context, dx, dy);
      case 'dancing':
        return this.dancing(context, dx, dy);
      default:
        return;
    }
  }
}

export default function elements(wedding, config, isPhone) {
  const fenyo = new Element(wedding, config.elements.fenyo, 1100, 180, 'fenyo', isPhone);
  const pafrany = new Element(wedding, config.elements.pafrany, 1800, 450, 'pafrany', isPhone);
  const lilabokor = new Element(wedding, config.elements.lilabokor, 1340, 450, 'lilabokor', isPhone);
  const zoldbokor = new Element(wedding, config.elements.zoldbokor, 1000, 460, 'zoldbokor', isPhone);
  const kekBokor = new Element(wedding, config.elements.kekBokor, 2300, 420, 'kekBokor', isPhone);
  const sargaVirag = new Element(wedding, config.elements.sargaVirag, 2600, 600, 'sargaVirag', isPhone);
  const nagyLilaVirag = new Element(wedding, config.elements.nagyLilaVirag, 2020, 150, 'nagyLilaVirag', isPhone);
  // static
  const aproLilaBal = new Element(wedding, config.elements.aproLilaBal, 1480, 700, 'aproLilaBal', isPhone); // todo?
  const zoldLevelBal = new Element(wedding, config.elements.zoldLevelBal, 1000, 800, 'zoldLevelBal', isPhone);
  const fuszalakBal = new Element(wedding, config.elements.fuszalakBal, 1400, 840, 'fuszalakBal', isPhone);
  const kisFenyo = new Element(wedding, config.elements.kisFenyo, 1000, 290, 'kisFenyo', isPhone); // todo?
  const kisKekFaBal = new Element(wedding, config.elements.kisKekFaBal, 1440, 320, 'kisKekFaBal', isPhone);
  const kisKekFaBal2 = new Element(wedding, config.elements.kisKekFaBal2, 1340, 340, 'kisKekFaBal2', isPhone);
  const kisKekFaJobb = new Element(wedding, config.elements.kisKekFaJobb, 2500, 224, 'kisKekFaJobb', isPhone);
  const kisKekViragBal = new Element(wedding, config.elements.kisKekViragBal, 1220, 580, 'kisKekViragBal', isPhone);
  const kekLevel = new Element(wedding, config.elements.kekLevel, 2200, 840, 'kekLevel', isPhone);
  const kekLevel2 = new Element(wedding, config.elements.kekLevel2, 2280, 820, 'kekLevel2', isPhone);
  const lilaHegy = new Element(wedding, config.elements.lilaHegy, 1000, 500, 'lilaHegy', isPhone);
  const rokaGomba = new Element(wedding, config.elements.rokaGomba, 2500, 600, 'rokaGomba', isPhone); // todo?
  const zoldPafrany = new Element(wedding, config.elements.zoldPafrany, 2500, 840, 'zoldPafrany', isPhone);
  // image2
  const fenyo2 = new Element(wedding, config.elements.fenyo, 3160, 100, 'fenyo2', isPhone);
  const fenyo3 = new Element(wedding, config.elements.fenyo, 3360, 180, 'fenyo3', isPhone);
  const pafrany2 = new Element(wedding, config.elements.pafrany, 3520, 550, 'pafrany2', isPhone);
  const lilabokor2 = new Element(wedding, config.elements.lilabokor, 3760, 500, 'lilabokor2', isPhone);
  const zoldbokor2 = new Element(wedding, config.elements.zoldbokor, 3160, 460, 'zoldbokor2', isPhone);
  const kekBokor2 = new Element(wedding, config.elements.kekBokor, 400, 500, 'kekBokor2', isPhone);
  const sargaVirag2 = new Element(wedding, config.elements.sargaVirag, 3060, 650, 'sargaVirag2', isPhone);
  const sargaVirag3 = new Element(wedding, config.elements.sargaVirag, 800, 600, 'sargaVirag3', isPhone);
  const zoldLevelBal2 = new Element(wedding, config.elements.zoldLevelBal, 3060, 720, 'zoldLevelBal2', isPhone);
  const kisKekFaBal3 = new Element(wedding, config.elements.kisKekFaBal, 200, 680, 'kisKekFaBal3', isPhone);
  const kisKekFaBal4 = new Element(wedding, config.elements.kisKekFaBal2, 300, 690, 'kisKekFaBal4', isPhone);
  const kisKekFaJobb2 = new Element(wedding, config.elements.kisKekFaJobb, 600, 280, 'kisKekFaJobb2', isPhone);
  const kisKekViragBal2 = new Element(wedding, config.elements.kisKekViragBal, 900, 780, 'kisKekViragBal2', isPhone);
  const zoldPafrany2 = new Element(wedding, config.elements.zoldPafrany, 600, 740, 'zoldPafrany2', isPhone);
  const jobbDomb = new Element(wedding, config.elements.jobbDomb, 2400, 280, isPhone);

  return {
    // image1
    fenyo,
    pafrany,
    lilabokor,
    zoldbokor,
    kekBokor,
    sargaVirag,
    nagyLilaVirag,
    //static
    aproLilaBal,
    zoldLevelBal,
    fuszalakBal,
    kisFenyo,
    kisKekFaBal,
    kisKekFaBal2,
    kisKekFaJobb,
    kisKekViragBal,
    kekLevel,
    kekLevel2,
    lilaHegy,
    rokaGomba,
    jobbDomb,
    zoldPafrany,
    // image2
    fenyo2,
    fenyo3,
    pafrany2,
    kekBokor2,
    zoldbokor2,
    lilabokor2,
    sargaVirag2,
    sargaVirag3,
    //static
    zoldLevelBal2,
    kisKekFaBal3,
    kisKekFaBal4,
    kisKekFaJobb2,
    kisKekViragBal2,
    zoldPafrany2
  };
}
