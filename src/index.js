import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider,useQuery, gql , createHttpLink}  from "@apollo/client"
import UserContext from './context/UserContext';

const link = createHttpLink({
  uri:'http://localhost:8000/graphql',
  credentials:'include'
})

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <UserContext>
           <App />
    </UserContext>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
