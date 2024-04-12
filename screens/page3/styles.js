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
        marginTop: 0,
        margin: 20,
        width: 335,
        height: 435,
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
      Texto:{
        paddingTop: 25,
        fontSize: 20,
        textAlign: 'center'
      },
      ImagemIlustrativa:{
        width: 400,
        height: 200
      },
      ImagemIlustrativaView:{
        position: 'absolute',
        bottom: 0,
        left: 0,
      },
    });