import "../sass/components/_FormInput.scss";

interface Props {
  type: string;
  id: string;
  title: string;
  error?: string;
  value: string;
  onChange: (val: string) => void;
}

export function FormInput({ type, id, title, error, value, onChange }: Props) {
  return (
    <div className="form-input">
      <label htmlFor={id} className="label">
        {title}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={error ? "error" : ""}
      />
    </div>
  );
}
