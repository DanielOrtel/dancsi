import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useIsMedia from 'hooks/use-is-media';
import { PLATFORMS } from 'utils/media';
import VideoDesktop from './desktop';
import VideoMobile from './mobile';
import { useIsScrolling } from 'hooks/use-is-scrolling';

const StyledVideoWrapper = styled.div`
  width: 100%;
  background: #f4f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    height: 8vh;
    position: absolute;
    bottom: 0;
  }
`;

export default function Video() {
  const isPhone = useIsMedia([PLATFORMS.phone]);
  const [isClient, setIsClient] = useState(false);

  const {
    isScrolling,
    scrollDirectionY // 'none', 'up', 'down'
  } = useIsScrolling();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <StyledVideoWrapper>
      {isClient && (isPhone ? <VideoMobile /> : <VideoDesktop />)}
      {isScrolling && scrollDirectionY === 'down' && <img src="media/scroll.gif" alt="scroll" />}
    </StyledVideoWrapper>
  );
}
