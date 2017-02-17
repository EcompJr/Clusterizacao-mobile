/**
 * Clusterização Mobile App
 * https://github.com/ecompjr
 * @Cássio Santos
 */
import {
    createRouter
} from '@exponent/ex-navigation'

import HomeScreen from './screens/Home';

const Router = createRouter(() => ({
    home: () => HomeScreen,
}));

export default Router;
