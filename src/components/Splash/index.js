import React from 'react';
import styled from 'styled-components';
import SplashImg from '../../assets/images/splash.gif';

const SplashWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  img {
    object-position: center;
    border-radius: 50%;
    height: 45vw;
    width: 45vw;
    @media (max-width: 650px) {
      height: 90vw;
      width: 90vw;
    }
  }
`;

function Splash() {
  return (
    <SplashWrapper>
      <img alt='Splash img' src={SplashImg} />
    </SplashWrapper>
  );
}

export default Splash;
