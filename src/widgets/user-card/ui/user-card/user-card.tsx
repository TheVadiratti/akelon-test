import { memo, useState, useCallback, Dispatch, SetStateAction } from 'react';
import UserCardEdit from '../user-card-edit/user-card-edit';
import UserCardInfo from '../user-card-info/user-card-info';
import Button from '../../../../shared/ui/button/button';
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
      <div className={Styles.controls}>
        <p className={Styles.heading}>
          {enableEditMode ? 'Редактирование' : 'Карточка пользователя'}
        </p>
        <Button
          type="button"
          label={enableEditMode ? 'Назад к карточке' : 'Редактировать'}
          onClick={handleEditMode}
        />
      </div>
    </div>
  );
});

export default UserCard;
