import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useGetAllCharactersQuery } from 'src/Services/APIQueries/RickMortyService';
import CharacterListItem from 'src/Components/CharacterListItem/CharacterListItem';
import { useMyFlipperPlugin } from '@dom-test-app/dom-flipper-plugin';
import { ACPCore } from '@adobe/react-native-acpcore';

const Characters = ({ navigation }) => {
  const { data, isLoading } = useGetAllCharactersQuery();
  const { sendAnalyticsData } = useMyFlipperPlugin();

  useEffect(() => {
    sendAnalyticsData('characterList', 'eventAction');

    // ACPCore.trackAction('eventAction', {
    //   buttonClicks: 'characterList',
    //   accounttype: 'Full',
    // });
  }, []);
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
                onPress={() => {
                  sendAnalyticsData(
                    `characterInfo ${item.item.name} cta`,
                    'buttonClicks'
                  );
                  navigation.navigate('CharacterInfo', {
                    character: item.item,
                  });
                }}
              />
            )}
          ></FlashList>
        </View>
      )}
    </View>
  );
};

export default Characters;
