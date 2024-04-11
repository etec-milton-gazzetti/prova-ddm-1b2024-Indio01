import { StyleSheet } from 'react-native';

export default Style = StyleSheet.create({
    scrollView:{
        flex: 1,
      },
      content:{
        flex: 1,
        alignItems: 'center',
        // backgroundColor:'black',
        justifyContent:'center',
        marginTop: 50,
        margin: 20,
        width: 335,
        height: 535
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFF7FF'
      },
      buttonBurguer: {
        position: 'absolute',
        top: 20,
        left: 0,
        backgroundColor: '#234260',
        padding: 10,
        borderRadius: 5,
        textAlign:'center',
        alignItems:'center',
      },
      buttonTitle: {
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        backgroundColor: '#234260',
        padding: 10,
        borderRadius: 0,
        justifyContent: 'center',
        textAlign:'center',
        alignItems:'center',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '20',
      },
      title:{
        color:'black', 
        textAlign: 'center',
        fontSize: 20,
      },
      Image:{
        width: 225,
        height: 225,
        borderRadius: 60,
      }
    });