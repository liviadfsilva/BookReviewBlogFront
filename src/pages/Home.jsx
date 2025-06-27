import React from 'react';
import RecentPosts from "../components/RecentPosts";
import QuoteSection from '../components/QuoteSection';
import MusingsPosts from '../components/MusingsPosts';

const Home = () => {
  return (
    <div>
      <RecentPosts />
      <QuoteSection />
      <MusingsPosts />

    </div>
  );
};

export default Home;