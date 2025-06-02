import { AppDataSource } from "./database/data-source";
import app from "./app";
import { consumeEvents } from "./rabbitmq";

const PORT = process.env.PORT || 3001;

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Database connected!");
    consumeEvents(); // Start RabbitMQ consumer
    app.listen(PORT, () => {
      console.log(`🚀 User Service is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("❌ Database connection error:", error));