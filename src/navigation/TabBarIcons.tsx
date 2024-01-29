import React from "react";
import Icon from "../components/atoms/Icon/Icon";
import IconXml from "../../assets/IconXml";

export const getTabBarIcon = (routeName: string, focused: boolean) => {
    let iconName: string;
    switch (routeName) {
      case 'Home':
        iconName = focused ? IconXml.homeActiveIcon : IconXml.homeInactiveIcon;
        break;
      case 'Offers':
        iconName = focused ? IconXml.offersActive : IconXml.offersInactive;
        break;
      case 'Profile':
        iconName = focused ? IconXml.profileActive : IconXml.profileInactive;
        break;
      default:
        iconName = IconXml.homeInactiveIcon
    }
  
    return <Icon svgXml={iconName} height={24} width={24}/>
  };