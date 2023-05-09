import React from 'react';
import styled from 'styled-components';
import { query } from 'utils/media';
import Grid from 'components/grid';
import Col from 'components/grid/col';
import Icon from 'components/icon';
import Pecset from 'public/media/pecset.svg';
import Phone from 'public/media/phone.svg';

const StyledFooter = styled.footer`
  width: 100%;
`

const StyledPhoneNumbees = styled(Grid)`
  display: flex;
  align-items: flex-end;

  ${query.phone`
    align-items: center;
  `}
`;

const StyledPecset = styled(Pecset)`
  width: 100%;
  max-width: 240px;
  margin-left: -56px;

  ${query.phone`
    margin-left: -12px;
  `}
`;

const StyledNumbers = styled(Grid)`
  margin-top: 36px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.black};

  ${query.phone`
    margin-top: 24px;
    padding-top: 12px;
  `}
`;

const StyledNumbersCol = styled(Col)`
  padding: 0;

  & + & {
    padding-right: 12px;

    ${query.phone`
      padding: 0;
    `}
  }
`;

const StyledPhoneSpan = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 4px;

  color: ${({ theme }) => theme.black};

  a {
    color: ${({ theme }) => theme.black};
  }

  & > * {
    margin-right: 4px;
  }

  ${query.phone`
    font-size: 11px;
    justify-content: flex-start;
    align-items: flex-start;
  `}
`;

const StyledActualNumber = styled.div`
  display: flex;
  ${query.phone`
    flex-direction: column;
    width: 100%;
  `}
`;

export default function Home() {
  return (
    <StyledFooter>
      <StyledPhoneNumbees>
        <Col desktop={4} tablet={4} phone={5}>
          <StyledPecset src="media/pecset.svg" />
        </Col>
        <Col desktop={8} tablet={8} phone={7}>
          <StyledNumbers>
            <StyledNumbersCol desktop={6} tablet={6} phone={12}>
              <StyledPhoneSpan>
                <Icon icon={Phone} size={Icon.sizes.phone} />
                <StyledActualNumber>
                  <span>Eszter:</span> <a href="tel:004 0743 054 033">004 0743 054 033</a>
                </StyledActualNumber>
              </StyledPhoneSpan>
            </StyledNumbersCol>
            <StyledNumbersCol desktop={6} tablet={6} phone={12}>
              <StyledPhoneSpan>
                <Icon icon={Phone} size={Icon.sizes.phone} />
                <StyledActualNumber>
                  <span>Jozsó:</span> <a href="tel:004 0743 126 430">004 0743 126 430</a>
                </StyledActualNumber>
              </StyledPhoneSpan>
            </StyledNumbersCol>
          </StyledNumbers>
        </Col>
      </StyledPhoneNumbees>
    </StyledFooter>
  );
}
