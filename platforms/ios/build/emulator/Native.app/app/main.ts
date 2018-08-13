// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
// const Kinvey = require('kinvey-nativescript-sdk');
// Kinvey.init({
//     appKey: "kid_HkXB1x-XQ",
//     appSecret: "311020ed9d26404aaf0e932cad204b03",
// });

import { AppModule } from "~/app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
