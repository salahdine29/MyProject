import React from 'react';
import ReactDOM from 'react-dom/client';

//call class search 
import App from './classeSearch/App';

//call function search
//import App from './functionSearch/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

