import { useState, useEffect } from 'react';
import UserCard from '../widgets/user-card';
import type { User } from '../entities/user';
import { initialUserJson, userStore } from '../entities/user';
import { jsonFileParse } from '../shared/libs/helpers/jsonParse';
import './index.css';

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // при загрузке приложения достаём сохраненного пользователя из localStorage
    const savedUser = userStore.get();
    if (savedUser) {
      setUser(savedUser);
    }
    // если его нет, устанавливаем дефолтного пользователя
    else {
      setUser(jsonFileParse(initialUserJson));
    }
  }, []);

  useEffect(() => {
    // при обновлении данных о пользователе сохраняем в localStorage
    if (user) {
      userStore.save(user);
    }
  }, [user]);

  return <main>{user && <UserCard user={user} setUser={setUser} />}</main>;
}

export default App;
