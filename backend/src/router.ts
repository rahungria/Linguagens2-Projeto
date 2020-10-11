import { Router } from "express";

import { seguroRoutes } from "src/routes/seguro.routes";

const router = Router();

router.use('/api/seguro', seguroRoutes);

export { router };
