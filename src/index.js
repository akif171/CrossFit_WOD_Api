const express = require("express");
const app = express();
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());

//Routes Registeration
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`Api is listening on port: ${PORT}`);

  V1SwaggerDocs(app, PORT);
});
