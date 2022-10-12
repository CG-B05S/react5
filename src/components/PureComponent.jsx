import React, { PureComponent} from 'react';

class ComponentPure extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            name: "Rakesh",
            };
    }

    Update = () => {
        
        this.setState({ name: "Gowda"})
        };

    render(){
        console.log("updated")
        return(
            <div>
                <h1 className="update"> Update:{this.state.name}</h1>
                <button className='Click' onClick={this.Update}>Click</button>
         
            </div>
        )
    }

}
export default ComponentPure;