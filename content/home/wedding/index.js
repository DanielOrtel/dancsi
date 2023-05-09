import background from '../background';
import sky from '../sky';
import layers from '../layers';
import elements from '../elements';

import makakos from '../makako';

const TimeFrameDelta = 400;
const MaxTimeFrame = 108000;

const AnimationSequence = {
  0: {
    layers: {
      one: 'loading',
      two: 'loading',
      three: 'loading',
      four: 'loading'
    }
  },
  400: {
    // makakos: {
    //   nap: 'rising',
    //   felhoNagy: 'flyingAndStopping',
    //   felhoKicsi: 'flyingAndStopping'
    // }
  },
  800: {},
  1200: {},
  1600: {},
  2000: {},
  2400: {},
  2800: {},
  3200: {},
  3600: {},
  4000: {
    layers: {
      one: 'moving',
      two: 'moving',
      three: 'moving',
      four: 'moving'
    },
    makakos: {
      noncsim: 'walking'
    }
  },
  4400: {},
  4800: {},
  5200: {},
  5600: {},
  6000: {},
  6400: {},
  6800: {},
  7200: {},
  7600: {},
  8000: {
    makakos: {
      nap: 'rising'
    }
  },
  8400: {},
  8800: {},
  9200: {},
  9600: {},
  10000: {},
  10400: {},
  10800: {},
  11200: {
    makakos: {
      felhoKicsi: 'flyingAndStopping'
    }
  },
  11600: {},
  12000: {
    makakos: {
      felhoNagy: 'flyingAndStopping'
    }
  },
  12400: {},
  12800: {},
  13200: {},
  13600: {
    makakos: {
      madar: 'flying'
    }
  },
  14000: {},
  14400: {},
  14800: {},
  15200: {},
  15600: {},
  16000: {},
  16400: {},
  16800: {},
  17200: {},
  17600: {
    speed: 7,
    makakos: {
      noncsim: 'walking'
    }
  },
  18000: {
    loadingElements: 1
  },
  18400: {},
  18800: {},
  19200: {},
  19600: {},
  20000: {},
  20400: {},
  20800: {},
  21200: {},
  21600: {},
  22000: {},
  22400: {},
  22800: {},
  23200: {},
  23600: {},
  24000: {},
  24400: {},
  24800: {},
  25200: {},
  25600: {},
  26000: {},
  26400: {},
  26800: {},
  27200: {},
  27600: {},
  28000: {},
  28400: {},
  28800: {},
  29200: {},
  29600: {},
  30000: {},
  30400: {},
  30800: {},
  31200: {},
  31600: {},
  32000: {},
  32400: {},
  32800: {},
  33200: {},
  33600: {},
  34000: {},
  34400: {},
  34800: {},
  35200: {},
  35600: {},
  36000: {},
  36400: {},
  36800: {},
  37200: {},
  37600: {},
  38000: {},
  38400: {},
  38800: {},
  39200: {},
  39600: {},
  40000: {},
  40400: {},
  40800: {},
  41200: {},
  41600: {},
  42000: {},
  42400: {},
  42800: {},
  43200: {},
  43600: {},
  44000: {},
  44400: {},
  44800: {},
  45200: {},
  45600: {},
  46000: {},
  46400: {},
  46800: {},
  47200: {},
  47600: {},
  48000: {},
  48400: {},
  48800: {},
  49200: {},
  49600: {},
  50000: {},
  50400: {},
  50800: {},
  51200: {},
  51600: {},
  52000: {},
  52400: {},
  52800: {},
  53200: {},
  53600: {},
  54000: {}
  // 555500: {
  //   kisKekFaBal3: 'loading',
  //   kisKekFaBal4: 'loading',
  //   kekBokor2: 'loading',
  //   kisKekFaJobb2: 'loading',
  //   zoldPafrany2: 'loading',
  //   sargaVirag3: 'loading',
  //   kisKekViragBal2: 'loading',
  //   zoldbokor: 'loading',
  //   zoldLevelBal: 'loading',
  //   kisFenyo: 'loading',
  //   lilaHegy: 'loading',
  //   fenyo: 'loading',
  //   kisKekViragBal: 'loading',
  //   lilabokor: 'loading',
  //   kisKekFaBal2: 'loading',
  //   fuszalakBal: 'loading',
  //   kisKekFaBal: 'loading',
  //   aproLilaBal: 'loading',
  //   pafrany: 'loading',
  //   nagyLilaVirag: 'loading',
  //   kekLevel: 'loading',
  //   kekLevel2: 'loading',
  //   kekBokor: 'loading',
  //   rokaGomba: 'loading',
  //   kisKekFaJobb: 'loading',
  //   zoldPafrany: 'loading',
  //   sargaVirag: 'loading',
  //   fenyo2: 'loading',
  //   sargaVirag2: 'loading',
  //   zoldLevelBal2: 'loading',
  //   zoldbokor2: 'loading',
  //   fenyo3: 'loading',
  //   pafrany2: 'loading',
  //   lilabokor2: 'loading'
  // }
};

export class Wedding {
  constructor({ width, height, canvas, config, setOverState, isPhone }) {
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.canvas = canvas;
    this.time = 0;
    this.fps = 30;
    this.animationTiming = 160;
    this.elements = elements(this, config);
    this.makakos = makakos(this, config, isPhone);
    this.sky = sky(this, config, this.elements, this.makakos);
    this.layers = layers(this, config, this.elements, this.makakos);
    this.background = background(this, this.layers, this.sky);
    this.timeFrame = 0;
    this.state = 'initial';
    this.animationOver = false;
    this.loadingElements = 0;
    this.setOverState = setOverState;
  }

  setOver() {
    this.animationOver = true;
    this.setOverState(true);
  }

  update({ currentTime, deltaTime }) {
    this.time += deltaTime;

    this.background.update({ currentTime, deltaTime });
    if (this.animationOver) return;

    if (this.time >= this.timeFrame + TimeFrameDelta && this.time < MaxTimeFrame) {
      this.timeFrame = this.timeFrame + TimeFrameDelta;
      this.timeFrameTick = true;
    }

    if (this.loadingElements > 0 && this.timeFrameTick) {
      const last = this.loadingElements % 10;

      let shouldPopElement = last === 1 || last === 3 || last === 5;
      if (this.loadingElements > 20) shouldPopElement = shouldPopElement || last === 2;
      if (this.loadingElements > 30) shouldPopElement = shouldPopElement || last === 4;

      if (shouldPopElement) {
        const possibleElements = Object.values(this.elements)
          .filter((element) => element.state === 'hidden' && element.visible)
          .sort((a, b) => Math.abs(this.width - b.canvasX) - Math.abs(this.width - a.canvasX));

        if (possibleElements.length) {
          possibleElements[0].setState('loading');
        }
      }

      this.timeFrameTick = false;
      this.loadingElements += 1;
    }

    if (!AnimationSequence[this.timeFrame]) return;

    Object.entries(AnimationSequence[this.timeFrame]).forEach(([key, config]) => {
      if (typeof config === 'object') {
        Object.entries(config).forEach(([item, state]) => {
          this[key][item].setState(state);
        });
      } else {
        this[key] = config;
      }
    });
  }

  draw(context) {
    this.background.draw(context);
  }
}
