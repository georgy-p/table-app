import { DataInterface } from './interfaces.ts';

export const getFilteredData = (data: DataInterface[], value: string) => {
    return data.filter((item) => Object.values(item).includes(value));
};
