import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export const FlightScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  headerContainer: {
    backgroundColor: colors.white,
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 8
  },
  filterConatinerStyle:{
    alignSelf:'center'
  },
  imageStyle:{height: 24, width: 24, alignSelf:'center'},
  filterTextStyle:{
    color: colors.black,
    textAlign:'center',
    fontFamily:'Montserrat-Regular',
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '500',
    letterSpacing: 0.2
  },
  backButtonContainer:{
    marginHorizontal: 22,
    marginVertical: 12
  },
  noFlightsText:{
    color: colors.orangeOne,
    textAlign:'center',
    fontFamily:'Montserrat-Medium',
    fontSize: 32,
    fontWeight: '500',
    marginTop: '40%'
  }
});
