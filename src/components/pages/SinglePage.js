import { useParams, Link, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import AppBanner from "../appBanner/AppBanner";
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './singlePage.scss';

const SinglePage = ({elementData}) => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const {loading, error, getComic, getCharacter, clearError} = useMarvelService();
  const navigate = useNavigate();

  useEffect(() => {
    updateData()
  }, [id])

  const updateData = () => {
    clearError();
    switch (elementData) {
      case 'comic':
        getComic(id)
          .then(onDataLoaded);
        break;
      case 'character':
        getCharacter(id)
          .then(onDataLoaded);
        break;
      default:
        break;
    }
  }

  const onDataLoaded = (data) => {
    setData(data);
  }

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = !(loading || error || !data) 
    ? elementData === 'comic' 
      ? <ComicView comic={data}/> 
      : <CharacterView character={data}/> 
    : null;

  return (
    <>
      <AppBanner/>
      {errorMessage}
      {spinner}
      {content}
    </>
  )
}

const ComicView = ({comic}) => {
  const {title, thumbnail, description, pageCount, language, price} = comic;

  return (
    <div className="single-comic">
    <img src={thumbnail} alt={title} className="single-comic__img"/>
    <div className="single-comic__info">
      <h2 className="single-comic__name">{title}</h2>
      <p className="single-comic__descr">{description}</p>
      <p className="single-comic__descr">{pageCount}</p>
      <p className="single-comic__descr">Language: {language}</p>
      <div className="single-comic__price">{price}</div>
    </div>
    <Link to={`/comics`} className="single-comic__back">Back to all</Link>
</div>
  )
}

const CharacterView = ({character}) => {
  const {name, thumbnail, description} = character;

  return (
    <div className="single-comic">
    <img src={thumbnail} alt={name} className="single-comic__char-img"/>
    <div className="single-comic__info">
      <h2 className="single-comic__name">{name}</h2>
      <p className="single-comic__descr">{description}</p>
    </div>
</div>
  )
}

export default SinglePage;