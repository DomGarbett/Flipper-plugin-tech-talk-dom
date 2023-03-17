import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

const container: ViewStyle = {
  backgroundColor: 'white',
  borderRadius: 12,
  width: 300,
  padding: 16,
  marginRight: 16,
};

const parentContainer: ViewStyle = {
  paddingVertical: 5,
};

const contentContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'flex-start',
};

const textContentContainer: ViewStyle = {
  flex: 1,
  gap: 4,
};

const imageContainer: ViewStyle = {
  flex: 1,
  alignItems: 'flex-end',
};

const imageThumbnail: ImageStyle = {
  borderRadius: 10,
  width: 124,
  height: 124,
};

const titleText: TextStyle = { fontSize: 16, fontWeight: '600' };

const speciesText: TextStyle = { fontSize: 14 };

export const styles = {
  parentContainer,
  container,
  contentContainer,
  textContentContainer,
  imageContainer,
  imageThumbnail,
  titleText,
  speciesText,
};
