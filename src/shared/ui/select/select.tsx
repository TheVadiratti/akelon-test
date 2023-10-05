import {
  Dispatch,
  SetStateAction,
  memo,
  useCallback,
  useState,
  useMemo,
} from 'react';
import Styles from './select.module.css';
import Options from './options/options';

interface Props {
  options: string[];
  setOption: Dispatch<SetStateAction<string>>;
  value: string;
  fill?: boolean;
  extraClass?: string;
}

const Select = memo(
  ({ options, value, setOption, fill, extraClass }: Props) => {
    const [isShowOptions, setShowOptions] = useState(false);

    const classNames = useMemo(() => {
      const names = [Styles.cnt];

      if (isShowOptions) {
        names.push(Styles.cntActive);
      }
      if (fill) {
        names.push(Styles.fill);
      }
      if (extraClass) {
        names.push(extraClass);
      }
      return names;
    }, [isShowOptions, fill, extraClass]);

    const handleOpenOptions = useCallback(() => {
      setShowOptions(true);
    }, []);
    const handleCloseOptions = useCallback(() => {
      setShowOptions(false);
    }, []);

    return (
      <div className={classNames.join(' ')} onMouseLeave={handleCloseOptions}>
        <button
          className={Styles.button}
          type="button"
          onClick={handleOpenOptions}
        >
          {value || ''}
        </button>
        <div
          className={`${Styles.arrow} ${isShowOptions && Styles.arrowOpen}`}
        />
        {isShowOptions && (
          <Options
            options={options}
            setOption={setOption}
            setShowOptions={setShowOptions}
          />
        )}
      </div>
    );
  }
);

export default Select;
