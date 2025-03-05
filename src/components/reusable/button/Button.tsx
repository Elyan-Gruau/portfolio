export interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
