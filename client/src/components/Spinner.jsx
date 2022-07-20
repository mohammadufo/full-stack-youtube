import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Spinner = () => {
  return (
    <Container>
      <Image alt="" src={require('../img/spinner.gif')} />
    </Container>
  );
};

export default Spinner;
