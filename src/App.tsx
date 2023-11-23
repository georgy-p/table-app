import styled from 'styled-components';
import Table from './components/Table.tsx';

const Title = styled.h1`
    font-size: 1.5em;
    color: #747bff;
`;

const App = () => {
    return (
        <>
            <Title>The Table App</Title>
            <Table />
        </>
    );
};

export default App;
