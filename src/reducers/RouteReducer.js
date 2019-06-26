//ma state de base
const initState={
   count:0 ,
   Asma:"salut"
}

//je l'attribut a la state qui va être importer
const reducer =(state=initState, action)=>{
    if(action.type=='Add'){
        return {...state, Asma: state.Asma="malika"}
    }
    if(action.type=='delete'){
        return {...state, Asma:state.count="saadiya" }
    }
    return state;

}
//j'export la const de state 
export default reducer