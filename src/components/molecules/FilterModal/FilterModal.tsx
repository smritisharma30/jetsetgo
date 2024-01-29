import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {FilterList} from '../../../theme/constants';
import Icon from '../../atoms/Icon/Icon';
import IconXml from '../../../../assets/IconXml';
import { FilterModalStyles } from './FilterModalStyles';
import { FilterModalItem, FilterModalProps } from './FilterModal.type';

const FilterModal: React.FC<FilterModalProps> = (props: FilterModalProps): JSX.Element => {
  const {isVisible, onClose, onSelection} = props;

  const FilterItem =(item: FilterModalItem) => {
    return (
      <TouchableOpacity style={FilterModalStyles.AirportDetailsContainer} onPress={() => onSelection?.(item?.item)}>
        <Text style={FilterModalStyles.titleStyleOne}>
          {item?.item?.airlineName}
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
      <View style={FilterModalStyles.centeredView}>
        <View style={FilterModalStyles.modalView}>
          <TouchableOpacity style={FilterModalStyles.headerStyle} onPress={onClose}>
            <Icon svgXml={IconXml.crossIcon} height={24} width={24} />
          </TouchableOpacity>
          <View style={FilterModalStyles.listContainerStyle}>
            <FlatList
              data={FilterList}
              keyExtractor={item => item?.airlineCode}
              renderItem={({item}) => <FilterItem item={item} />}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
