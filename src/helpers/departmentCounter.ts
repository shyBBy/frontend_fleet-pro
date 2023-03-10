import {DEPARTMENT_LOCATION} from 'types'


export const departmentCounter = () => {
    const itemKeys = Object.keys(DEPARTMENT_LOCATION);
    const countItems = itemKeys.length;
    return countItems
}