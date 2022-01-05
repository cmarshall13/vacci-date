import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { UserProvider } from './utils/GlobalState'

import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import Matches from "./pages/Matches";

// Have to change http link when we deploy
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <UserProvider>
           <Nav />
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/signup" element={<Signup/>} />
              <Route exact path="/signup" element={<Dashboard/>} />
              <Route exact path="/profile" element={<Profile/>} />
              <Route exact path="/dashboard" element={<Dashboard/>}/>
              <Route exact path="/matches" element={<Matches/>}/>
              <Route element={NotFound} />
            </Routes>
          </UserProvider>
        </div>
      </Router>

    </ApolloProvider>
   
  );
}

export default App;
