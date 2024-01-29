import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundOne,
  },
  headerTitleStyle: {
    color: colors.blackOne,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 32,
    width: '80%'
  },
  headerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  preferenceContainer: {
    backgroundColor: colors.white,
    marginHorizontal: 16,
    borderRadius: 11,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 18,
    marginTop: 16
  },
  buttonStyles:{
    backgroundColor: colors.orangeOne,
    borderRadius: 10,
    paddingVertical: 15
  },
  searchTextStyle:{
    color: colors.grayTwo,
    textAlign: 'center',
    alignSelf:'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 19,
    fontWeight: '600',
    lineHeight: 30
  },
  departureContainer:{
    width: '48%'
}
});
