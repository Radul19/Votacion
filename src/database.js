const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://radul:2219230@votaciones.jqyzq.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err))