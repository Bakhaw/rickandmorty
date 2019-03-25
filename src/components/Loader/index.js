import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => (height === 'fullscreen' ? '100vh' : '150px')};
  width: 100vw;
  & div {
    color: #eb5286;
  }
`;

function Loader({ height }) {
  return (
    <LoaderWrapper height={height}>
      <CircularProgress size={60} />
    </LoaderWrapper>
  );
}

export default Loader;
