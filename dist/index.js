import express from 'express';
import tasksRoutes from './routes/tasks.js';
const app = express();
const port = 8080;
app.use(express.json());
app.use('/tasks', tasksRoutes);
app.listen(port, () => {
    console.log(`App is (updated) listening on port ${port}`);
});
//# sourceMappingURL=index.js.map