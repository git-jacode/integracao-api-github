const test = require('./test')
const axios = require('axios')


const owners = [];

for (const item of test.workflow_runs) {
    owners.push({
        name: item.head_commit.author.name,
        urlJobs: item.jobs_url
    })
}

async function teste() {
    const all = [];
    for (const item of owners) {
        const { data } = await axios.get(item.urlJobs);

        all.push({
            data: data.jobs,
            owner: item.name
        })
    }

    for (const item of all) {
        console.log("================INICIO===================")

        console.log(item.owner);
        console.log(item.data[0].steps[7])

        console.log("=================FIM==================")
    }
}

teste();



console.log(owners)