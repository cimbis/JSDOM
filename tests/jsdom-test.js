const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

/**
 * @param {string} htmlPath
 * @param {string} scriptPath
 * @return {Promise<Element>}
 */
function prepareJSDOM(htmlPath, scriptPath) {
    const testHTML = fs.readFileSync(htmlPath, 'utf-8').trim();
    const testScript = fs.readFileSync(scriptPath, 'utf-8').trim();
    const assembledHTML = testHTML.replace('{%_script_%}', testScript);

    const dom = new JSDOM(assembledHTML, {
        runScripts: 'dangerously',
        pretendToBeVisual: true,
        resources: 'usable'
    });

    return new Promise((resolve, reject) => {
        dom.window.document.addEventListener('DOMContentLoaded', () => {
            console.log('*** DOMContentLoaded ***');
            setImmediate(() => {
                console.log('*** RESOLVING ***');
                resolve(dom.window.document.body);
            })
        });
    })
}

const testHtmlPath = path.join(__dirname, '/index.html');
const testScriptPath = path.join(__dirname, '../', 'dist', 'MenuToggle.umd.js');
prepareJSDOM(testHtmlPath, testScriptPath).then((bodyElement) => {
    console.log(bodyElement)
})