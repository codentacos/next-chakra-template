import { createUser } from '../../../lib/user';
import db from '../../../middleware/database';

export default db(async (req, res) => {
  try {
    await createUser(req.body);
    res.status(200).send({ done: true });
  } catch (error) {
    console.error(error);
    res.status(500).end(error.message);
  }
});
