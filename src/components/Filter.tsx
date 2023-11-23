import styled from 'styled-components';
import { FC, useState } from 'react';

interface FilterProps {
    filterHandle: (value: string) => void;
}

const FilterWrapper = styled.div`
    width: 100%;
    background: #ffd300;
`;

const Form = styled.form`
    width: 100%;
    padding: 10px;
    display: flex;
    gap: 20px;
`;

const Input = styled.input`
    width: 40%;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 400;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;

    &:hover {
        border-color: #646cff;
    }

    &:active,
    &:focus {
        outline: none;
    }
`;

const SubmitBtn = styled.button`
    font-weight: 400;
`;
const Filter: FC<FilterProps> = ({ filterHandle }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const normalizedValue = inputValue.trim();
        setInputValue('');
        filterHandle(normalizedValue);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value);

    return (
        <FilterWrapper>
            <Form onSubmit={handleSubmit}>
                <Input type='text' value={inputValue} onChange={handleChange} />
                <SubmitBtn type='submit'>Найти</SubmitBtn>
            </Form>
        </FilterWrapper>
    );
};

export default Filter;
