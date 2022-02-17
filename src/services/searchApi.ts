import axios from 'axios';
import { ApiResponse } from './types';


const BASE_URL = 'https://api.europeana.eu/record/v2/search.json?wskey=marranushi';


export const getRecommendedResults = async () => {
    let result: ApiResponse | string;
    try {
        const { data } = await axios.get<ApiResponse>(`${BASE_URL}&query=apple&media=true&thumbnail=true&theme=art`);
        result = data;
    } catch (error) {
        return 'Something went wrong...'
    }
    return result;
}