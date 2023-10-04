import { User } from './types';

const userStore = {
  save: (user: User) => {
    window.localStorage.setItem('user', JSON.stringify(user));
  },
  get: () => {
    const user = window.localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  },
};

export default userStore;
