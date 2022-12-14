import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {

  const {request, clearError, process, setProcess} = useHttp();

  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = 'apikey=6ee25e191639a01dff88c6912dd17f12';
  const _baseCharacterOffset = 210;

  const getAllCharacters = async (/*limit = 9,*/ offset = _baseCharacterOffset) => {
    const res = await request(`${_apiBase}characters?limit=${9/*limit*/}&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformCharacter);
  }

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  }

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description ? `${char.description.slice(0, 210)}...` : 'Desciription about this character was not found.',
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    }
  }

  const getAllComics = async (/*limit = 9,*/ offset = _baseCharacterOffset) => {
    const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=${8/*limit*/}&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformComics);
  }

  const getComic = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComics(res.data.results[0]);
  }

  const _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description || 'There is no description.',
      pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
      thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
      language: comics.textObjects.language || 'en-us',
      price: comics.prices.price ? `${comics.prices.price}$` : 'not available'
    }
  }

  const getCharacterByName = async (name) => {
    const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
    return res.data.results.map(_transformCharacter);
  }

  return {
    clearError, 
    process,
    setProcess,
    getAllCharacters, 
    getCharacter, 
    getAllComics, 
    getComic, 
    getCharacterByName
  };
}

export default useMarvelService;