import React, { useRef } from 'react';
import styled from 'styled-components';
import { useVideoPlay } from '../hooks';
import VideoError from '../video-error';
import Loader from "../loading";

const StyledVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  background: ${({theme}) => theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: -8px;
  margin-right: -8px;

  video {
    border: none;
    background-color: transparent !important;
    width: 100%;
    outline: unset;

    -webkit-mask-image: -webkit-radial-gradient(white, black);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
  }

  img {
    height: auto;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;

export default function VideoMobile() {
  const videoRef = useRef(null);
  const { interacted, error, setPlayed, loaded, setLoaded, setError, setInteracted, play } = useVideoPlay(videoRef);

  const onClick = () => {
    setError(null);
    setInteracted(true);
    play();
  };

  return (
    <StyledVideoWrapper>
      <>
        <Loader loading={!loaded && !interacted && !error} />
        <VideoError interacted={interacted} error={error} onClick={onClick} />
        <video
          ref={videoRef}
          onLoadedData={() => {
            setLoaded(true);
          }}
          onEnded={() => setPlayed(true)}
          controls=""
          playsInline
          autoPlay
        >
          <source src="media/meghivo-mobil.mp4" type="video/mp4" />
          <img src="media/meghivo.png" alt="Your browser does not support the video tag." />
        </video>
      </>
    </StyledVideoWrapper>
  );
}
