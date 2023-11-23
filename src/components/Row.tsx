import styled from 'styled-components';
import { FC } from 'react';
import { DataInterface } from '../utils/interfaces.ts';
import Cell from './Cell.tsx';

const Tr = styled.tr`
    height: 15px;
    cursor: pointer;
    &:nth-child(even) {
        background: #f8f8f8;
    }
    &:hover {
        background: #747bff;
        transition: background-color 0.45s;
    }
`;

interface RowProps {
    item: DataInterface;
    handleClick: (item: DataInterface) => void;
}

const Row: FC<RowProps> = ({ item, handleClick }) => {
    return (
        // @ts-ignore
        <Tr onClick={handleClick}>
            <Cell cellData={item.id} />
            <Cell cellData={item.firstName} />
            <Cell cellData={item.lastName} />
            <Cell cellData={item.email} />
            <Cell cellData={item.phone} />
        </Tr>
    );
};

export default Row;
