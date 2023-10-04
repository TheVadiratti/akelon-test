import { useState, useEffect } from 'react';
import UserCard from '../widgets/user-card';
import type { User } from '../entities/user';
import jsonData from './data/initial-user.json';
import './index.css';

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(JSON.parse(JSON.stringify(jsonData)));
  }, []);

  return <main>{user && <UserCard user={user} />}</main>;
}

export default App;
