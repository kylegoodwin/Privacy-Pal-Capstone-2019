import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {stories} from './stories';
import {StoryPage} from './StoryPage';

export const StoryRouter = withRouter(props => <ModuleProto {...props}/>);

class ModuleProto extends Component {
    render() {
        let currentLocation = this.props.match.params.name;
        console.log(currentLocation);
        return(
        <StoryPage stories={stories[currentLocation]}></StoryPage>
        )
    }
}