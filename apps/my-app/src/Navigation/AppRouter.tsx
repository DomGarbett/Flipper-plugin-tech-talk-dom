import { useAuth0 } from 'react-native-auth0';
import PinHandler from './PinHandler';
import { AuthStack } from './NavigationStacks';
import { useMyFlipperPlugin } from '@dom-test-app/dom-flipper-plugin';

const AppRouter = () => {
  const { user } = useAuth0();
  const isLoggedOut = !user;
  useMyFlipperPlugin();

  return isLoggedOut ? <AuthStack /> : <PinHandler />;
};

export default AppRouter;
