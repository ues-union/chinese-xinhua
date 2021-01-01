const fs = require('fs')


async function fix() {
    let raw = await fs.promises.readFile('data/ci.json', { encoding: 'utf8' })
    let cis = JSON.parse(raw)
    let fixed = {}
    for (let ci of cis) {
        if (ci.ci) {
            fixed[ci.ci] = ci
        }
    }
    fixed = Object.values(fixed)
    await fs.promises.writeFile('data/ci_fixed.json', JSON.stringify(fixed, undefined, 2), { encoding: "utf8" })
}

fix()
    .then(() => console.info('fixed'))
    .catch(err => console.error(`fail to fix: ${err}`))
