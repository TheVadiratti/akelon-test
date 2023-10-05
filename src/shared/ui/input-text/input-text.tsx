import { ChangeEventHandler, memo, useMemo } from 'react';
import Styles from './input-text.module.css';

interface Props {
  type: 'text' | 'tel' | 'email'; // при необходимости дополнить
  id?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  fill?: boolean;
  extraClass?: string;
}

const InputText = memo(
  ({ type, id, value, onChange, fill, extraClass }: Props) => {
    const classNames = useMemo(() => {
      const names = [Styles.input];

      if (fill) {
        names.push(Styles.fill);
      }
      if (extraClass) {
        names.push(extraClass);
      }
      return names;
    }, [extraClass]);

    return (
      <input
        className={classNames.join(' ')}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    );
  }
);

export default InputText;
