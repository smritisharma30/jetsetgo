import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

export const InputStyles = StyleSheet.create({
    container:{
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: colors.greyThree,
        paddingHorizontal: 10,
        marginVertical: 9,
        height: 50,
        paddingVertical: 6
    },
    labelStyle:{
        position:'absolute',
        top:-16,
        left: 10,
        backgroundColor:colors.white,
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        lineHeight: 30,
        fontWeight: '500',
        color: colors.greyFour
    },
    detailsContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    cityContainer:{
        flexDirection:'row',
        alignItems:'center',

    },
    textContainerStyle:{
        marginLeft: 11
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
        marginLeft: 4
    },
    titleStyleThree:{
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        fontWeight: '300',
        color: colors.black
    }
})