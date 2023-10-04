import { memo, useState, useCallback, Dispatch, SetStateAction } from 'react';
import UserCardEdit from '../user-card-edit/user-card-edit';
import UserCardInfo from '../user-card-info/user-card-info';
import Styles from './user-card.module.css';
import { User } from '../../../../entities/user';

interface Props {
  user: User;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const UserCard = memo(({ user, setUser }: Props) => {
  const [enableEditMode, setEditMode] = useState(false);

  const handleEditMode = useCallback(() => {
    setEditMode(!enableEditMode);
  }, [enableEditMode]);

  return (
    <div className={Styles.card}>
      {enableEditMode ? (
        <UserCardEdit user={user} setUser={setUser} />
      ) : (
        <UserCardInfo user={user} />
      )}
      <button type="button" onClick={handleEditMode}>
        {enableEditMode ? 'Назад к карточке' : 'Редактировать'}
      </button>
    </div>
  );
});

export default UserCard;
