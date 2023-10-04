import { memo } from 'react';
import { InfoItem } from '../../../../entities/user';
import Styles from './user-card-info.module.css';
import type { User } from '../../../../entities/user';

interface Props {
  user: User;
}

const UserCardInfo = memo(({ user }: Props) => (
  <div className={Styles.cnt}>
    <img className={Styles.avatar} src={user.avatar} alt="avatar" />
    <div className={Styles.info}>
      <InfoItem keyValue="Имя" value={user.firstName} />
      <InfoItem keyValue="Фамилия" value={user.lastName} />
      <InfoItem keyValue="Город" value={user.city} />
      <InfoItem keyValue="Краткая информация" value={user.about} />
    </div>
  </div>
));

export default UserCardInfo;
