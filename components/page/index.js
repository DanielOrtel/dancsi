import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { query, PLATFORMS } from 'utils/media';
import useFavicon from 'hooks/use-favicon';

export const LAYOUT_PADDING = {
  [PLATFORMS.phone]: {
    vertical: '12px',
    horizontal: '8px'
  },
  [PLATFORMS.tablet]: {
    vertical: '16px',
    horizontal: '24px'
  },
  [PLATFORMS.desktop]: {
    vertical: '24px',
    horizontal: '48px'
  },
  [PLATFORMS.xdesktop]: {
    vertical: '24px',
    horizontal: '48px'
  }
};

const PageWrapper = styled.div`
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
`;

export default function Page({ children }) {
  const favicon = useFavicon();

  return (
    <div>
      <Head>
        <title>Noncsi és Dani</title>
        <meta name="description" content="Noncsi és Dani esküvő meghívó" />
        <link rel="icon" href={favicon} />
      </Head>

      <PageWrapper>
        {children}
      </PageWrapper>
    </div>
  );
}
