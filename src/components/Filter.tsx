type FilterProps = {
  label: string;
  options: string[];
  select: string;
  // onSelect?: (value: string) => void; // 필요하면 활성화
};

export default function Filter({ label, options, select }: FilterProps) {
  return (
    <div>
      <h3>{label}</h3>
      <select value={select}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}