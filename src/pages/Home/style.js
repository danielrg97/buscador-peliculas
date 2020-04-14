import { makeStyles } from '@material-ui/styles';

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default makeStyles({
    container:{
        ...centeredStyleObj,
        flexDirection: 'column',
        height: '100vh'
    },
    cardContainer:{
        ...centeredStyleObj,
        width:400,
        height:200,
        padding:'2rem',
        flexDirection:'column'
    },
    title:{
        fontSize: '3rem'
    },
    titleGridContainer:{
        ...centeredStyleObj
    },
    textFieldSearch:{
        width: '90%'
    },
    searchButton:{
        marginLeft: '.5rem'
    },
    buttonContainer:{
        marginTop: '.5rem'
    },
    movieIcon:{
        fontSize: '3rem'
    }
});