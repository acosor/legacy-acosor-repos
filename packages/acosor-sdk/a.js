const Acosor = require("./lib");

const appID = "appID";
const appSecret = "appSecret";

const session = Acosor.initialize(appID, appSecret);

session.dispatch({})
.then(res => )
