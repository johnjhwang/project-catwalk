import React from 'react';
import styled from 'styled-components';

const Errors = ({ errors }) => {
  return <Div>&nbsp;•{errors}</Div>;
};

const Div = styled.div`
  font-weight: bold;
  color: red;
`;

export default Errors;
