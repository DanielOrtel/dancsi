import React, { useEffect, useRef } from 'react';

export class Background {
  constructor(wedding, layers, sky) {
    this.wedding = wedding;
    this.width = wedding.width;
    this.height = wedding.height;
    this.layers = [sky, layers.one, layers.two, layers.three, layers.four];
  }

  update({ currentTime, deltaTime }) {
    this.layers.forEach((layer) => {
      layer.update({ currentTime, deltaTime });
    });
  }
  draw(context) {
    this.layers.forEach((layer) => {
      layer.draw(context);
    });
  }
}

export default function background(wedding, layers, sky) {
  return new Background(wedding, layers, sky);
}
