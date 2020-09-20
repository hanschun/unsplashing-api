import Unsplash, {toJson} from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_UNSP_ACCESS_KEY
});

export const unsplashSearch = async (query) => {
  return await unsplash
    .search
    .photos(query, 1, 20)
    .then(toJson);
}