import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/SearchBar';
// component
const App = () => {
  // jsx (returned html) (only return top level div that includes everything in here)
  return (
    <div>
      <SearchBar />
    </div>
  );
}
// connects react to regular html in the index.html file
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
