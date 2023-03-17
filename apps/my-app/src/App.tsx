import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Router from 'src/Navigation/Router';
import { persistor, store } from 'src/Services/Redux/store';
import { Auth0Provider } from 'react-native-auth0';
import Config from 'react-native-config';
const App = () => {
  return (
    <Auth0Provider domain={Config.AUTH_URL} clientId={Config.AUTH_CLIENT_ID}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </Auth0Provider>
  );
};

export default App;
