import React from 'react';
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
        <div className={styles.details}>
          <div>
            <p>
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
              <span className={styles.visualizacoes}>{photo.acessos}</span>
              <h1 className='title'>
                <Link to={`/foto/${photo.id}`}></Link>
              </h1>
              <ul className={styles.attributes}>
                <li>{photo.peso} kg</li>
                <li>{photo.idade}teste</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <PhotoContent id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
