/*using core modules*/

/*In the below code we accessing path library*/
const path = require('path');

/*Now we are going to use core module method (function) ie join function*/
/*In the below code we are create a variable filename and use join function which is
use for join two url of filename*/ 
const filename = path.join(__filename);

/*The basename function of core module is a predefined function that return the 
last filename or we case say basefile name*/
const basename = path.basename(filename);
/*The below code use function extname that return file extension type*/
const extname = path.extname(basename);

console.log(filename);
console.log(basename); 
console.log(extname);