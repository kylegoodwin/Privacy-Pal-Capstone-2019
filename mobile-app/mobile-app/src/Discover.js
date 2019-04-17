import React, { Component } from 'react';
import { DiscoverCard } from './App'

export class Discover extends Component {
    render() {
        return (
        <div className="cards-container">
      <DiscoverCard  imageName="one" title="Social Media" linkither='/CardOne'/>
      <DiscoverCard imageName="two" title="Internet Basics" />
      <DiscoverCard imageName="three" title="Games"/>
      <DiscoverCard imageName="four" title="Location Services"/>
      <DiscoverCard imageName="five" title="Online Identity"/>
      <DiscoverCard imageName="one" title="Social Media"/>
      <DiscoverCard imageName="two" title="Internet Basics"/>
      <DiscoverCard imageName="three" title="Games"/>
      <DiscoverCard imageName="four" title="Location Services"/>
      <DiscoverCard imageName="five" title="Online Identity"/>
      </div>
        )
    }
}


