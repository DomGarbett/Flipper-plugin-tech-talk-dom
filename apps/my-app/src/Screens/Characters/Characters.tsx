import * as React from 'react';
import { View, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useGetAllCharactersQuery } from 'src/Services/APIQueries/RickMortyService';
import CharacterListItem from 'src/Components/CharacterListItem/CharacterListItem';
import { useMyFlipperPlugin } from '@dom-test-app/dom-flipper-plugin';
const Characters = ({ navigation }) => {
  const { data, isLoading } = useGetAllCharactersQuery();
  const { sendData } = useMyFlipperPlugin();
  sendData('characterList');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {isLoading ? (
        <Text>Loading your Characters...</Text>
      ) : (
        <View style={{ flex: 1, height: 100, width: 300 }}>
          <Text> All Characters</Text>
          <FlashList
            data={data.results}
            estimatedItemSize={24}
            renderItem={(item) => (
              <CharacterListItem
                character={item.item}
                onPress={() =>
                  navigation.navigate('CharacterInfo', {
                    character: item.item,
                  })
                }
              />
            )}
          ></FlashList>
        </View>
      )}
    </View>
  );
};

export default Characters;
