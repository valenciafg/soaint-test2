import axios from 'axios';

const getRequest = async (url) => {
    let response = [];
    try {
        response = await axios.get(url);
    } catch (err) {
        console.log('Error', err);
    }
    return response;
}


export default getRequest;