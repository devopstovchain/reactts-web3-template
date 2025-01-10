import axios from 'axios';
import { apis } from './apis';

export type InputGetList = {};
export type OutputGetList = {
    name: string;
};
export async function getList(input: InputGetList): Promise<OutputGetList> {
    const response = await axios.get(apis.getList);

    return {
        name: response.data?.name || '',
    };
}
