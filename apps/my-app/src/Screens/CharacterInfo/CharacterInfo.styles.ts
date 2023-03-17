import { Animated, ImageStyle, TextStyle, ViewStyle } from 'react-native';

const defaultHeaderContainer: Animated.Animated = {
  position: 'absolute',
  top: 0,
  zIndex: 1,
  width: '100%',
  overflow: 'hidden',
};

const headerContainer = (height, opacity) => ({
  ...defaultHeaderContainer,
  height: height,
  opacity: opacity,
});

const contentContainer = (contentPadding: number): ViewStyle => ({
  paddingTop: contentPadding,
});

const headerImage = (
  height: Animated.AnimatedInterpolation<number>
): Animated.WithAnimatedObject<ImageStyle> => ({
  width: '100%',
  position: 'absolute',
  height: height,
});

const scrollContent = (initalHeight): ViewStyle => {
  return { paddingTop: initalHeight };
};
const text: TextStyle = {
  fontSize: 20,
};

const nameText: TextStyle = {
  ...text,
  fontWeight: 'bold',
};

const tintedHeader = (height: Animated.AnimatedInterpolation<number>) => ({
  zIndex: 1,
  backgroundColor: 'rgba(0,0,0,0.3)',
  height: height,
});

const genderContainer: ViewStyle = {
  flexDirection: 'row',
};

const textContainer = { flex: 1, paddingHorizontal: 10 };
export const styles = {
  headerContainer,
  contentContainer,
  headerImage,
  scrollContent,
  tintedHeader,
  text,
  nameText,
  genderContainer,
  textContainer,
};
