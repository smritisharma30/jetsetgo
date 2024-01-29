import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {fetchData} from '../../redux/store';
import IconXml from '../../../assets/IconXml';
import {FlightScreenStyles} from '../FlightsScreen/FlightScreenStyles';
import {HomeScreenStyles} from './HomeScreenStyles';
import Input from '../../components/molecules/Input/Input';
import { useNavigation } from '@react-navigation/native';
import AirportModal from '../../components/molecules/AirportModal/AirportModal';
import FlightList from '../../components/organisms/FlightList/FlightList';
import { AirportList } from '../../theme/constants';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [departureData, setDepartureData] = useState(AirportList[0]);
  const [arrivalData, setArrivalData] = useState(AirportList[0])
  const [showArrivalModal, setShowArrivalModal] = useState(false);
  const [showDepartureModal, setShowDepartureModal] = useState(false);
  

  const getFlightResults = () => {
    dispatch(fetchData());
    navigation.navigate('Flights')
  };

  const onArrivalModalClose = () => {
    setShowArrivalModal(false);
  }

  const onDepartureModalClose = () => {
    setShowDepartureModal(false);
  }

  const Header = () => {
    return (
      <View style={HomeScreenStyles.headerContainer}>
        <Text style={HomeScreenStyles.headerTitleStyle}>Book Flight</Text>
        <Image source={require('../../../assets/images/menu.png')} />
      </View>
    );
  };

  return (
    <View style={FlightScreenStyles.container}>
      <Header />
      <View style={HomeScreenStyles.preferenceContainer}>
        <Input label="From" icon={IconXml.takeoff} onClick={() => setShowArrivalModal(true)} mainText={arrivalData?.cityName} secondaryText={arrivalData?.cityCode} tertiaryText={arrivalData?.airportName}/>
        <Input label="To" icon={IconXml.landing} onClick={() => setShowDepartureModal(true)} mainText={departureData?.cityName} secondaryText={departureData?.cityCode} tertiaryText={departureData?.airportName}/>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View style={HomeScreenStyles.departureContainer}>
            <Input label="Departure" icon={IconXml.calender} mainText="15/07/2022"/>
          </View>
          <View style={HomeScreenStyles.departureContainer}>
            <Input label="Return" mainText="+ Add Return"/>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View style={HomeScreenStyles.departureContainer}>
            <Input label="Traveller" mainText="1 Adult"/>
          </View>
          <View style={HomeScreenStyles.departureContainer}>
            <Input label="Class"  mainText="Economy"/>
          </View>
        </View>
        <TouchableOpacity
          style={HomeScreenStyles.buttonStyles}
          activeOpacity={0.5}
          onPress={getFlightResults}>
          <Text style={HomeScreenStyles.searchTextStyle}>Search</Text>
        </TouchableOpacity>
      </View>
      <AirportModal onClose={onArrivalModalClose} isVisible={showArrivalModal} onSelection={(item) => {
        setArrivalData(item);
        setShowArrivalModal(false);
      }}/>
      <AirportModal onClose={onDepartureModalClose} isVisible={showDepartureModal} onSelection={(item) => {
        setDepartureData(item);
        setShowDepartureModal(false);
      }}/>
    </View>
  );
};

export default HomeScreen;
