import type { TPasswordStrength } from '@/types/const.types';
import { getStrengthPercentage } from '@/utils/const';

const StrengthIndicator = ({
  strength,
  password,
}: {
  strength: TPasswordStrength;
  password: string;
}) => {
  const colors = {
    weak: 'bg-red-500',
    medium: 'bg-yellow-500',
    strong: 'bg-green-500',
  };

  let content = password ? (
    <div className="mt-2">
      <div className="h-2 w-full rounded bg-gray-200">
        <div
          className={`h-full rounded transition-all duration-300 ${colors[strength]}`}
          style={{ width: getStrengthPercentage(strength) }}
        />
      </div>
      <p className="mt-1 text-sm capitalize">{strength} password</p>
    </div>
  ) : null;

  return content;
};

export default StrengthIndicator;
