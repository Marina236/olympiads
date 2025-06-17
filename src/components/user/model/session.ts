import {createEvent, restore, sample} from 'effector';
import {createBrowserHistory} from 'history';

export type User = {
  fio: string;
  role: 'student' | 'teacher' | 'parent';
}

export const setAuthenticated = createEvent<boolean>();
export const $authenticated = restore(setAuthenticated, false);

export const setProfile = createEvent<User | null>();
export const $profile = restore(setProfile, null);

export const logout = createEvent();

sample({
  clock: logout,
  fn: () => {
    localStorage.removeItem('user');
    createBrowserHistory().push('/');
    return false;
  },
  target: setAuthenticated,
});

sample({
  clock: setProfile,
  fn: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    return true;
  },
  target: setAuthenticated,
});
