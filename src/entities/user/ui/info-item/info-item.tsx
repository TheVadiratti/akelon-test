import { memo } from 'react';
import Styles from './info-item.module.css';

interface Props {
  keyValue: string;
  value: string;
}

const InfoItem = memo(({ keyValue, value }: Props) => (
  <div className={Styles.cnt}>
    <p className={Styles.key}>{keyValue}:</p>
    <p className={Styles.value}>{value}</p>
  </div>
));

export default InfoItem;
