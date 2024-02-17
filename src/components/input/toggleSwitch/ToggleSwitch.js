import './toggleSwitch.css';
export default function ToggleSwitch (props) {
    return (
        <div className="toggleSwitch" >
            <label className="switch">
                <input type="checkbox" id={"toggleSwitch_"+props.id}
                       disabled={props.disabled}
                       onClick={(e) => {
                           props.onClick();
                           e.stopPropagation()
                       }}
                />
                <span className="slider"></span>
            </label>
            <span>{props.name}</span>
        </div>

    );

//  onClick={props.onClick}
}