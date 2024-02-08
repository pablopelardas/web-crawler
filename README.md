
# Node Lab - Web Crawler

As the title says, this is a lab project to practice node recommended by [BootDev](https://www.boot.dev/tracks/backend).

The goal of the project is to make a Web Crawler that searches and reports all links in a domain.

The project receives a url as a process argument and crawls it by listing the times a url is found in the htmls.


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
This will build the /dist folder transpiling Typescript, and run the process with a url prefixed in the package.json. If you want to try another url, you can run the following command

```bash
 node ./dist/src/main.js url
```

