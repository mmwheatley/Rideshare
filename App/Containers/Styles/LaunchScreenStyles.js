import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.bigLogo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: 60,
    fontWeight: 'normal',
    fontFamily: 'Futura',
    textAlign: 'center'
  },
  loginRow: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  loginButtonWrapper: {
    flex: 1
  },
  loginButton: {
    width: '40%',
    justifyContent: "center",
    padding: 6
  },
  signUpButton: {
    width: '40%',
    justifyContent: "center",
    padding: 6
  },
  loginText: {
    textAlign: 'center',
    color: Colors.silver
  }
  
})
