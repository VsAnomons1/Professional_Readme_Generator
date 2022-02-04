const fs = require('fs');
const inquirer = require('inquirer');
const markdownbadge = require('./markdownbadge');
const generateReadme = 
({projectTitle, description, installation, usage, contribution, test, license}) => 
`# ${projectTitle}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
## Description {#description}
${description}
## Installation {#installation}
${installation}
## Usage {#usage}
${usage}
## Contribution {#contribution}
${contribution}
## Test {#test}
${test}
## License {#license}
${markdownbadge.getMarkdownBadge(license)}`

inquirer.prompt(
    [
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Description of what your project does?"
        },
        {
            type: "input",
            name: "installation",
            message: "Provide any installation requirements on your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "Type in the the usage information of your project?"
        },
        {
            type: "input",
            name: "contribution",
            message: "Type in contribution guidelines of your project?"
        },
        {
            type: "input",
            name: "test",
            message: "Type in the test instructions of your project?"
        },
        {
            type: "list",
            choices: ["MIT", "GNU", "Apache"],
            name: "license",
            message: "Choose a license for your project?"
        }
    ]
)
.then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile("readme_template.md", readmeContent, (err) => 
    err ? console.log(err): console.log("Successfully generated readme_template.md!!!")
    );
});