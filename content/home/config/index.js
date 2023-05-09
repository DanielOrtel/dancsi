export const animationElements = (layers, elements, sky, makakos) => ({
  layers: {
    zero: {
      width: 1920,
      height: 1080,
      image: undefined,
      speed: 0
    },
    one: {
      width: 1920,
      height: 1080,
      image: layers[0],
      speed: 0.2
    },
    two: {
      width: 1920,
      height: 1080,
      image: layers[1],
      speed: 0.25
    },
    three: {
      width: 1920,
      height: 1080,
      image: layers[2],
      speed: 0.3
    },
    four: {
      width: 1920,
      height: 1080,
      image: layers[3],
      speed: 0.4
    }
  },
  sky: {
    nap: {
      sequenceY: {
        idle: 0,
        rising: 0
      },
      sequenceX: {
        idle: [0],
        rising: [0]
      },
      position: {
        x: 790,
        y: 100,
        directionY: 'top'
      },
      width: 146,
      height: 144,
      image: sky[0],
      slow: true
    },
    felhoNagy: {
      width: 348,
      height: 84,
      sequence: [],
      image: sky[1],
      slow: true,
      sequenceY: {
        idle: 0,
        flyingAndStopping: 0
      },
      sequenceX: {
        idle: [0],
        flyingAndStopping: [0]
      },
      position: {
        x: 1200,
        y: 180,
        directionX: 'right'
      }
    },
    felhoKicsi: {
      width: 283,
      height: 71,
      sequence: [],
      image: sky[2],
      sequenceY: {
        idle: 0,
        flyingAndStopping: 0
      },
      sequenceX: {
        idle: [0],
        flyingAndStopping: [0]
      },
      position: {
        x: 300,
        y: 70,
        directionX: 'left'
      },
      slow: true
    }
  },
  elements: {
    fenyo: {
      width: 348,
      height: 589,
      sequence: [0, 0, 1, 2, 3, 3, 2, 3, 2, 1, 1, 0],
      image: elements[0],
      fast: true
    },
    pafrany: {
      width: 341,
      height: 316,
      sequence: [0, 1, 2, 2, 1, 2, 1, 0],
      image: elements[1]
    },
    lilabokor: {
      width: 380,
      height: 385,
      sequence: [0, 1, 2, 2, 1, 1, 0],
      image: elements[2]
    },
    zoldbokor: {
      width: 302,
      height: 297,
      sequence: [0, 1, 2, 3, 2, 3, 3, 3, 2, 1, 1, 0],
      image: elements[3]
    },
    kekBokor: {
      width: 482,
      height: 424,
      sequence: [0, 0, 1, 2, 3, 3, 2, 1, 1, 0, 0],
      image: elements[4]
    },
    sargaVirag: {
      width: 198,
      height: 220,
      sequence: [0, 1, 2, 1, 0],
      image: elements[5]
    },
    nagyLilaVirag: {
      width: 536,
      height: 620,
      sequence: [0, 1, 1, 0, 1, 2, 2, 3, 3, 2, 2, 3, 2, 1, 1, 0, 0, 0],
      image: elements[6],
      fast: true
    },
    aproLilaBal: {
      width: 304,
      height: 190,
      sequence: [],
      image: elements[7]
    },
    zoldLevelBal: {
      width: 483,
      height: 304,
      sequence: [],
      image: elements[8]
    },
    fuszalakBal: {
      width: 481,
      height: 253,
      sequence: [],
      image: elements[9]
    },
    kisFenyo: {
      width: 282,
      height: 175,
      sequence: [],
      image: elements[10]
    },
    kisKekFaBal: {
      width: 272,
      height: 185,
      sequence: [],
      image: elements[11]
    },
    kisKekFaBal2: {
      width: 250,
      height: 212,
      sequence: [],
      image: elements[12]
    },
    kisKekFaJobb: {
      width: 232,
      height: 280,
      sequence: [],
      image: elements[13]
    },
    kisKekViragBal: {
      width: 355,
      height: 229,
      sequence: [],
      image: elements[14]
    },
    kekLevel: {
      width: 231,
      height: 159,
      sequence: [],
      image: elements[15]
    },
    kekLevel2: {
      width: 372,
      height: 255,
      sequence: [],
      image: elements[16]
    },
    lilaHegy: {
      width: 384,
      height: 347,
      sequence: [],
      image: elements[17]
    },
    rokaGomba: {
      width: 229,
      height: 299,
      sequence: [],
      image: elements[18]
    },
    zoldPafrany: {
      width: 362,
      height: 267,
      sequence: [],
      image: elements[19]
    }
  },
  makakos: {
    noncsim: {
      width: 301,
      height: 480,
      sequenceY: {
        walking: 0,
        idle: 1
      },
      sequenceX: {
        walking: [0, 1, 2, 3, 4],
        idle: [0, 1, 2, 1, 2, 1, 0]
      },
      position: {
        x: 920,
        y: 500,
        directionX: 'right'
      },
      image: makakos[0]
    },
    danim: {
      width: 336,
      height: 637,
      sequenceY: {
        walking: 0,
        special: 1,
        idle: 2
      },
      sequenceX: {
        walking: [0, 1, 2, 3, 4],
        special: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        idle: [0, 0, 1, 1]
      },
      position: {
        x: 680,
        y: 400,
        directionX: 'left'
      },
      image: makakos[1]
    },
    madar: {
      width: 233,
      height: 212,
      sequenceY: {
        idle: 0,
        flying: 0,
        flyingAndStopping: 0
      },
      sequenceX: {
        idle: [0, 1, 2],
        flying: [0, 1, 2],
        flyingAndStopping: [0, 1, 2]
      },
      position: {
        x: 540,
        y: 200,
        directionX: 'right'
      },
      image: makakos[2]
    }
  }
});

export const ANIM_SEQUENCE = {};
