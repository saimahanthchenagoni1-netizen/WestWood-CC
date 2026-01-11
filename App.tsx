import React from 'react';
import Layout from './components/Layout.tsx';
import Hero from './components/Hero.tsx';
import TournamentFeed from './components/TournamentFeed.tsx';
import InfoSection from './components/InfoSection.tsx';
import Leadership from './components/Leadership.tsx';
import Roster from './components/Roster.tsx';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <TournamentFeed />
      <InfoSection />
      <Leadership />
      <Roster />
    </Layout>
  );
};

export default App;