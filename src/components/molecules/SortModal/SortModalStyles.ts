import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

export const  SortModalStyles= StyleSheet.create({
    centeredView: {
      flex: 1
    },
    modalView: {
      backgroundColor: colors.white,
      borderRadius: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width:'100%',
      height:'90%',
      marginTop: '10%'
    },
    listStyle:{
        borderWidth: 0.5,
        borderColor: colors.backgroundOne,
        width: '100%'
    },
    headerStyle:{
        position:'absolute',
        right: 16,
        top: 24
    },
    listContainerStyle:{
        marginTop: 50
    },
    titleStyleOne:{
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        fontWeight: '600',
        color: colors.black
    },
    titleStyleTwo:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        fontWeight: '400',
        color: colors.black,
        marginRight: 10
    },
    titleStyleThree:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        fontWeight: '300',
        color: colors.black
    },
    airportCodeStyle:{
        flexDirection:'row',
        alignItems: 'center'
    },
    AirportDetailsContainer:{
        paddingVertical: 12
    }
  });