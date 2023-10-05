import { Dispatch, SetStateAction, memo, useCallback } from 'react';
import Styles from './options-item.module.css';

interface Props {
  option: string;
  setOption: Dispatch<SetStateAction<string>>;
  setShowOptions: Dispatch<SetStateAction<boolean>>;
}

const OptionsItem = memo(({ option, setOption, setShowOptions }: Props) => {
  const handleClick = useCallback(() => {
    setOption(option);
    setShowOptions(false);
  }, [option]);

  return (
    <button className={Styles.item} type="button" onClick={handleClick}>
      {option}
    </button>
  );
});

export default OptionsItem;
