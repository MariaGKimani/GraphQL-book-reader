import React from 'react';
import { createRoot } from 'react-dom/client';  // Updated import path
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4002/graphql',
  cache: new InMemoryCache(),
});
const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);