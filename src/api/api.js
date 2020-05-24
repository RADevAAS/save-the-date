import axios from 'axios'

// const baseURL = process.env.REACT_APP_BASE_URL
const baseURL = 'http://localhost:5001/save-the-date-201b5/us-central1'

export const helloWorld = eventId => {
    return axios.get(`${baseURL}/helloWorld`, {
        params: { eventId }
    });
}

export const getEventPublicData = eventId => {
    return axios.get(`${baseURL}/getPublicEvent`, {
        params: { eventId }
    });
}

export const getGuestList = eventId => {
    return axios.get(`${baseURL}/getGuestList`, {
        params: { eventId }
    });
}

// const dataExample = { 
//     isComming: false,
//     name: 'les relou',
//     count: 2,
//  }

export const setGuestData = (eventId, data) => {
    return axios({
        method: 'POST',
        url: `${baseURL}/setGuestData`,
        data: { 
            eventId,
            ...data
         }
    });
}

export const createEvent = (data) => {
    return axios({
        method: 'POST',
        url: `${baseURL}/createEvent`,
        data: { 
                userId: 'abcdefg', 
                template: 'a', 
                form: 'a',
                brideName: 'req.body.brideName',
                groomName: 'req.body.groomName', 
                ts: Date.now() - 10000, 
                mail: 'req.body.mail',
         }
        }
);
}


export const updateEvent = (data) => {
    return axios({
        method: 'PATCH',
        url: `${baseURL}/updateEvent`,
        data: { 
                userId: 'abcdefg', 
                template: 'b', 
                brideName: 'brideNewName',
         }
        }
);
}