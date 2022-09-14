import React from 'react';
import ReactDOM from 'react-dom/client';

import VoteComponent from './VoteComponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VoteComponent 
        question="Do you like react?"
        options={["yes", "no"]} 
    />
    <VoteComponent 
        question="Do you like angular?" 
        options={["yes", "no", "very much"]} 
    />
  </React.StrictMode>
);

reportWebVitals();
