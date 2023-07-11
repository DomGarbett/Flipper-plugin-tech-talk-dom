import { useRef } from 'react';
import {
  View,
  Text,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import GenderIcon from 'src/Components/GenderIcon/GenderIcon';
import { Character } from 'src/Services/types';
import { styles } from './CharacterInfo.styles';

const CharacterInfo = ({ route }) => {
  const character: Character = route.params.character;
  const safeAreaTop = useSafeAreaInsets().top;

  const animateValue = useRef(new Animated.Value(0)).current;
  const initialHeaderHeight = 290;
  const minimumHeaderHeight = 70;
  const maxOutputHeight = safeAreaTop + minimumHeaderHeight;

  const heightValue = animateValue.interpolate({
    inputRange: [0, initialHeaderHeight],
    outputRange: [initialHeaderHeight, maxOutputHeight],
    extrapolate: 'clamp',
  });

  const opacityValue = animateValue.interpolate({
    inputRange: [0, initialHeaderHeight],
    outputRange: [1, 0],
  });
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollYval = event.nativeEvent.contentOffset.y * 1.5;
    animateValue.setValue(scrollYval);
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
        <Animated.View
          style={styles.headerContainer(heightValue, opacityValue)}
        >
          <Animated.View style={styles.tintedHeader(heightValue)} />
          <Animated.Image
            source={{ uri: character.image }}
            style={styles.headerImage(heightValue)}
          />
        </Animated.View>
        <Animated.ScrollView
          bounces={true}
          scrollEventThrottle={1}
          contentContainerStyle={styles.contentContainer(initialHeaderHeight)}
          onScroll={(event) => onScroll(event)}
        >
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>
              Character Name : {character.name}
            </Text>
            <Text style={styles.text}>
              Species : {character.species}
              {character.type ? ` - ${character.type}` : ''}
            </Text>
            <View style={styles.genderContainer}>
              <Text style={styles.text}>Gender : {character.gender}</Text>
              <GenderIcon gender={character.gender}></GenderIcon>
            </View>
            <Text style={styles.text}>Status : {character.status}</Text>
          </View>
        </Animated.ScrollView>
    </View>
  );
};

export default CharacterInfo;
