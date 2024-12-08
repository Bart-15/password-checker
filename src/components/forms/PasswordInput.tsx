type PasswordInputProps = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

const PasswordInput = ({ value, onChange }: PasswordInputProps) => {
  return (
    <>
      <label
        htmlFor="password"
        className="mb-2 block text-sm font-light text-gray-900 dark:text-white"
      >
        Password
      </label>
      <input
        id="password"
        type="password"
        value={value}
        className="mb-3 w-full rounded border p-2"
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default PasswordInput;
