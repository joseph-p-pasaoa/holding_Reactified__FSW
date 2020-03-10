/*
Server Photos Route Queries | HOLDING: Reactified Web App
Douglas MacKrell, Briahana Maugé, Joseph P. Pasaoa, Kathy Puma
*/


/* DATABASE */
const db = require('../helpers/db');


/* MAIN */
const getAlbumPhotosQ = async (albumId) => {
  const getQuery = `
    SELECT *
    FROM photos
    FULL OUTER JOIN albums ON (photos.album_id = albums.album_id)
    WHERE albums.album_id = $1
  `;
  return await db.any(getQuery, albumId);
}


module.exports = {
  getAlbumPhotosQ
}
