import { Router } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

const router = Router();

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/user.controller";

router.get("/", async (req, res) => {
  // const users = await getRepository(User).find();
  // console.log(users)
  res.render('home.twig',{message:"bonjour tout le monde ",title:"happy you do"});
})


router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
