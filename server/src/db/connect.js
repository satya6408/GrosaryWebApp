const mongoose = require("mongoose");
// Middleware
const db='mongodb+srv://root:jagdish09@cluster0.viyzvgo.mongodb.net/'

// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017