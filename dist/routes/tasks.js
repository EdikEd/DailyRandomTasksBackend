import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Tasks route');
});
export default router;
//# sourceMappingURL=tasks.js.map