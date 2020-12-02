import { createElement } from 'rax';
import Image from 'rax-image';

import './index.css';

const unusedVar = 1;

export default (props) => {
  const { uri } = props;
  const source = { uri };
  return <Image className="logo" source={source} />;
};
