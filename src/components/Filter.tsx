import Select from 'react-select';

type Option = {
  value: string;
  label: string;
};

type FilterSelectProps = {
  label: string;
  options: Option[];
  value: Option | null;
  onChange: (option: Option | null) => void;
};

export default function Filter({
  label,
  options,
  value,
  onChange,
}: FilterSelectProps) {
  return (
    <div className="mb-4 w-48 flex items-center gap-2">
      <label >{label}</label>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder={`${label} 선택`}
        isClearable
        styles={{ container: (provided) => ({ ...provided, flex: 1 }) }}
      />
    </div>
  );
}
