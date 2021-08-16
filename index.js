import express from 'express';
const app = express();
const port = process.env.PORT || 5000;
import path from 'path';

// DRY 
// DONT REPEAT YOURSELF

app.set('view engine', 'pug')
app.use(express.json());

app
    .route('/')
    .get((request, response) => {
        response.render('index', { title: 'Hey', message: 'Hello there!', name: 'bob' })
        // response.sendFile(path.join(process.cwd(),'index.html'))
    })
    
app
    .route('/about')
    .get((request, response) => {
        response.render('about', { message: 'this is the about page i guess!'})
    })
    
app
    .route('/messages')
    .get((request, response) => {
        response.json(['Hello', 'World'])
    })
    .post((request, response) => {
        console.log('messages post request received!', request.body)
        response.send('messages post request received!')
    })
    .put((request, response) => {
        console.log('messages put request received!')
        response.send('messages put request received!')
    })
    .delete((request, response) => {
        console.log('messages delete request received!')
        response.send('messages delete request received!')
    });

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));