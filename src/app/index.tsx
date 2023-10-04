import { useState, useEffect } from 'react';
import UserCard from '../widgets/user-card';
import type { User } from '../entities/user';
import { initialUserJson } from '../entities/user';
import { jsonFileParse } from '../shared/libs/helpers/jsonParse';
import './index.css';

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(jsonFileParse(initialUserJson));
  }, []);

  return <main>{user && <UserCard user={user} />}</main>;
}

export default App;
