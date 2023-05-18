import { Button } from "antd";
import React, { useState } from 'react';

interface ButtonGroupProps {
    onSelect: (option: string) => void;
    children: any;
    value?:string;
}

interface ButtonGroupItemProps {
    onSelect?: (option: string) => void;
    selected?: boolean;
    value: string;
    children?: any;
}

const ButtonGroup: React.FC<ButtonGroupProps> & {
    Item: React.FC<ButtonGroupItemProps>;
} = ({ children, onSelect,value }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(value||null);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        onSelect && onSelect(option);
    };

    return (
        <div>
            {React.Children.map(children, (child) =>
                React.cloneElement(child as React.ReactElement<ButtonGroupItemProps>, {
                    onSelect: handleSelect,
                    selected: child.props.value === selectedOption,
                })
            )}
        </div>
    );
};

const ButtonGroupItem: React.FC<ButtonGroupItemProps> = ({
    children,
    onSelect,
    selected,
    value,
}) => (
    <Button
    onClick={() => onSelect && onSelect(value)}
    type={selected ? 'primary' : 'default'}
    style={{ marginRight: '10px' }}>
        {children}
    </Button>
);

ButtonGroup.Item = ButtonGroupItem;

export default ButtonGroup;
