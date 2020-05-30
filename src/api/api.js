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
