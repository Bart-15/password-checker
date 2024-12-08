type RequirementItemProps = {
  label: string;
  met: boolean;
};

const RequirementItem = ({ label, met }: RequirementItemProps) => {
  return (
    <li
      className={`flex items-center gap-2 text-sm ${met ? 'text-green-600' : 'text-gray-500'}`}
    >
      {met ? '✓' : '◉'} {label}
    </li>
  );
};

export default RequirementItem;
