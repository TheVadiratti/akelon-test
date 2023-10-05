import { useState } from 'react';
import Textarea from '../../../../shared/ui/textarea/textarea';

interface Params {
  initValue?: string;
  id?: string;
}

const useTextarea = ({ initValue = '', id }: Params) => {
  const [value, setValue] = useState(initValue);
  const input = (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      id={id}
      fill
    />
  );
  return [value, input];
};

export default useTextarea;
