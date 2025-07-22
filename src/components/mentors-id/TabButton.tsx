type TabButtonProps = {
  tabKey: string;
  label: string;
  activeKey: string;
  onChange: (key: string) => void;
};

export default function TabButton({ tabKey, label, activeKey, onChange }: TabButtonProps) {
  const isActive = tabKey === activeKey;

  return (
    <button
      className={`flex-1 text-center pb-1 ${isActive ? 'border-b-2 border-b-yellow-800' : ''}`}
      onClick={() => onChange(tabKey)}>
      {label}
    </button>
  );
}