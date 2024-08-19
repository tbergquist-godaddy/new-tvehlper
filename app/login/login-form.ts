export type LoginState = {
  fields: {
    username: string;
    password: string;
  };
  form: string | null;
};

export const initialState = {
  fields: {
    username: '',
    password: '',
  },
  form: null,
};
