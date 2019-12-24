const core = require('@actions/core');
const {exec} = require('@actions/exec');


main().catch(err =>{
    core.setFailed(err.message);
})


async function main() {

    const implementation = core.getInput('implementation', {required: true});
    const version = core.getInput('version');
    const option = core.getInput('option');
    


    if (process.platform === 'macos') {
        switch (implementation) {

            case'chez':
                await exec('brew install chezscheme');
                if(option === 'raven'){
                    await exec('cp /usr/local/bin/chez /usr/local/bin/scheme');
                }
                break;
        }
        if(option === 'raven'){
            await exec('curl -L http://ravensc.com/install | scheme');
        }
    } else if (process.platform === 'linux') {
        switch (implementation) {

            case'chez':
                await exec('sudo apt install chezscheme');
                break;
        }
        if(option === 'raven'){
            await exec('curl -L http://ravensc.com/install | sudo scheme');
        }
    }
  
    

  
}
