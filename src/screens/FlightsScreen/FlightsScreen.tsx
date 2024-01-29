import {View, Text, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import FlightList from '../../components/organisms/FlightList/FlightList';
import {useSelector} from 'react-redux';
import {FlightScreenStyles} from './FlightScreenStyles';
import Icon from '../../components/atoms/Icon/Icon';
import IconXml from '../../../assets/IconXml';
import {useNavigation} from '@react-navigation/native';
import {filterFlightsByAirline, sortObjectsByPrice} from './FlightScreenUtils';
import FilterModal from '../../components/molecules/FilterModal/FilterModal';
import SortModal from '../../components/molecules/SortModal/SortModal';
import {SortModalType} from '../../components/molecules/SortModal/SortModal.type';
import {FilterModalType} from '../../components/molecules/FilterModal/FilterModal.type';
import {AppRoute} from '../../navigation/Navigation.type';
import magicNumber from '../../theme/magicNumber';

const FlightsScreen = () => {
  const navigation = useNavigation();
  const {data}: any = useSelector(state => state);
  const [flights, setFlights] = useState(data?.data?.result);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showSortModal, setShowSortModal] = useState(false);

  useEffect(() => {
    if(data?.data?.result){
        setFlights(data?.data?.result)
    }
  },[data])

  const onSortClick = (sortData: SortModalType) => {
    if (sortData?.label === 'Clear All') {
      setFlights(data?.data?.result);
    } else {
      const sortedData = sortObjectsByPrice(data?.data?.result);
      setFlights(sortedData);
    }
    setShowSortModal(false);
  };

  const onFilterClick = (airline: FilterModalType) => {
    if (airline?.airlineCode === 'CL') {
      setFlights(data?.data?.result);
    } else {
      const filteredFlights = filterFlightsByAirline(
        data?.data?.result,
        airline?.airlineCode,
      );
      setFlights(filteredFlights);
    }
    setShowFilterModal(false);
  };

  const Header = () => {
    return (
      <View style={FlightScreenStyles.headerContainer}>
        <TouchableOpacity
          style={FlightScreenStyles.filterConatinerStyle}
          onPress={() => setShowSortModal(true)}>
          <Image
            source={require('../../../assets/images/sort.png')}
            style={FlightScreenStyles.imageStyle}
          />
          <Text style={FlightScreenStyles.filterTextStyle}>SORT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={FlightScreenStyles.filterConatinerStyle}
          onPress={() => setShowFilterModal(true)}>
          <Image
            source={require('../../../assets/images/filter.png')}
            style={FlightScreenStyles.imageStyle}
          />
          <Text style={FlightScreenStyles.filterTextStyle}>FILTER</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={FlightScreenStyles.container}>
      <TouchableOpacity
        style={FlightScreenStyles.backButtonContainer}
        onPress={() => navigation.navigate(AppRoute.Home)}>
        <Icon
          svgXml={IconXml.backIcon}
          height={magicNumber.backIconHeight}
          width={magicNumber.backIconWidth}
        />
      </TouchableOpacity>
      <Header />
      {data === undefined || data === null && <ActivityIndicator />}
      {flights?.length === 0 ? (
        <Text style={FlightScreenStyles.noFlightsText}>There are no flights available</Text>
      ) : (
        <FlightList data={flights} />
      )}
      <FilterModal
        isVisible={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        onSelection={airline => onFilterClick(airline)}
      />
      <SortModal
        isVisible={showSortModal}
        onClose={() => setShowSortModal(false)}
        onSelection={sortData => onSortClick(sortData)}
      />
    </View>
  );
};

export default FlightsScreen;
