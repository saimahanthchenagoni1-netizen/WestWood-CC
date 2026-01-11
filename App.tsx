
import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import TournamentFeed from './components/TournamentFeed';
import Leadership from './components/Leadership';
import Roster from './components/Roster';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <TournamentFeed />
      <Leadership />
      <Roster />
    </Layout>
  );
};

export default App;
