import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  memo,
  useCallback,
} from 'react';
import useInput from '../../lib/hooks/useInput';
import useTextarea from '../../lib/hooks/useTextarea';
import Styles from './user-card-edit.module.css';
import { User } from '../../../../entities/user';

interface Props {
  user: User;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const UserCardEdit = memo(({ user, setUser }: Props) => {
  const [firstNameValue, firstNameInput] = useInput({
    type: 'text',
    initValue: user.firstName,
    id: 'first-name-input',
  });
  const [lastNameValue, lastNameInput] = useInput({
    type: 'text',
    initValue: user.lastName,
    id: 'last-name-input',
  });
  const [avatarValue, avatarInput] = useInput({
    type: 'text',
    initValue: user.avatar,
    id: 'avatar-input',
  });
  const [cityValue, cityInput] = useInput({
    type: 'text',
    initValue: user.city,
    id: 'city-input',
  });
  const [aboutValue, aboutInput] = useTextarea({
    initValue: user.about,
    id: 'about-input',
  });

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      setUser({
        firstName: firstNameValue,
        lastName: lastNameValue,
        avatar: avatarValue,
        city: cityValue,
        about: aboutValue,
      } as User);
    },
    [firstNameValue, lastNameValue, avatarValue, cityValue, aboutValue]
  );

  return (
    <form className={Styles.form} onSubmit={handleSubmitForm}>
      <label htmlFor="first-name-input">
        Имя
        {firstNameInput}
      </label>
      <label htmlFor="last-name-input">
        Фамилия
        {lastNameInput}
      </label>
      <label htmlFor="avatar-input">
        Фото
        {avatarInput}
      </label>
      <label htmlFor="city-input">
        Город
        {cityInput}
      </label>
      <label htmlFor="about-input">
        Краткая информация
        {aboutInput}
      </label>
      <button type="submit">Сохранить</button>
    </form>
  );
});

export default UserCardEdit;
