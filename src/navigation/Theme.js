import {DefaultTheme} from '@react-navigation/native';
import Colors from '../layout/Colors';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    backgroundColor: Colors.background,
  },
};
