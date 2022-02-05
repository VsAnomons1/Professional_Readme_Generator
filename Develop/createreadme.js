const fs = require('fs');
const inquirer = require('inquirer');
const markdownbadge = require('./markdownbadge');
const generateReadme = 
({name, projectTitle, description, installation, usage, contribution, github, test, license}) => 
`# ${projectTitle}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)
- [License](#license)
## Description 
${description}
## Installation
Intial steps to start the project:
${installation}
## Usage 
${usage}
## Contribution 
${contribution}
## Test 
test instructions:
${test}
## Questions
if issues arise on the project click on the link below:
[Github Link](https://github.com/${github})
## License 
${markdownbadge.getMarkdownBadge(license, name)} 
Copyright (c) [2022] [${name}]`

inquirer.prompt(
    [
        {
            type: "input",
            name: "name",
            message: "What is your fullname?"
        },
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "What is your project about?"
        },
        {
            type: "input",
            name: "installation",
            message: "Any installation requirements on your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "What usage information did you get from your project?"
        },
        {
            type: "input",
            name: "contribution",
            message: "Any contribution guidelines of your project?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your Github username?"
        },
        {
            type: "input",
            name: "test",
            message: "Any test instructions on your project?"
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
    err ? console.log(err): console.log("Successfully generated a Readme template!!!")
    );
});