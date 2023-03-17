import { View, Text, Image } from 'react-native';
import { Character } from 'src/Services/types';
import { styles } from 'src/Components/CharacterListItem/CharacterListItem.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  character: Character;
  onPress: () => void;
}

const CharacterListItem = (props: Props) => {
  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <View style={styles.contentContainer}>
          <View style={styles.textContentContainer}>
            <Text style={styles.titleText}>{props.character.name}</Text>
            <Text style={styles.speciesText}>{props.character.species}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: props.character.image }}
              style={styles.imageThumbnail}
            ></Image>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterListItem;
