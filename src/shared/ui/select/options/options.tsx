import { Dispatch, SetStateAction, memo } from 'react';
import Styles from './options.module.css';
import OptionsItem from './item/options-item';

interface Props {
  options: string[];
  setOption: Dispatch<SetStateAction<string>>;
  setShowOptions: Dispatch<SetStateAction<boolean>>;
}

const Options = memo(({ options, setOption, setShowOptions }: Props) => (
  <ul className={Styles.options}>
    {options.map((item) => (
      <OptionsItem
        option={item}
        key={item}
        setOption={setOption}
        setShowOptions={setShowOptions}
      />
    ))}
  </ul>
));

export default Options;
