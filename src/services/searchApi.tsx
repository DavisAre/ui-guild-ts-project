import axios from 'axios';


const BASE_URL = 'https://api.europeana.eu/record/v2/search.json?wskey=marranushi';


export const getRecommendedResults = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}&query=apple&media=true&thumbnail=true&theme=art`);
        return data;
    } catch (error) {
        console.log(error)
    }
}