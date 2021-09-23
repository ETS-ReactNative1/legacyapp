import { StyleSheet } from 'react-native'

const MIDNIGHT_BLUE = '#020433'
const MINT_BLUE = '#0F73EE'
const ICY_GREEN = '#08C299'
const LIGHT_GRAY = '#404B69'
const CANDY_PINK = '#C644FC'
const XLIGHT_GRAY = '#ccd7e0'

export default StyleSheet.create({
  //container
  cx: {
    flex: 1,
    backgroundColor: 'white',
  },
  cs: {
    backgroundColor: '#08C299',
    height: 200,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 3,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  cardShadow: {
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  row: {
    marginHorizontal: 15,
  },

  //form
  buttonInline: {
    alignSelf: 'flex-start',
  },

  buttonBlock: {
    borderRadius: 0,
  },

  button: {
    backgroundColor: LIGHT_GRAY,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    fontSize: 18,
    color: MIDNIGHT_BLUE,
    marginBottom: 2,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: XLIGHT_GRAY,
    paddingVertical: 5,
  },
  inputText: {
    fontSize: 18,
    color: MIDNIGHT_BLUE,
    marginBottom: 2,
    fontWeight: 'bold',
    borderBottomColor: XLIGHT_GRAY,
    paddingVertical: 5,
  },

  primary: {
    color: MIDNIGHT_BLUE,
  },

  secondary: {
    color: MINT_BLUE,
  },

  gray: {
    color: XLIGHT_GRAY,
  },

  // background
  bgDefault: {
    backgroundColor: LIGHT_GRAY,
  },

  bgPrimary: {
    backgroundColor: MIDNIGHT_BLUE,
  },

  bgSecondary: {
    backgroundColor: MINT_BLUE,
  },

  bgSuccess: {
    backgroundColor: ICY_GREEN,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
  },

  // flex
  fr: {
    flexDirection: 'row',
  },

  //formatting
  b: {
    fontWeight: 'bold',
  },
  i: {
    fontWeight: 'bold',
  },

  //text styles
  display: {
    fontSize: 30,
    fontWeight: 'bold',
    color: MIDNIGHT_BLUE,
    marginBottom: 2,
  },
  title: {
    fontSize: 22,
    color: MIDNIGHT_BLUE,
    marginBottom: 2,
  },
  base: {
    fontSize: 18,
    color: MIDNIGHT_BLUE,
    marginBottom: 2,
  },
  label: {
    fontSize: 14,
    color: LIGHT_GRAY,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  tag: {
    fontSize: 12,
    color: ICY_GREEN,
    marginBottom: 2,
  },

  radioGroup: {
    backgroundColor: 'white',
    borderRadius: 6,
    flexDirection: 'row',
    marginBottom: 5,
    padding: 10,
    alignItems: 'center',
  },

  filled: {
    backgroundColor: 'white',
    borderColor: 'white',
  },

  outline: {
    borderColor: 'white',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    right: 110,
    top: -80,
    position: 'absolute',
    borderWidth: 10,
    borderColor: 'white',
  },
})

// export default COLORS = {
//   darkblue: MIDNIGHT_BLUE,
//   lightblue: LIGHT_BLUE,
//   green: ICY_GREEN,
//   gray: LIGHT_GRAY,
//   pink: CANDY_PINK
// };
