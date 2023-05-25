interface ICustomInput {
  label?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  id: string;
}

export const CustomInput: React.FC<ICustomInput> = ({
  label,
  value,
  type,
  placeholder,
  id,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        placeholder={placeholder ?? ""}
        type={type ?? "text"}
        value={value}
        className="mt-1 block w-full rounded p-3 py-2.5 text-sm border border-border-color outline-blue-500"
        id={id}
      />
    </div>
  );
};
