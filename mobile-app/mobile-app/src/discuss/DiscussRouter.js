import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {DiscussPage} from './DiscussPage';
export const DiscussRouter = withRouter(props => <ModuleProto {...props}/>);

class ModuleProto extends Component {
    render() {
        let currentLocation = this.props.match.params.name;
        return(
        <DiscussPage></DiscussPage>
        )
    }
}