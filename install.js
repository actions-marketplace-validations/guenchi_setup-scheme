const core = require('@actions/core');
const {exec} = require('@actions/exec');


main().catch(err =>{
    core.setFailed(err.message);
})


async function main() {

    const implementation = core.getInput('implementation', {required: true});
    const version = core.getInput('version');
    const option = core.getInput('option');
    
    if (process.platform === 'darwin') {
        switch (implementation) {

            case 'chez':
                await exec('brew install chezscheme');
                break;
            case 'gambit':
                await exec('brew install gambit-scheme');
                await exec('ln -s /usr/local/Cellar/gambit-scheme/4.9.3_1/v4.9.3/bin/gsi /usr/local/bin/gsi');
                await exec('ln -s /usr/local/Cellar/gambit-scheme/4.9.3_1/v4.9.3/bin/gsc /usr/local/bin/gsc');
                break;
            case 'grebil':
                await exec('brew install gerbil-scheme');
                break;
            case 'mit':
                await exec('brew install mit-scheme');
                break;
            case 'racket':
                await exec('brew install minimal-racket');
                break;
            case 'chicken':
                await exec('brew install chicken');
                break;
        }

    } else if (process.platform === 'linux') {
        switch (implementation) {

            case'chez':
                await exec('sudo apt install chezscheme');
                break;
            case'gambit':
                await exec('sudo apt install gambc');
                break;
            case'mit':
                await exec('sudo apt install mit-scheme');
                break;
            case 'racket':
                await exec('sudo apt install racket');
                break;
            case 'chicken':
                await exec('rm /usr/local/bin/csi');
                await exec('rm /usr/local/bin/csc');
                await exec('sudo apt install chicken-bin');
                break;
        }
        
    }
  


  
}
