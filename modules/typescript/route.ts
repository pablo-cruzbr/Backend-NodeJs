import { Router, Request, Response } from 'express';

const router = Router();

router.get('/home', (req: Request, res: Response) => {
    res.status(200).json({ message: 'hello world' });
});

export default router;
