import { useState } from 'react';
import Button from './ui/Button';
import CheckBox from './ui/CheckBox';

type CheckBoxState = {
    id: string;
    title: string;
    isChecked: boolean;
}

const checkBoxData: CheckBoxState[] = [
    {
        id: 'page1',
        title: 'Page 1',
        isChecked: false
    },
    {
        id: 'page2',
        title: 'Page 2',
        isChecked: false
    },
    {
        id: 'page3',
        title: 'Page 3',
        isChecked: false
    },
    {
        id: 'page4',
        title: 'Page 4',
        isChecked: false
    }
];

const PageSelection: React.FC = () => {
    const [checkboxes, setCheckboxes] = useState(checkBoxData);

    // check if all the checkboxes are checked
    const allPagesChecked = checkboxes.every(checkbox => checkbox.isChecked);

    const handleSelect = (id: string) => {
        setCheckboxes(prevCheckboxes =>
            prevCheckboxes.map(checkbox =>
                checkbox.id === id
                    ? { ...checkbox, isChecked: !checkbox.isChecked }
                    : checkbox
            )
        );
    };

    const handleAllPagesChange = (checked: boolean) => {
        setCheckboxes(prevCheckboxes =>
            prevCheckboxes.map(checkbox => ({
                ...checkbox,
                isChecked: checked
            }))
        );
    };

    const handleSubmit = () => {
        const selectedPages = checkboxes.filter(cb => cb.isChecked);
        console.log("Selected pages:", selectedPages);
    };

    return (
        <div className="flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-md gap-4 w-full max-w-md p-4">
            <CheckBox
                text="All Pages"
                checked={allPagesChecked}
                onChange={handleAllPagesChange}
            />

            <hr className='border-gray-300' />
            <div className="">
                {checkboxes.map((checkbox) => (
                    <CheckBox
                        key={checkbox.id}
                        text={checkbox.title}
                        checked={checkbox.isChecked}
                        onChange={() => handleSelect(checkbox.id)}
                    />
                ))}
            </div>
            <hr className='h-4 border-gray-300' />

            <Button
                text="Done"

                onClick={handleSubmit}
                className="w-full "
            />
        </div>
    );
};

export default PageSelection;