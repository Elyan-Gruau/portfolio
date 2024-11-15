import './toggleSwitch.css';
export interface ToggleSwitchProps {
  id: number;
  name: string;
  disabled: boolean;
  onClick: () => void;
}
export const ToggleSwitch = ({
  disabled,
  onClick,
  name,
  id,
}: ToggleSwitchProps) => {
  return (
    <div className="toggleSwitch">
      <label className="switch">
        <input
          type="checkbox"
          id={'toggleSwitch_' + id}
          disabled={disabled}
          onClick={(e) => {
            onClick();
            e.stopPropagation();
          }}
        />
        <span className="slider"></span>
      </label>
      <span>{name}</span>
    </div>
  );

  //  onClick={props.onClick}
};
