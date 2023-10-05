import { ChangeEventHandler, memo, useMemo } from 'react';
import Styles from './textarea.module.css';

interface Props {
  id?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  fill?: boolean;
  extraClass?: string;
}

const Textarea = memo(({ id, value, onChange, fill, extraClass }: Props) => {
  const classNames = useMemo(() => {
    const names = [Styles.textarea];

    if (fill) {
      names.push(Styles.fill);
    }
    if (extraClass) {
      names.push(extraClass);
    }
    return names;
  }, [fill, extraClass]);

  return (
    <textarea
      className={classNames.join(' ')}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
});

export default Textarea;
