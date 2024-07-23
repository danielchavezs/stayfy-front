import axios from 'axios';

export const BACKEND_URL = 'https://stayfy-back.onrender.com'
// export const BACKEND_URL = 'http://localhost:3001'
export const FRONT_URL = 'https://stayfy-mu.vercel.app'
// export const FRONT_URL = 'http://localhost:5173'
export const DESC = 'DESC';
export const ASC = 'ASC';
export const DEFAULT_IMAGE = "https://m.media-amazon.com/images/I/71YYxm3UN9L._AC_UF1000,1000_QL80_.jpg";


export const getGenresList = async (setGenresList) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/genres`);
      const genres = response.data.map(( genre ) => genre);
    // const genres = ["Self-help", "Horror", "Sci-Fi", "Mystery & Detective", "Comedy", "Romance"];
      setGenresList(['Select genre', ...genres.sort()]);
    } catch (error) {
      console.log(error);
    }
  };