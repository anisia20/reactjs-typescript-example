import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Styled from 'styled-components';

const Title = Styled.h1`
  color: red;
`;
interface Props {}

const App = ({  }: Props) => {
  return <Title>Hello World!</Title>;
};

ReactDOM.render(<App />, document.getElementById('app'));