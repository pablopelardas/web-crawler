
# Node Lab - Web Crawler

As the title says, this is a lab project to practice node recommended by [BootDev](https://www.boot.dev/tracks/backend).

The goal of the project is to make a Web Crawler that search and inform for all links in a domain.

The project receive an url as a process argument and crawl through it listing the times an url is found in the htmls.


## Installation

To run the project you must have NodeJs and npm installed. Run the following commands to see if you meet these requirements.

```bash
node --version
npm --version
```
    

## Running the project

To run this project run the following command

```bash
  npm start
```
This will build the /dist folder transpiling Typescript, and will run the process with a prefixed url setted in the package.json. If you want to try another url, you can execute the following command

```bash
 node ./dist/src/main.js url
```

