
import { Router } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

const router = Router();

router.get("/biens", async (req, res) => {
    // const users = await getRepository(User).find();
    // console.log(users)
    res.render('property/index.html.twig',{'current_menu':'properties'} )
})
  
export default router;
