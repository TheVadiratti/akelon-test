import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  memo,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from 'react';
import Button from '../../../../shared/ui/button/button';
import useInput from '../../lib/hooks/useInput';
import useTextarea from '../../lib/hooks/useTextarea';
import useSelect from '../../lib/hooks/useSelect';
import Styles from './user-card-edit.module.css';
import { User } from '../../../../entities/user';

interface Props {
  user: User;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const UserCardEdit = memo(({ user, setUser }: Props) => {
  const [isShowHint, setShowHint] = useState(false);

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
  const [cityValue, citySelect] = useSelect({
    initValue: user.city,
  });
  const [aboutValue, aboutInput] = useTextarea({
    initValue: user.about,
    id: 'about-input',
  });

  // убираем подсказку о сохранении данных через 2 сек
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isShowHint]);

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
      setShowHint(true);
    },
    [firstNameValue, lastNameValue, avatarValue, cityValue, aboutValue]
  );

  // если данные в форме не были изменены, то блокируем кнопку
  const isMatchData = useMemo(
    () =>
      firstNameValue === user.firstName &&
      lastNameValue === user.lastName &&
      avatarValue === user.avatar &&
      cityValue === user.city &&
      aboutValue === user.about,
    [firstNameValue, lastNameValue, avatarValue, cityValue, aboutValue, user]
  );

  const classNamesHint = useMemo(() => {
    const names = [Styles.submitHint];

    if (isShowHint) {
      names.push(Styles.visibleHint);
    }

    return names;
  }, [isShowHint]);

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
          {citySelect}
        </label>
        <label className={Styles.label} htmlFor="about-input">
          Краткая информация
          {aboutInput}
        </label>
      </div>
      <div className={Styles.buttons}>
        <Button type="submit" label="Сохранить" disabled={isMatchData} />
        <p className={classNamesHint.join(' ')}>Данные сохранены!</p>
      </div>
    </form>
  );
});

export default UserCardEdit;
