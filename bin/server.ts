import "core-js/es7/reflect";
import "zone.js/dist/zone-node";
import * as webpack from "webpack";
import * as express from "express";

import {default as config, PORT} from "../src/config/main";
import * as path from "path";
import {ngExpressEngine} from "../src/server/ngExpressEngine";
import {ServerAppModule} from "../src/server/app.module";

const app = express();

app.set("view engine", "html");
app.set("views", path.join(__dirname, "..", "src", "server", "views"));

const compiler = webpack(config);

app.use("/templates", express.static(path.join(__dirname, "..", "templates")));

app.use(require("webpack-dev-middleware")(compiler, {
  compress: true,
  hot: true,
  noInfo: true,
  publicPath: "/"
}));

app.use(require("webpack-hot-middleware")(compiler));

app.use((req: express.Request, res: express.Response) => {
  res.render("layout", {req, res});
});

app.engine("html", ngExpressEngine({
  bootstrap: ServerAppModule
}));

app.get("/**/*", (req: express.Request, res: express.Response) => {
  return {
    req,
    res
  };
});
app.listen(PORT, () => {
  console.info(`==> Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`);
});
