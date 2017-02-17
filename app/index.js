/**
 * Clusterização Mobile App
 * https://github.com/ecompjr
 * @Cássio Santos
 */
import React, { Component } from 'react';
import {
    NavigationProvider,
    StackNavigation
} from '@exponent/ex-navigation';

import Router from './router';

export default class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
                <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    );
  }
}
