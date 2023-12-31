import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataInterface } from '../utils/interfaces.ts';
import Row from './Row.tsx';
import { getSortedColl, SortTypes } from '../utils/sorter.ts';
import Filter from './Filter.tsx';
import { getFilteredData } from '../utils/filter.ts';
import Information from './Information.tsx';

// eslint-disable-next-line max-len
const url =
    'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

const ContentWrap = styled.div`
    text-align: center;
    display: inline-block;
    background-color: #fff;
    padding: 2rem 2rem;
    color: #000;
    border: 5px solid #fff;
    border-radius: 8px;
    outline: 3px solid #ffd300;
    min-height: 70vh;
`;

const StyledTable = styled.table`
    width: 100%;
    margin-bottom: 20px;
    border-collapse: collapse;
    font-size: 15px;
`;

const THead = styled.thead`
    font-weight: bold;
    text-align: left;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
    border-top: 1px solid #747bff;
`;

const Tr = styled.tr`
    border-bottom: 1px solid #ddd;
    padding: 5px;
`;
const Th = styled.th`
    font-weight: bold;
    padding: 7px;
    background: #ffd300;
    border: 3px solid #ffd300;
`;

const TBody = styled.tbody`
    padding-top: 15px;
`;

const Button = styled.button`
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
`;

const Table = () => {
    const [data, setData] = useState<Array<DataInterface>>([]);
    const [clickedValue, setClickedValue] = useState<SortTypes | ''>('');
    const [filteredData, setFilteredData] = useState<DataInterface[]>([]);
    const [rowDetails, setRowDetails] = useState<DataInterface | null>(null);
    const [doubleClickValue, setDoubleClickValue] = useState<SortTypes | ''>(
        '',
    );

    useEffect(() => {
        axios.get(url).then((response) => setData(response.data));
    }, []);

    const handleClick = (type: SortTypes) => {
        if (clickedValue === type) {
            setClickedValue('');
            setDoubleClickValue(type);
        }
        if (clickedValue !== type) {
            setClickedValue(type);
            setDoubleClickValue('');
        }

        const isReverse = clickedValue === type;

        if (filteredData.length > 0) {
            const sortedList = getSortedColl(
                [...filteredData],
                !isReverse,
                type,
            );
            setFilteredData(sortedList);
        } else {
            const sortedList = getSortedColl([...data], !isReverse, type);
            setData(sortedList);
        }
    };

    const filterHandle = (value: string) => {
        const filteredResult = getFilteredData([...data], value);
        setFilteredData(filteredResult);
    };

    const clickedRow = (item: DataInterface) => {
        setRowDetails(item);
    };

    const renderSortLogo = (type: SortTypes) => {
        if (clickedValue === type || doubleClickValue === type) {
            return doubleClickValue !== type ? ' ↓' : ' ↑';
        }
        return null;
    };

    const renderedData = filteredData.length > 0 ? filteredData : data;

    return (
        <ContentWrap>
            <Filter filterHandle={filterHandle} />
            <StyledTable>
                <THead>
                    <Tr>
                        <Th>
                            <Button onClick={() => handleClick('id')}>
                                id
                                {renderSortLogo('id')}
                            </Button>
                        </Th>
                        <Th>
                            <Button onClick={() => handleClick('firstName')}>
                                firstName
                                {renderSortLogo('firstName')}
                            </Button>
                        </Th>
                        <Th>
                            <Button onClick={() => handleClick('lastName')}>
                                lastName
                                {renderSortLogo('lastName')}
                            </Button>
                        </Th>
                        <Th>
                            <Button onClick={() => handleClick('email')}>
                                email
                                {renderSortLogo('email')}
                            </Button>
                        </Th>
                        <Th>
                            <Button onClick={() => handleClick('phone')}>
                                phone
                                {renderSortLogo('phone')}
                            </Button>
                        </Th>
                    </Tr>
                </THead>
                <TBody>
                    {data &&
                        renderedData.map((item) => (
                            <Row
                                key={item.id}
                                handleClick={() => clickedRow(item)}
                                item={item}
                            />
                        ))}
                </TBody>
            </StyledTable>
            {rowDetails && <Information item={rowDetails} />}
        </ContentWrap>
    );
};

export default Table;
