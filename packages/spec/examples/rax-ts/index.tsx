import { createElement } from 'rax';
import Image from 'rax-image';

import './index.css';

interface LogoProps {
  uri: string;
}

const unusedVar = 1;

export default (props: LogoProps) => {
  const { uri } = props;
  const source = { uri };
  return <Image className="logo" source={source} />;
};
