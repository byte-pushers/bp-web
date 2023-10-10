import "zone.js/dist/zone-node";
import "reflect-metadata";
import { renderModule } from "@angular/platform-server";
import { writeFileSync } from "fs";

import { AppServerModuleNgFactory } from "./dist/angular-app/server/main";

renderModule(AppServerModuleNgFactory, {
  document: "<app-root></app-root>",
  url: "/",
})
  .then((html) => {
    console.log("Pre-rendering successful, saving prerender.html");
    writeFileSync("./prerender.html", html);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
    function renderModule(
      AppServerModuleNgFactory: any,
      arg1: { document: string; url: string }
    ) {
      throw new Error("Function not implemented.");
    }
  });
