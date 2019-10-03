/*here we are using file system core module*/

/*Importing file system library*/
const fs = require('fs');


/*In the below code we are using copyFileSync(src,des,flag) funtion of file system
which will copy data from fileone.txt and past in filetwo.txt if there is no such
in destination it will create one*/ 
fs.copyFileSync("fileone.txt","filetwo.txt");