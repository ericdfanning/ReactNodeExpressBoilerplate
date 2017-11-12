import React from 'react';
import App from './components/App.jsx';
import { render } from 'react-dom'

// By getting the <div> element in index.html by the id 'app', 
  // React can render it's elements to the DOM
render(<App />, document.getElementById('app')) 