import React from 'react';
import Characters from './Characters';
import Splash from '../../components/Splash';

function Home() {
  const [showSplash, setShowSplash] = React.useState(false);

  const triggerSplash = async () => {
    await setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 3200);
  };

  React.useEffect(() => {
    // triggerSplash();
  }, []);

  if (showSplash) return <Splash />;

  return (
    <main>
      <Characters />
    </main>
  );
}

export default Home;
