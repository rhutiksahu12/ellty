// type
interface CheckBoxProps {
    text: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
    text,
    checked = false,
    onChange,
    className
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.checked);
    };

    const defaultClasses = "flex items-center text-lg justify-between w-full cursor-pointer ps-[22px] pe-[15px] py-[8px]";

    return (
        <label className={`${defaultClasses} ${className || ''}`}>
            <span className="text-black">
                {text}
            </span>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className="
                    w-[23px] h-[23px] 
                    cursor-pointer 
                    appearance-none 
                    bg-white 
                    border-2 
                    border-[#CDCDCD] 
                    rounded-[6px]
                    
                    hover:border-[#BDBDBD] 
                    hover:bg-[url('/checkMarkLight.svg')] 
                    hover:bg-no-repeat 
                    hover:bg-center
                    
                    active:outline-2 
                    active:outline-blue-300
                    active:bg-[url('/checkMark.svg')] 
                    active:bg-no-repeat 
                    active:bg-center
                    
                    checked:bg-[#2469F6]
                    checked:border-blue-600 
                    checked:bg-[url('/checkMarkWhite.svg')] 
                    checked:bg-no-repeat 
                    checked:bg-center
                    
                    checked:hover:bg-[#5087F8]
                    checked:hover:bg-[url('/checkMarkWhite.svg')] 
                    checked:hover:bg-no-repeat 
                    checked:hover:bg-center
                    checked:hover:border-blue-500
                    
                    
                    checked:active:outline-2 
                    checked:active:outline-blue-200
                "
            />
        </label>
    );
};

export default CheckBox;