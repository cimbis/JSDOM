// require('core-js/stable');
// require('regenerator-runtime/runtime');
//
// const fs = require('fs');
// const path = require('path');
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;
//
// /**
//  * @param {string} htmlPath
//  * @param {string} scriptPath
//  * @return {Promise<Element>}
//  */
// function prepareJSDOM(htmlPath, scriptPath) {
//     const testHTML = fs.readFileSync(htmlPath, 'utf-8').trim();
//     const testScript = fs.readFileSync(scriptPath, 'utf-8').trim();
//     const assembledHTML = testHTML.replace('{%_script_%}', testScript);
//
//     const dom = new JSDOM(assembledHTML, {
//         runScripts: 'dangerously',
//         pretendToBeVisual: true,
//         resources: 'usable'
//     });
//
//     return new Promise((resolve, reject) => {
//         dom.window.document.addEventListener('DOMContentLoaded', () => {
//             console.log('*** DOMContentLoaded ***');
//             setImmediate(() => {
//                 console.log('*** RESOLVING ***');
//                 resolve(dom.window.document.body);
//             })
//         });
//     })
// }
//
// describe('MenuToggle', () => {
//     let container;
//
//     const testHtmlPath = path.join(__dirname, '/index.html');
//     const testScriptPath = path.join(__dirname, '../', 'dist', 'MenuToggle.umd.js');
//
//     beforeEach(async () => {
//         container = await prepareJSDOM(testHtmlPath, testScriptPath);
//     });
//
//     describe('click', () => {
//         test('clickity clackity', async () => {
//             // const languageMenu = container.querySelector('.change-language-holder');
//             const languageMenuButton = container.querySelector('#desktop-language-trigger');
//             languageMenuButton.click();
//             // await waitFor(() => expect(languageMenu.classList).toContain('is-open'));
//         });
//     });
// });