import { useState } from 'react';

interface Params {
  type: 'text'; // по необходимости можно расширить
  initValue?: string;
  id?: string;
}

const useInput = ({ type, initValue = '', id }: Params) => {
  const [value, setValue] = useState(initValue);
  const input = (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      id={id}
    />
  );
  return [value, input];
};

export default useInput;
