import { memo } from 'react';
import Styles from './user-card-info.module.css';
import type { User } from '../../../../entities/user';

interface Props {
  user: User;
}

const UserCardInfo = memo(({ user }: Props) => (
  <div className={Styles.cnt}>
    <img className={Styles.avatar} src={user.avatar} alt="avatar" />
    <div className={Styles.info}>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.city}</p>
      <p>{user.about}</p>
    </div>
  </div>
));

export default UserCardInfo;
