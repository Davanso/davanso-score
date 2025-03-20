import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export const getClubFixtures = async (clubId) => {
    const response = await axios.get(`${API_URL}/fixtures`, {
        params: {
            team: clubId,
            season: 2023,
            status: 'NS-LIVE-FT', // Upcoming, live, and finished games
        },
        headers: {
            'x-apisports-key': API_KEY,
        },
    });
    return response.data.response;
};