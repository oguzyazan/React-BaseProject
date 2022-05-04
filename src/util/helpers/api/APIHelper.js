export default class APIHelper {
    static baseUrl;

    static createOptions = (method, body) => ({
        method,
        body,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })

    static callAPI = async (endPoint, options) => {
        try{
            const response = await fetch(this.baseUrl + endPoint, options);
            const responseJSON = await response.json();
            return {result: true, response: responseJSON};
        }catch(error){
            return {result: false}
        }
    }
}