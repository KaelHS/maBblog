const mongoose = require('mongoose');

mongoose.connect('mongodb://Blog', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

export default mongoose;