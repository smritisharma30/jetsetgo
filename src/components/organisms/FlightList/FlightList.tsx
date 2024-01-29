import {View, FlatList} from 'react-native';
import React from 'react';
import FlightCard from '../../molecules/FlightCard/FlightCard';
import {FlightCardDetailsType} from '../../molecules/FlightCard/FlightCard.type';
import {FlightListPropsType} from './FlightList.type';
import colors from '../../../theme/colors';
import { FlightListStyles } from './FlightListStyles';

const FlightList: React.FC<FlightListPropsType> = (
  props: FlightListPropsType,
) => {
  const {data} = props;
  return (
    <View style={FlightListStyles.container}>
      <FlatList
        data={data}
        keyExtractor={(item: FlightCardDetailsType) => item.id}
        renderItem={({item}) => <FlightCard cardData={item} />}
      />
    </View>
  );
};

export default FlightList;
