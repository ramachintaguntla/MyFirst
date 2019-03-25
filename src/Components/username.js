import React,{Component} from 'react';

class UsernameComponent extends React.Component{
    constructor(props){
        super(props);
        console.log("in constructor");
        this.state ={
            required : true
        }
    }
    
    componentDidMount(){
        console.log("in componentDidMount");
        console.log(this.props);
        let {type} = this.props;
        this.setState({
            typeInState: type
        })
    }
    componentDidUpdate(){
        console.log("in componentDidUpdate");
        console.log(this.props);
    }
    
    render(){
        console.log("in render");
        console.log(this.state)
        return (
            <div className="col-sm-6">
                <input id="username" placeholder={this.props.placeholder} type={this.state.typeInState}></input>
            </div>
        )
    }
}

export default UsernameComponent