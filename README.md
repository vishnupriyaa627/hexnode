# Hexnode

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Instructions to run Hexnode Angular Project(Replica)
# Prerequisite
Angular, Node.js, Git, Visual Studio Code

# Step1
Go to the GitHub Repo Link provided (https://github.com/vishnupriyaa627/hexnode) and makesure it is in 'hexnode' repository and 'master' branch

# Step2
Now click on Code Button and Copy the HTTPS link

# Step3
Now to clone the project into local, Open Git Bash in any location, enter git clone *paste the copied https link here*, press Enter

# Step4
Open the folder in Visual Studio Code, Right click on the folder and give Open in Integrated Terminal

# Step5
Now enter 'npm i' in the terminal and press Enter, in order to install all the packages required

# Step6
Now to run the project, enter 'ng serve' in the terminal and press Enter. Hexnode Replica Angular project will be hosted in `http://localhost:4200/`.


### Notes
## Development process of Hexnode Angular Project(Replica)

- Started with Initial setup of installations including Angular, Node.js, Visual Studio Code, Git, Github public repository

- Analyzed the original Hexnode Android MDM Solution webpage and drafted the seggregation of components required for the webpage

- Added all the necessary images, icons, and other media used on the page in the assets folder

- Added all the required data in data.service.ts

- To achieve a similar appearance to the original webpage, have utilized the HTML code from that webpage as a reference.

## Challenges faced while creating Hexnode Angular Project(Replica)

1. ng : The term 'ng' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the 
spelling of the name, or if a path was included, verify that the path is correct and try again.

- to handle this error add npm path(C:\Users\PC\AppData\Roaming\npm) in 'Path' variable,
This PC --> Advanced system settings --> Environment Variables --> In System variables --> Path

2. ng : File C:\Users\PC\AppData\Roaming\npm\ng.ps1 cannot be loaded because running scripts is disabled on this system. For more  
information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.

- Win+X --> Windows PowerShell (Admin) --> Set-ExecutionPolicy RemoteSigned

3. 404 error during GET call while fetching images from assets folder

- added below cde in angular.json file
  "assets": [
              {
                "glob": "**/*",
                "input": "src/assets",
                "output": "/assets/"
              }
            ],

            