// layers
import layer1 from 'assets/background/layer-1.png';
import layer2 from 'assets/background/layer-2.png';
import layer3 from 'assets/background/layer-3.png';
import layer4 from 'assets/background/layer-4.png';
// anim
import fenyo from './elements/fenyo-sprite.png';
import kekBokor from './elements/kek-bokor-sprite.png';
import sargaVirag from './elements/kis-sarga-virag-sprite.png';
import lilaBokor from './elements/lila-bokor-sprite.png';
import nagyLilaVirag from './elements/nagy-lila-virag-sprite.png';
import pafrany from './elements/pafrany-sprite.png';
import zoldBokor from './elements/zold-bokor-sprite.png';
// static
import nap from './static/nap.png';
import felho1 from './static/felhok-nagy.png';
import felho2 from './static/felhok-kicsi.png';
import aproLilaBal from './elements/apro-lila-virag-bal-oldalon.png';
import zoldLevelBal from './elements/bal-oldali-zold-levelek.png';
import fuszalakBal from './elements/fuszalak-bal-oldal.png';
import kisFenyo from './elements/kis-fenyo-bal-oldal.png';
import kisKekFaBal2 from './elements/kis-kek-fa-2-bal-oldal.png';
import kisKekFaBal from './elements/kis-kek-fa-bal-oldal.png';
import kisKekFaJobb from './elements/kis-kek-fa-jobb-oldal.png';
import kisKekViragBal from './elements/kis-kek-virag-bal-oldal.png';
import kekLevel2 from './elements/kek-level-2-jobb-oldal.png';
import kekLevel from './elements/kek-level-jobb-oldal.png';
import lilaHegy from './elements/lila-hegy.png';
import rokaGomba from './elements/roka-gomba-jobb-oldal.png';
import zoldPafrany from './elements/zold-pafrany.png';
// makakok
import noncsim from './makakok/noncsim-sprite.png';
import danim from './makakok/danim-sprite.png';
import madar from './makakok/madar-sprite.png';

export const Layers = [layer1, layer2, layer3, layer4];
export const Elements = [
  fenyo,
  pafrany,
  lilaBokor,
  zoldBokor,
  kekBokor,
  sargaVirag,
  nagyLilaVirag,
  // static - 6
  aproLilaBal, // todo?
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
  zoldPafrany
];

export const Static = [nap, felho1, felho2];

export const Makakok = [noncsim, danim, madar];
