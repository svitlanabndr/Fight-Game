const API_URL = 'https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/';

type Method = 'GET' | 'POST';

export function callApi(endpoind: string, method: Method): Promise<{
    content: string,
    [key: string]: string
}> {
    const url = API_URL + endpoind;
    const options = {
        method
    };

    return fetch(url, options)
        .then(response => 
        response.ok 
            ? response.json() 
            : Promise.reject(Error('Failed to load'))
        )
        .catch(error => { throw error });
}
