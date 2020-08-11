import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hostel: [],
    };
  }

  componentDidMount() {
    this.getHostels();
  }

  getHostels() {
    Axios.get('api/house/', {
      params: {
        id: 50,
      },
    })
      .then((res) => {
        console.log(res, 'res in getHostels')
        this.setState({ hostel: res.body });
        this.componentDidMount();
      })
      .catch((err) => err);
  }

  render() {
    return (
      <div id="property-info">
        {this.state.hostel}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
