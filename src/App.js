import React, {useEffect} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {ApolloProvider} from '@apollo/react-hooks';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {I18nextProvider} from 'react-i18next';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {persistor, store} from './services/redux/store';
import apolloClient from './services/apollo/client';
import i18next from './services/i18n/i18next';
import Navigator from './Navigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={apolloClient}>
          <I18nextProvider i18n={i18next}>
            <StatusBar barStyle="dark-content" />
            <Navigator />
          </I18nextProvider>
        </ApolloProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
