import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import {FlightCardStyles} from './FlightCardStyles';
import {FlightCardProps} from './FlightCard.type';
import {getFormattedTime} from '../../../utils/getFormattedTime';
import {getFormattedPrice} from '../../../utils/getFormattedPrice';
import {getFlightLogo} from './FlightCardUtils';

const FlightCard: React.FC<FlightCardProps> = (
  props: FlightCardProps,
): JSX.Element => {
  const {cardData} = props;

  return (
    <TouchableOpacity style={FlightCardStyles.container} activeOpacity={0.5}>
      <View style={FlightCardStyles.topSectionContainer}>
        <View style={FlightCardStyles.topLeftContainer}>
          <Image
            source={getFlightLogo(
              cardData?.displayData?.airlines[0]?.airlineName,
            )}
          />
          <Text
            style={
              FlightCardStyles.textStyleTitle
            }>{` . ${cardData?.displayData?.airlines[0]?.airlineCode}${cardData?.displayData?.airlines[0]?.flightNumber}`}</Text>
        </View>
        <Text style={FlightCardStyles.totalDurationTextStyle}>
          {cardData?.displayData?.totalDuration}
        </Text>
      </View>
      <View style={FlightCardStyles.centerContainer}>
        <View>
          <Text style={FlightCardStyles.departureTime}>
            {getFormattedTime(cardData?.displayData?.source?.depTime)}
          </Text>
          <Text style={FlightCardStyles.airportCodeStyle}>
            {cardData?.displayData?.source?.airport?.airportCode}
          </Text>
        </View>
        <View>
          <Text style={FlightCardStyles.stopTextStyle}>
            {cardData?.displayData?.stopInfo}
          </Text>
          <Image
            source={require('../../../../assets/images/flightsymbol.png')}
            style={FlightCardStyles.imageStyle}
          />
        </View>
        <View>
          <Text style={FlightCardStyles.departureTime}>
            {getFormattedTime(cardData?.displayData?.destination?.arrTime)}
          </Text>
          <Text style={FlightCardStyles.airportCodeStyle}>
            {cardData?.displayData?.destination?.airport?.airportCode}
          </Text>
        </View>
      </View>
      <Text style={FlightCardStyles.fareTextStyle}>
        {getFormattedPrice(cardData?.fare)}
      </Text>
    </TouchableOpacity>
  );
};

export default FlightCard;
