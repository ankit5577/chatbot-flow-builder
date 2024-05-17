import { useEffect, useState } from "react";
import FlowBuilder from "./components/FlowBuilder";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // fake 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // ? Show loading screen for 3 seconds
    return <LoadingScreen />;
  }

  return <FlowBuilder />;
}

export default App;
