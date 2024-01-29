import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {InputStyles} from './InputStyles';
import Icon from '../../atoms/Icon/Icon';
import IconXml from '../../../../assets/IconXml';
import { InputProps } from './Input.type';

const Input: React.FC<InputProps> = (props: InputProps): JSX.Element => {
    const { label, icon, mainText, secondaryText, tertiaryText, onClick} = props;
  return (
    <TouchableOpacity style={InputStyles.container} onPress={onClick}>
      <Text style={InputStyles.labelStyle}>{label}</Text>
      <View style={InputStyles.detailsContainer}>
        {icon && <Icon svgXml={icon} height={25} width={25} />}
        <View style={InputStyles.textContainerStyle}>
          <View style={InputStyles.cityContainer}>
            { mainText && <Text style={InputStyles.titleStyleOne}>{mainText}</Text>}
            { secondaryText &&<Text style={InputStyles.titleStyleTwo}>{secondaryText}</Text>}
          </View>
         {tertiaryText && <Text style={InputStyles.titleStyleThree}>{tertiaryText}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Input;
