import { useState } from 'react';
import InputText from '../../../../shared/ui/input-text/input-text';

interface Params {
  type: 'text'; // по необходимости можно расширить
  initValue?: string;
  id?: string;
}

const useInput = ({ type, initValue = '', id }: Params) => {
  const [value, setValue] = useState(initValue);
  const input = (
    <InputText
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      id={id}
      fill
    />
  );
  return [value, input];
};

export default useInput;
