import React, { useState, useEffect } from 'react';

const initState: { a: number | null } = { a: 5 };

const App: React.FC = () => {
  const [state, setState] = useState(initState);

  useEffect(() => {
    initState.a = null;
  }, []);

  const increment = () => setState((prev) => ({ ...prev, a: prev.a + 1 }));

  return (
    <div>
      <p>{state.a}</p>
      <button onClick={increment}>Прибавить</button>
    </div>
  );
};

export default App;