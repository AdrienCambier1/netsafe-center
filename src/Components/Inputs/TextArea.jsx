export default function TextArea({ onChange, value, placeholder }) {
  return (
    <div className="transition text-input w-full overflow-hidden">
      <textarea onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  );
}
