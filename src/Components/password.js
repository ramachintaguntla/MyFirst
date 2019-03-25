import React,{Component} from 'react';

class PasswordComponent extends React.Component{
    render(){
        return (
            <div className="col-sm-6">
                <input id="password" type="password" placeholder="Password" ></input>
            </div>
        )
    }
}

export default PasswordComponent