import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

import { PostHogProvider} from 'posthog-js/react'

const options = {
  api_host: "https://us.i.posthog.com",
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostHogProvider 
      apiKey={'phc_cOlskuqwCM4PPtUMy19lYschP45UP4WdHI6djKMRc6A'}
      options={options}
    >
      <App />
    </PostHogProvider>
  </React.StrictMode>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
