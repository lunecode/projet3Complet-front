//ma state de base
const initState={
   count:0 ,
   Asma:"salut"
}
//je l'attribut a la state qui va être importer
const reducer =(state=initState, action)=>{
    if(action.type=='Add'){
        return {Asma: state.Asma="malika"}
    }
    if(action.type=='delete'){
        return {Asma:state.count="saadiya" }
    }
    return state;

}
//j'export la const de state 
export default reducer