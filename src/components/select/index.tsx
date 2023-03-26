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
};

export default function Select({
  options,
  value,
  onChange,
  className,
  extraOptions,
}: Props) {
  return (
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
  );
}
