import "./CheckBox.css";

export function CheckBox(props)
{
    return (
        <div className="checkbox">
            <label >{props.label}</label>
            <input type="checkbox" name={props.name}/>
        </div>
    );
}