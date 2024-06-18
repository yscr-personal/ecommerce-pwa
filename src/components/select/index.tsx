type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  extraOptions?: Option[];
  label?: string;
};

export default function Select({
  label,
  options,
  value,
  onChange,
  className,
  extraOptions,
}: Readonly<Props>) {
  return (
    <div className="flex flex-row items-center justify-end text-sm">
      {
        label &&
        <span className="mr-2">{label}:</span>
      }
      <select
        className={className}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        {extraOptions?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
