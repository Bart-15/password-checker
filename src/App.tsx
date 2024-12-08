import './App.css';

import { useState } from 'react';

import PasswordInput from '@/components/password-checker/PasswordInput';

function App() {
  const [password, setPassword] = useState('');
  return (
    <div className="mx-auto flex">
      <div className="w-[400px] overflow-hidden rounded p-6 shadow-lg">
        <PasswordInput value={password} onChange={setPassword} />
      </div>
    </div>
  );
}

export default App;
