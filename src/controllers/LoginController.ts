import { NextFunction, Request, Response } from "express";
import { get, controller, use, post, bodyValidator } from "./decorators";

function logger(req: Request, res: Response, next: NextFunction) {
  console.log("A Request was made");
}

@controller("/auth")
class LoginController {
  @get("/login")
  @use(logger)
  getLogin(req: Request, res: Response): void {
    console.log("here");
    res.send(`
          <form method="POST">
            <div>
              <label>Email</label>
              <input name="email" />
            </div>
            <div>
              <label>Password</label>
              <input name="e" type="password" />
            </div>
            <button>Submit</button>
          </form>
        `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === "hi@hi.com" && password === "password") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid email or password");
    }
  }
}
