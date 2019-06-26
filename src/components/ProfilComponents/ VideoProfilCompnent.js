import React, { Component } from 'react';
import {connect} from 'react-redux'
class  VideoProfilCompnent extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div>
                <button onClick={this.props.Add}>
                    +
                </button>
                <p>result:{this.props.Asma}</p>
                <button onClick={this.props.delete}>
                    -
                </button>
            </div>
        );
    }
}
//recuperer la state
function getStateToProps(state){
    return{
        Asma:state.Asma
    }
}
//recuperer la function 
function getFunctionToprops(dispatch){
    return{
  Add:()=>dispatch({type:"Add"}),
  delete:()=>dispatch({type:"delete"})
    }
}

export default connect(getStateToProps, getFunctionToprops) (VideoProfilCompnent);