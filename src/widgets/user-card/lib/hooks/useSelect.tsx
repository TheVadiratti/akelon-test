import { useState } from 'react';
import Select from '../../../../shared/ui/select/select';

interface Params {
  options: string[];
  initValue?: string;
}

const useSelect = ({ options, initValue = '' }: Params) => {
  const [value, setValue] = useState(initValue);
  const input = (
    <Select options={options} value={value} setOption={setValue} fill />
  );
  return [value, input];
};

export default useSelect;
