import './toggleSwitch.css';
export default function ToggleSwitch (props) {
    return (


        <div className="toggleSwitch" >
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider"></span>
            </label>
            <span>{props.name}</span>
        </div>

    );

//  onClick={props.onClick}
}