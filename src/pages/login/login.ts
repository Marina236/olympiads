import {createEffect, createEvent, createStore, sample} from 'effector';
import {setAuthenticated, setProfile} from "../../components/user/model";

export type Login = {
  login: string,
  password: string
}

export const setError = createEvent<string | null>();
export const resetError = createEvent();
export const $authorisationError = createStore<string | null>(null)
    .on(setError, (_, error) => error)
    .reset([resetError]);

export const login = createEvent<Login>();

sample({
  clock: login,
  target: createEffect(({login, password}: Login) => {
    if ((login === 'teacher' && password === '12345')) {
      setProfile({
        fio: 'Наумов Николай Леонидович',
        role: 'teacher',
      })
    } else if (login === 'student' && password === '12345') {
      setProfile({
        fio: 'Смирнов Егор Сергеевич',
        role: 'student',
      })
    } else if (login === 'parent' && password === '12345') {
      setProfile({
        fio: 'Смирнова Екатерина Игоревна',
        role: 'parent',
      })
    } else {
      setError('Проверьте введенные данные!');
      return;
    }
    setError(null);
  }),
});
