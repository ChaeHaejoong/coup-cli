import dotenv from "dotenv";
dotenv.config({ quiet: true });

import "./socket/client";
import { startCLI } from "./input/input";
startCLI();

