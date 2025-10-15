interface ButtonProps {
    text: string;
    // width?: string | number;
    // height?: string | number;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {

    const defaultClasses = "px-[15px] py-[10px] rounded border-none cursor-pointer bg-[#FFCE22] hover:bg-[#FFD84D] text-black ";
    return (
        <button
            onClick={onClick}
            className={`${defaultClasses} ${className || ''}`}
        >
            {text}
        </button>
    );
};

export default Button;