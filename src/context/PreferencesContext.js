import {createContext} from 'react';

const PreferenceContext = createContext({
  theme: '',
  toggleTheme: () => {},
});

export default PreferenceContext;
