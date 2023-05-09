import React, { useState, useEffect } from 'react';
import felhoNagy from '../../../assets/static/felhok-nagy.png';
import Button from 'components/button';
import * as Styled from './styled';
import Modal from 'components/modal';
import ModalHeader from '../../../components/modal/modal-header';
import { ModalContext } from '../../../components/modal/provider';
import ModalContent from '../../../components/modal/modal-content';

export default function EndScreen() {
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(false);

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
            <h2>Kedves családunk és barátaink!</h2>
            <p>
              Szeretettel meghívunk, hogy velünk örüljetek, mikor 2023 június 17-én 13 órakor Benedekmezőn egybekelünk. Tartsatok velünk e
              csodás napon!
            </p>
          </ModalContent>
        </Modal>
      )}
    </Styled.Container>
  );
}
