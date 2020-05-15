import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL

export const getEventPublicData = eventId => {
    return axios.get(`${baseURL}/getPublicEvent`, {
        params: { eventId }
    });
}