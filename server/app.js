/*
Server App File | HOLDING: Reactified Web App
Douglas MacKrell, Briahana Maugé, Joseph P. Pasaoa, Kathy Puma
*/


/* IMPORTS */
const express = require('express');
  const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* MAIN ROUTING */
// Imports
// const swRT = require('./routes/sw.js');
// const usersRT = require('./routes/users.js');
// const postsRT = require('./routes/posts.js');
// const commentsRT = require('./routes/comments.js');
// const likesRT = require('./routes/likes.js');
// const albumsRT = require('./routes/albums.js');
const photosRT = require('./routes/photosRT.js');
// const eventsRT = require('./routes/events.js');
// const holdsRT = require('./routes/holds.js');
// const userHoldsRT = require('./routes/userHolds.js');

// Connects
// app.use('/sw', swRT);
// app.use('/users', usersRT);
// app.use('/posts', postsRT);
// app.use('/comments', commentsRT);
// app.use('/likes', likesRT);
// app.use('/albums', albumsRT);
app.use('/photos', photosRT);
// app.use('/events', eventsRT);
// app.use('/holds', holdsRT);
// app.use('/userHolds', userHoldsRT);

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


/* ERROR HANDLING */
// no-route catch
app.use("*", (req, res) => {
    res.status(404).send(
      'error: Route not found on the holDing: Reactified Server. Try again after fixing your route.'
    );
});

// server error catch
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send('Server error. Please try again later.');
});


module.exports = app;
