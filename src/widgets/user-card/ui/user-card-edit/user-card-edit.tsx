import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  memo,
  useCallback,
  useMemo,
} from 'react';
import Button from '../../../../shared/ui/button/button';
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

  const isMatchData = useMemo(
    () =>
      firstNameValue === user.firstName &&
      lastNameValue === user.lastName &&
      avatarValue === user.avatar &&
      cityValue === user.city &&
      aboutValue === user.about,
    [firstNameValue, lastNameValue, avatarValue, cityValue, aboutValue, user]
  );

  return (
    <form className={Styles.form} onSubmit={handleSubmitForm}>
      <div className={Styles.inputs}>
        <label className={Styles.label} htmlFor="first-name-input">
          Имя
          {firstNameInput}
        </label>
        <label className={Styles.label} htmlFor="last-name-input">
          Фамилия
          {lastNameInput}
        </label>
        <label className={Styles.label} htmlFor="avatar-input">
          Фото
          {avatarInput}
        </label>
        <label className={Styles.label} htmlFor="city-input">
          Город
          {cityInput}
        </label>
        <label className={Styles.label} htmlFor="about-input">
          Краткая информация
          {aboutInput}
        </label>
      </div>
      <div className={Styles.buttons}>
        <Button type="submit" label="Сохранить" disabled={isMatchData} />
      </div>
    </form>
  );
});

export default UserCardEdit;
