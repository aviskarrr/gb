// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const FILE_PATH = './data.json';
// const simpleGit = require('simple-git');
// const random = require('random');

// const makeCommit = n=>{
//     if (n===0) return simpleGit.push();
//     const x = random.int(0,54);
//     const y = random.int(0,6);
//     const DATE = moment().subtract(1,'y').add(2,'d')
//                             .add(x,'w').add(y, 'w').format();
//     const data = {
//         date: DATE
//     }

//     console.log(DATE);

//     jsonfile.writeFile(FILE_PATH, data, ()=>{
//         simpleGit().add([FILE_PATH]).commit(DATE, {'--date':DATE}, makeCommit.bind(this, --n));
//     });
// }

// makeCommit(100);



//git commit --date = some date



const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const FILE_PATH = './data.json';

async function loadRandomModule() {
    return await import('random');
}

async function makeCommit(n) {
    const random = await loadRandomModule();
    
    if (n === 0) return simpleGit().push();

    const x = random.default.int(0, 54);
    const y = random.default.int(0, 6);
    const DATE = moment().subtract(1, 'y').add(2, 'd')
                        .add(x, 'w').add(y, 'd').format();
    const data = { date: DATE };

    console.log(DATE);

    jsonfile.writeFile(FILE_PATH, data, () => {
        simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, makeCommit.bind(this, --n));
    });
}

makeCommit(1000);
