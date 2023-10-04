/* eslint-disable react/button-has-type */
import { MouseEventHandler, memo, useMemo } from 'react';
import Styles from './button.module.css';

interface Props {
  type: 'button' | 'submit' | 'reset';
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  extraClass?: string;
}

const Button = memo(({ type, label, onClick, extraClass }: Props) => {
  const classNames = useMemo(() => {
    const names = [Styles.button];

    if (extraClass) {
      names.push(extraClass);
    }
    return names;
  }, [extraClass]);

  return (
    <button className={classNames.join(' ')} type={type} onClick={onClick}>
      {label}
    </button>
  );
});

export default Button;
