import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { query } from 'utils/media';
import useFavicon from 'hooks/use-favicon';
import Grid from 'components/grid';
import Col from 'components/grid/col';

export const StyledErrorGrid = styled(Grid)`
  min-height: 60%;
  flex-grow: 1;
  max-width: 1200px;
`;

export const StyledErrorCol = styled(Col)`
  padding: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    margin-bottom: 16px;
  }

  h4 {
    margin-bottom: 24px;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  padding: 14px 30px;
  color: ${({ theme }) => theme.red};
  fill: ${({ theme }) => theme.red};
  border: 1px solid ${({ theme }) => theme.red};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.white};
    fill: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.red};
  }

  ${query.phone`
    width: 100%;
  `}
`;

export const StyledErrorImage = styled.img`
  height: auto;
  width: 320px;
`;

function ErrorView() {
  const favicon = useFavicon();
  const { push } = useRouter();

  return (
    <>
      <Head>
        <title>404 - Eszter és Jozsó</title>
        <meta name="robots" content="noindex" />
        <link rel="icon" href={favicon} />
      </Head>
      <StyledErrorGrid>
        <StyledErrorCol width={12}>
          <StyledErrorImage src="media/meghivo.png" alt="404 meghivo" />
        </StyledErrorCol>
        <StyledErrorCol width={12}>
          <h2>Nem találtuk itt se Esztert, se Jozsót</h2>
          <h4>Ez egy egyszerű oldal, nincs más amit nézni. Kérlek navigálj vissza a föoldalra.</h4>
          <StyledButton onClick={() => push('/')}>Vissza a föoldalra</StyledButton>
        </StyledErrorCol>
      </StyledErrorGrid>
    </>
  );
}

export default ErrorView;
