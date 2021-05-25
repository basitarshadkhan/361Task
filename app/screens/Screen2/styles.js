import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAEDED',
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  ellipsis: {
    resizeMode: 'contain',
    width: 30,
    height: 20,
  },
  skipText: { position: 'absolute', right: 20, fontWeight: 'bold' },
  subContainer: { marginHorizontal: '5%', marginTop: 30, width: '90%' },
  holaText: { fontSize: 40, fontWeight: 'bold' },
  assistText: { color: '#5c5c5c', fontSize: 16 },
  cardContainer: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 170,
    paddingHorizontal: 15,
    paddingVertical: 40,
  },
  optionsIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    borderRadius: 50,
    backgroundColor: '#FCD9D9',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  checkedIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    // alignSelf: 'flex-end',
  },
  titleText: { fontSize: 24, fontWeight: '500', marginTop: 15 },
  descriptionText: { color: '#5c5c5c', marginTop: 15, fontSize: 14 },
  continueBtnContainer: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCD9D9',
    borderRadius: 10,
    marginVertical: 30,
  },
  nextIconText: {
    resizeMode: 'contain',
    width: 13,
    height: 13,
    position: 'absolute',
    right: 10,
  },
});

export default styles;
