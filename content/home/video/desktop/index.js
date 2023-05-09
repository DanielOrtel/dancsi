import React, { useRef } from 'react';
import styled from 'styled-components';
import { useVideoPlay } from '../hooks';
import VideoError from '../video-error';
import Loader from '../loading';

const StyledVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  background: #f4f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  video {
    width: 100%;
    height: auto;
    
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
  }
`;

const StyledBackgroundImage = styled.img`
  height: auto;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export default function VideoDesktop() {
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
        <VideoError interacted={interacted} error={error} onClick={onClick} />
        <Loader loading={!loaded && !interacted && !error} />
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
          <source src="media/meghivo.mp4" type="video/mp4" />
          <StyledBackgroundImage src="media/meghivo.png" alt="Your browser does not support the video tag." />
        </video>
      </>
    </StyledVideoWrapper>
  );
}
