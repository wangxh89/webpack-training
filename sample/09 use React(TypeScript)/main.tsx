import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

import './main.css';

class Button extends Component {
  render() {
    return <h1>Hello,Webpack2</h1>
  }
}

render(<Button/>, window.document.getElementById('app'));