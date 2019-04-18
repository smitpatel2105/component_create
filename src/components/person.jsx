import React, { Component } from 'react';

class Person extends Component {
    state = {  }
    render() { 
        return (  
            <div className="container">
                <div classname="col-md-10">
                <h4>Regestration Form</h4>
                    <div classname="form-group">
                        <label classname="control-label">Enter your full name :</label>
                        <input input="text" classname="form-control" />
                    </div>
                    <div classname="form-group">
                        <label classname="control-label">Enter your age :</label>
                        <input input="text" classname="form-control" />
                    </div>
                    <div classname="form-group">
                        <label classname="control-label">Gender :</label>
                        <input input="checkbox" classname="form-check" value="select your gender" checked="male, female"/>
                    </div>
                    <div classname="form-group">
                        <label classname="control-label">Intrested in:</label>
                        <select>
                            <option value="0">Java</option>
                            <option value="1">.Net</option>
                        </select>
                        </div>
                    <button classname="btn-primary">Submit</button>
                </div>
            </div>
        );
    }
}
 
export default Person;