import "../styles/buttonStyle.scss";

export function Button(props) {
  return (
    <div>
      <button className="buttonStyle">{props.buttonName}</button>
    </div>
  );
}
