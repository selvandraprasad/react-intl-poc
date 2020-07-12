import React from 'react';
import './App.css';

import { FormattedHTMLMessage} from 'react-intl';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className="App-link"> React Internationlization example using react-intl package for English and Spanish</h3>
        <h3>
        <FormattedHTMLMessage
          id="app.text"
          defaultMessage="Displaying Default value {user}"
          description="Welcome message"
          values={{ user: "Sample user" }}/>
      </h3>
      
     
        
      </header>
    </div>
  );
}

export default App;
