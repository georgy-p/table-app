import { DataInterface } from '../utils/interfaces.ts';
import { FC } from 'react';
import styled from 'styled-components';

interface InformationProps {
    item: DataInterface;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #747bff;
    border-radius: 8px;
    align-items: baseline;
    padding: 10px 30px;
`;

const P = styled.p`
    color: #f9f9f9;
`;

const Information: FC<InformationProps> = ({ item }) => {
    return (
        <Container>
            <P>ID: {item.id}</P>
            <P>Имя: {item.firstName}</P>
            <P>Фамилия: {item.lastName}</P>
            <P>Почта: {item.email}</P>
            <P>Телефон: {item.phone}</P>
            <P>Адрес: {Object.values(item.address).join(', ')}</P>
        </Container>
    );
};

export default Information;
