import { Router, Request, Response } from "express";
import { readUsersByHobby, checkUserExists, getTeamExperience, getUsersByFaction, addUser } from "./user.controller";  

const userRoutes = Router();

async function GetUsersByHobby(request: Request, response: Response) {
  const hobby = request.query.hobby as string;

  if (!hobby) {
    return response.status(400).json({
      message: "Please provide a hobby as a query parameter."
    });
  }

  try {
    const users = await readUsersByHobby(hobby);  
    response.status(200).json({
      message: "Success.",
      users: users
    });
  } catch (error) {
    response.status(500).json({
      message: "Failed to fetch users with the specified hobby.",
      error: (error as Error).message,  
    });
  }
}

/*PUNTO1*/
userRoutes.get("/hobby", GetUsersByHobby);

/*PUNTO2*/
userRoutes.get("/exists", async (req: Request, res: Response) => {
  const userIdStr = req.query.id as string;
  const userId = Number(userIdStr); 

  if (!userIdStr || isNaN(userId)) {
    return res.status(400).json({
      error: "Invalid user ID provided. Please ensure it's a number.",
    });
  }

  try {
    const userExists = await checkUserExists(userId);
    return res.status(userExists ? 200 : 404).json({
      message: userExists
        ? `User with ID ${userId} exists.`
        : `User with ID ${userId} does not exist.`,
    });
  } catch (err) {
    return res.status(500).json({
      error: "An error occurred while checking user existence.",
      details: (err as Error).message,
    });
  }
});


/*PUNTO3*/
userRoutes.get("/team-experience", async (request: Request, response: Response) => {
  const teamName = request.query.team as string; 

  if (!teamName) {
    return response.status(400).json({
      message: "Please provide a team name as a query parameter.",
    });
  }

  try {
    const totalExperience = await getTeamExperience(teamName);  
    return response.status(200).json({
      message: `Total experience for team ${teamName} is ${totalExperience} years.`,
      totalExperience,
    });
  } catch (error) {
    response.status(500).json({
      message: "Error calculating team experience.",
      error: (error as Error).message,
    });
  }
});

/*PUNTO4*/
userRoutes.get("/by-faction", async (req: Request, res: Response) => {
  const faction = req.query.faction as string; 

  if (!faction) {
    return res.status(400).json({
      error: "Faction not provided. Please send it as a query parameter.",
    });
  }

  try {
    const factionUsers = await getUsersByFaction(faction); 
    return res.status(200).json({
      info: `Users from faction ${faction}.`,
      data: factionUsers,
    });
  } catch (err) {
    return res.status(500).json({
      error: "An error occurred while trying to fetch users by faction.",
      details: (err as Error).message,
    });
  }
});


/*PUNTO5*/
userRoutes.post("/", async (request: Request, response: Response) => {
  const newUser = request.body;  

  if (!newUser.id || !newUser.name || !newUser.hobbies || !newUser.years || !newUser.team || !newUser.faction) {
    return response.status(400).json({
      message: "Please provide all required fields (id, name, hobbies, years, team, faction).",
    });
  }

  try {
    const result = await addUser(newUser);
    if (result === "exists") {
      return response.status(409).json({
        message: `User with ID ${newUser.id} already exists.`,
      });
    } else {
      return response.status(201).json({
        message: "User successfully added.",
        user: newUser,
      });
    }
  } catch (error) {
    response.status(500).json({
      message: "Error adding new user.",
      error: (error as Error).message,
    });
  }
});


/*EXPORT ROUTES*/
export default userRoutes;
