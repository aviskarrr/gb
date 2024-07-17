# Automated Git Commits

This project automates git commits with random dates using Node.js, the `simple-git`, `moment`, and `jsonfile` modules.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a GitHub account.
- You have git installed on your machine.

## Setting Up

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/yourrepository.git
   cd yourrepository
```

**Install dependencies:**

```bash
    Copy code
    npm install simple-git
    npm install moment
    npm install jsonfile

```
This will install the following packages:

**simple-git**: A lightweight interface for running git commands in any node.js application.

**moment**: A library for parsing, validating, manipulating, and formatting dates.

**jsonfile**: A module for easily reading/writing JSON files.


2. **Configure the script**:

Ensure the FILE_PATH in the script points to the correct path for your JSON file.

```bash
const FILE_PATH = './data.json';
```

3. **Run the script:**


```bash
node index.js
This will start the process of making 1000 automated commits with random dates.
```
## Usage
The script makes automated commits with random dates and pushes them to the specified GitHub repository.
The commit dates are generated using the moment and random libraries.
The script writes the date to a JSON file and then commits and pushes the changes.

## Contributing
To contribute to this project, follow these steps:

```
Fork this repository.
Create a branch: git checkout -b <branch_name>.
Make your changes and commit them: git commit -m '<commit_message>'.
Push to the original branch: git push origin <project_name>/<location>.
Create the pull request.
Alternatively, see the GitHub documentation on creating a pull request.
```

