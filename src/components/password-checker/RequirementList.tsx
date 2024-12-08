import RequirementItem from '@/components/password-checker/RequirementItem';
import {
  hasMinLength,
  hasNumbers,
  hasSpecialCharacters,
  hasUpperAndLowerCase,
} from '@/utils/const';

type RequirementListProps = {
  password: string;
};

const RequirementList = ({ password }: RequirementListProps) => {
  const requirements = [
    {
      label: 'At least 8 characters',
      met: hasMinLength(password),
    },
    {
      label: 'Contains numbers',
      met: hasNumbers(password),
    },
    {
      label: 'Contains special characters',
      met: hasSpecialCharacters(password),
    },
    {
      label: 'Contains uppercase & lowercase',
      met: hasUpperAndLowerCase(password),
    },
  ];

  return (
    <ul className="mt-4 space-y-1">
      {requirements.map(({ label, met }) => (
        <RequirementItem key={label} label={label} met={met} />
      ))}
    </ul>
  );
};

export default RequirementList;
