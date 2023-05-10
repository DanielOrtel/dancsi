import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import useFavicon from 'hooks/use-favicon';

const PageWrapper = styled.div`
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  overflow-y: scroll;
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
