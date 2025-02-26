export default function TextArea({ onChange, value, placeholder }) {
  return (
    <div className="transition text-input">
      <textarea onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  );
}
