import { DataInterface } from './interfaces.ts';

export type SortTypes = 'id' | 'firstName' | 'lastName' | 'email' | 'phone';

export const getSortedColl = (
    coll: DataInterface[],
    isFromLow: boolean,
    type: SortTypes,
): DataInterface[] => {
    return coll.sort((a, b) => {
        if (isFromLow) {
            if (a[type] > b[type]) {
                return 1;
            }
            if (a[type] < b[type]) {
                return -1;
            }
            return 0;
        } else {
            if (a[type] > b[type]) {
                return -1;
            }
            if (a[type] < b[type]) {
                return 1;
            }
            return 0;
        }
    });
};
