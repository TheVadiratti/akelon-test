import { useState } from 'react';
import Select from '../../../../shared/ui/select/select';

interface Params {
  initValue?: string;
}

const useSelect = ({ initValue = '' }: Params) => {
  const [value, setValue] = useState(initValue);
  const input = <Select value={value} setOption={setValue} fill />;
  return [value, input];
};

export default useSelect;
