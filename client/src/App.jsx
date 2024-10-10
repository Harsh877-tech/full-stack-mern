import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import CricketeerList from './components/CricketeerList';
import CricketeerForm from './components/CricketeerForm';
import ScriptureDisplay from './components/ScriptureDisplay';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Header = styled.h1`
  color: #4a4a4a;
  text-align: center;
  border-bottom: 2px solid #4a4a4a;
  padding-bottom: 10px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const NavLink = styled(Link)`
  margin: 0 10px;
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const AssignmentLabel = styled.h2`
  color: #2c3e50;
  margin-top: 30px;
  &::before {
    content: '→ ';
    color: #e74c3c;
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header>Full Stack MERN Application</Header>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cricketeers">Cricketeers</NavLink>
          <NavLink to="/add-cricketeer">Add Cricketeer</NavLink>
        </Nav>

        <Routes>
          <Route path="/" element={
            <>
              <AssignmentLabel>Assignment 2: Bible Verse</AssignmentLabel>
              <ScriptureDisplay />
            </>
          } />
          <Route path="/cricketeers" element={
            <>
              <AssignmentLabel>Assignment 1: Cricketeers</AssignmentLabel>
              <CricketeerList />
            </>
          } />
          <Route path="/add-cricketeer" element={
            <>
              <AssignmentLabel>Assignment 1: Add Cricketeer</AssignmentLabel>
              <CricketeerForm />
            </>
          } />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;