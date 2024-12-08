import { useState } from 'react';

import PasswordInput from '@/components/forms/PasswordInput';
import RequirementList from '@/components/password-checker/RequirementList';
import StrengthIndicator from '@/components/password-checker/StrengthIndicator';
import { evaluatePasswordStrength } from '@/utils/const';

const PasswordChecker = () => {
  const [password, setPassword] = useState('');
  const strength = evaluatePasswordStrength(password);

  return (
    <div className="p-6">
      <PasswordInput value={password} onChange={setPassword} />
      <StrengthIndicator strength={strength} />
      <RequirementList password={password} />
    </div>
  );
};

export default PasswordChecker;
