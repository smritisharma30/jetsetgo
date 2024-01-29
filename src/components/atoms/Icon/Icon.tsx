import React from 'react'
import { SvgXml } from 'react-native-svg'

import { IconProps } from './Icon.type'

const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element  => {
    const {svgXml, height, width} = props;
  return (
    <SvgXml xml={svgXml} height={height} width={width}/>
  )
}

export default Icon