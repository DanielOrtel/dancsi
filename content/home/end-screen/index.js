import React, { useState, useEffect } from 'react';
import felhoNagy from '../../../assets/static/felhok-nagy.png';
import felhoFeher from '../../../assets/static/felho-feher.png';
import Button from 'components/button';
import * as Styled from './styled';
import Modal from 'components/modal';
import ModalHeader from '../../../components/modal/modal-header';
import ModalContent from '../../../components/modal/modal-content';
import InfoButtons from './info-buttons';
import Spacer from '../../../components/spacer';

export default function EndScreen() {
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(false);
  const openUrl = () =>
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdoH2JpzAfomceC1n-QpJaG8A3WTjwHIAQHy8cDxwpXFTzW-w/viewform', '_blank');

  const delay = () => setTimeout(() => setStart(true), 1600);

  useEffect(() => {
    delay();

    return () => clearTimeout(delay);
  }, []);

  return (
    <Styled.Container>
      <Styled.Felhok $start={start}>
        <Button src={felhoNagy.src} width="280px" onClick={() => setOpen(true)}>
          nyisd meg
        </Button>
      </Styled.Felhok>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <ModalHeader></ModalHeader>
          <ModalContent>
            <Styled.LargeHeader>Dani és Noncsi</Styled.LargeHeader>
            <Spacer y={4} />
            <Styled.SubHeader>Kedves családunk és barátaink!</Styled.SubHeader>
            <Spacer y={4} />
            <Styled.InviteText>
              Szeretettel meghívunk, hogy velünk örüljetek, mikor 2023 június 17-én 13 órakor Benedekmezőn egybekelünk. <b /> Tartsatok
              velünk e csodás napon!
            </Styled.InviteText>
            <Spacer y={6} />

            <InfoButtons />
            <Spacer y={6} />

            <Styled.InviteText>
              <strong>Dresscode:</strong> kerti-parti öltözet, amiben kényelmesen érzed magad, nem ajánlott a magassarkú lábbeli a talaj
              miatt.
            </Styled.InviteText>
            <Spacer y={6} />
            <Styled.InviteText>
              Kérjük részvételi szándékotokat május 25-ig jelezzétek, illetve töltsétek ki az alábbi kérdőívet!
            </Styled.InviteText>
            <Spacer y={6} />
            <div>
              <Button src={felhoFeher.src} width="360px" onClick={openUrl}>
                KÉRDŐÍV
              </Button>
            </div>

            <Spacer y={5} />
            <Styled.Small>Illusztráció: Csibi Boróka; Design: Jakab Eszter; Zene: Musspell; Minden más: a jövendőbeli pár.</Styled.Small>
          </ModalContent>
        </Modal>
      )}
    </Styled.Container>
  );
}
