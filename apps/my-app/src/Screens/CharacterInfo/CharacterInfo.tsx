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
import { styles } from './CharacterInfo.styles';
import { useGetCharacterByIdQuery } from 'src/Services/APIQueries/RickMortyService';

const CharacterInfo = ({ route }) => {
  const { data, isLoading } = useGetCharacterByIdQuery(
    route.params.character.id
  );

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

  return !isLoading ? (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Animated.View style={styles.headerContainer(heightValue, opacityValue)}>
        <Animated.View style={styles.tintedHeader(heightValue)} />
        <Animated.Image
          source={{ uri: data.image }}
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
          <Text style={styles.nameText}>Character Name : {data.name}</Text>
          <Text style={styles.text}>
            Species : {data.species}
            {data.type ? ` - ${data.type}` : ''}
          </Text>
          <View style={styles.genderContainer}>
            <Text style={styles.text}>Gender : {data.gender}</Text>
            <GenderIcon gender={data.gender}></GenderIcon>
          </View>
          <Text style={styles.text}>Status : {data.status}</Text>
        </View>
      </Animated.ScrollView>
    </View>
  ) : null;
};

export default CharacterInfo;
