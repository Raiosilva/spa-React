import React, { Component } from 'react';
import TweetUnit from '../../components/TweetUnit';
import photo from '../../images/fake_avatar.png';

class TweetListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentDidMount() {
    this.setState({
      tweets: [
        {
            id: 'x',
            body: 'Trending Topics Trending Trending Topics Trending Trending Topics Trending Trending Topics Trending',
            time: '17h',
            user: {
              id: 'x',
              name: 'Lorem Ipsun',
              photo: photo
            }
          }, {
            id: 'x',
            body: 'Trending Topics Trending Trending Topics Trending Trending Topics Trending Trending Topics Trending',
            time: '17h',
            user: {
              id: 'x',
              name: 'Raimundo Oliveira',
              photo: photo
          }
        }
      ]
    })
  }

  render() {
    return (
      <div>
        {this.state.tweets.map((tweet, i) =>
          <TweetUnit {...tweet} key={i} />
          )}
      </div>
    );
  }
}

export default TweetListContainer;