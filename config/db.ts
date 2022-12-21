import mongoose from "mongoose";

const URI =
  "mongodb+srv://Loedb:leo10@cluster0.bthnwpa.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(URI);
mongoose.connection
  .on("open", () => {
    console.log(`database connection established`);
  })
  .once("error", (error) => {
    console.log(`something went wrong: ${error}`);
  });
