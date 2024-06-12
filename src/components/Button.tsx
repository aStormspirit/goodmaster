const Button = ({
  rotate,
  onClick,
  className,
}: {
  rotate?: number;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <div className={`border-2 border-white ${className}`} onClick={onClick}>
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform={`rotate(${rotate || 0})`}
      >
        <path
          d="M21 10.5382H2.5M2.5 10.5382C2.5 10.5382 5.56352 13.0728 7.32762 14.9206C9.09171 16.7683 11.5115 19.9772 11.5115 19.9772M2.5 10.5382C2.5 10.5382 5.56352 8.00353 7.32762 6.15575C9.09171 4.30797 11.5115 1.09912 11.5115 1.09912"
          stroke="white"
        />
      </svg>
    </div>
  );
};

export default Button;
