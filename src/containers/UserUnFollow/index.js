import React, { Component } from 'react';
import { Icon } from 'react-materialize';

import InvisibleButton from '../../components/common/InvisibleButton';


class UserUnFollow extends Component {
 unfollow () {
   console.log('unfollow')
}

 render() {
   return (
     <InvisibleButton onClick={this.unfollow}>
       <Icon small className="grey-text text-darken-2">star_border</Icon>
     </InvisibleButton>
  );
}
}

export default UserUnFollow;