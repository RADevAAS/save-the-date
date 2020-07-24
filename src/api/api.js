import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL
// const baseURL = process.env.REACT_APP_BASE_URL_LOCAL


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


export const setGuestData = (eventId, data) => {
    // Template data:
    //     isComming: boolean
    //     name: string
    //     count: number
    //     tel: string

    return axios({
        method: 'POST',
        url: `${baseURL}/setGuestData`,
        data: {
            eventId,
            ...data
         }
    });
}

export const createEvent = (userId, data) => {
    // Template data:
    //     template: 'A' | 'B | 'C'
    //     form: 'A' | 'B | 'C'
    //     brideName: string
    //     groomName: string
    //     ts: timestamp
    //     mail: string
    //     title: string
    //     town: string
    //     adress: string
    //     invitText: string
    //     hall: string

    return axios({
        method: 'POST',
        url: `${baseURL}/createEvent`,
        data: {
                userId,
                ...data
            }
        }
    );
}


export const updateEvent = (userId, data) => {
    return axios({
        method: 'PATCH',
        url: `${baseURL}/updateEvent`,
        data: {
                userId,
                ...data
          }
      }
  );
}
