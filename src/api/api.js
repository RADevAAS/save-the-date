import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL

export const getEventPublicData = eventId => {
    return axios.get(`${baseURL}/getPublicEvent`, {
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

