import './App.css';

import PasswordChecker from '@/components/password-checker/PasswordChecker';

function App() {
  return (
    <div className="mx-auto flex">
      <div className="w-[400px] rounded shadow-lg">
        <PasswordChecker />
      </div>
    </div>
  );
}

export default App;
