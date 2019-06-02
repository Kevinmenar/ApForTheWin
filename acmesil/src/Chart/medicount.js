import React, { Component } from 'react';

class MediCount extends Component {
    constructor(props){
        super(props)
    }

    render() 
    {
        return(
            <li key={this.props.key}>
                <div>
                    <div>
                        {this.props.medecine}
                    </div>
                    <div> 
                        {this.props.count}
                    </div>
                </div>
            </li>
        );
    }
}

export default MediCount;