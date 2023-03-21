import "../styles/inputStyle.scss";

export function Input(props) {
  return (
    <div>
      <input {...props} className="inputStyle"></input>
    </div>
  );
}
