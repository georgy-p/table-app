import styled from 'styled-components';
import { FC } from 'react';

interface CellProps {
    cellData: string | number;
}

const Td = styled.td<{ $isThin?: boolean }>``;
const Cell: FC<CellProps> = ({ cellData }) => {
    return <Td>{cellData}</Td>;
};

export default Cell;
