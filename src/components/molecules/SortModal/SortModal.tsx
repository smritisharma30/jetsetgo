import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {FilterList, sortList} from '../../../theme/constants';
import Icon from '../../atoms/Icon/Icon';
import IconXml from '../../../../assets/IconXml';
import { SortModalStyles } from './SortModalStyles';
import { SortModalItem, SortModalProps, SortModalType } from './SortModal.type';

const SortModal: React.FC<SortModalProps> = (props: SortModalProps): JSX.Element => {
  const {isVisible, onClose, onSelection} = props;

  const SortItem = (item: SortModalItem) => {
    return (
      <TouchableOpacity style={SortModalStyles.AirportDetailsContainer} onPress={() => onSelection?.(item?.item)}>
        <Text style={SortModalStyles.titleStyleOne}>
          {item?.item?.label}
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
      <View style={SortModalStyles.centeredView}>
        <View style={SortModalStyles.modalView}>
          <TouchableOpacity style={SortModalStyles.headerStyle} onPress={onClose}>
            <Icon svgXml={IconXml.crossIcon} height={24} width={24} />
          </TouchableOpacity>
          <View style={SortModalStyles.listContainerStyle}>
            <FlatList
              data={sortList}
              keyExtractor={item => item?.label}
              renderItem={({item}) => <SortItem item={item} />}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SortModal;
