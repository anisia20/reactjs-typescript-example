import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import Title from '~/Components/Title';
import FileChk from '~/Utils/FileChk';

interface Props extends RouteComponentProps {}



const Top = ({ match, history, location }: Props) => {
  console.log(match);
  console.log(history);
  console.log(location);
  let icon = 'app_icon.png';
  let lock = 'lock.png';
  let lock2 = 'lock2x.png';

  return (
    <div>
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <Title label="Hello World!" />
      <img src={FileChk(require(`~/Assets/Images/${icon}`))} />
      <img src={FileChk(require(`~/Assets/Images/${lock}`))} />
      <img src={FileChk(require(`~/Assets/Images/${lock2}`))} />
    </div>
  );
};

export default Top;
