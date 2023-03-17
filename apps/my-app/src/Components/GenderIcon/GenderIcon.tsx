import { View, ViewStyle } from 'react-native';
import { Gender } from 'src/Services/types';

interface Props {
  gender: Gender;
}

const GenderIcon = (props: Props) => {
  switch (props.gender) {
    case Gender.Male:
      return <View style={styleCircle('blue')}></View>;
    case Gender.Female:
      return <View style={styleCircle('pink')}></View>;
    case Gender.Genderless:
      return <View style={styleCircle('orange')}></View>;
    case Gender.Unknown:
    default:
      return <View style={styleCircle('red')}></View>;
  }
};

export default GenderIcon;

const styleCircle = (colour: any) => {
  return {
    marginLeft: 15,
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: colour,
  };
};
