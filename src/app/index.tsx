import { useState, useEffect } from 'react';
import UserCard from '../widgets/user-card';
import type { User } from '../entities/user';
import { initialUserJson } from '../entities/user';
import './index.css';

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(JSON.parse(JSON.stringify(initialUserJson)));
  }, []);

  return <main>{user && <UserCard user={user} />}</main>;
}

export default App;
