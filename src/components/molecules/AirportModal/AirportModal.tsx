import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Pressable,
} from 'react-native';
import {AirportModalType} from './AirportModal.type';
import {AirportModalStyles} from './AirportModalStyles';
import {FlatList} from 'react-native-gesture-handler';
import {AirportList} from '../../../theme/constants';
import Icon from '../../atoms/Icon/Icon';
import IconXml from '../../../../assets/IconXml';

const AirportModal = (props: AirportModalType) => {
  const {isVisible, onClose, onSelection} = props;

  const AirportItem = item => {
    return (
      <TouchableOpacity style={AirportModalStyles.AirportDetailsContainer} onPress={() => onSelection?.(item?.item)}>
        <View style={AirportModalStyles.airportCodeStyle}>
          <Text style={AirportModalStyles.titleStyleTwo}>
            {item?.item?.cityCode}
          </Text>
          <Text style={AirportModalStyles.titleStyleThree}>
            {item?.item?.cityName}
          </Text>
        </View>
        <Text style={AirportModalStyles.titleStyleOne}>
          {item?.item?.airportName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={AirportModalStyles.centeredView}>
        <View style={AirportModalStyles.modalView}>
          <TouchableOpacity style={AirportModalStyles.headerStyle} onPress={onClose}>
            <Icon svgXml={IconXml.crossIcon} height={24} width={24} />
          </TouchableOpacity>
          <View style={AirportModalStyles.listContainerStyle}>
            <FlatList
              data={AirportList}
              keyExtractor={item => item.cityCode}
              renderItem={({item}) => <AirportItem item={item} />}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AirportModal;
