import { useState } from 'react';

interface Params {
  initValue?: string;
  id?: string;
}

const useTextarea = ({ initValue = '', id }: Params) => {
  const [value, setValue] = useState(initValue);
  const input = (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      id={id}
    />
  );
  return [value, input];
};

export default useTextarea;
