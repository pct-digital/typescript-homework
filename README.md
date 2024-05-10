This is a possible solution for the typescript homework.
Check the commit history, it shows the diffs between each step of setting up the repository.

# Prerequisites

You need node installed on your local machine to work through these tutorials. It is best to use [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) to manage node versions.

1. Install NVM as described in the link
1. `nvm install 20`
1. `node --version` should yield version 20

# Create NX Workspace

1.  `npx create-nx-workspace nx-ts`
    - Stack: None
    - Integrated Monorepo
    - Skip cloud options
    - "the command creates a subfolder called "nx-ts". Move all contents of the folder directly into the repository:
      - `rm nx-ts/README.md`
      - `mv nx-ts/* .`
      - `mv nx-ts/.* .`
      - `rmdir nx-ts`
1.  `npx nx add node`
1.  `npx nx add @nx/node` & `npm install`
1.  Make sure to reload VS Code at this point & have the NX plugin installed, it will be recommended by VS Code on reload.
1.  Create folder "apps" & run NX generate via VS Code plugin for a node project
    - To do this right click on "app"
    - Select NX generate
    - Search "node"
    - Pick the @nx/node application generator
    - Name the application "ts-app"
    - Select webpack as the bunderler, as that is the bundler we use in all of our projects
    - Click "Generate"
    - You can delete the apps/ts-app-e2e folder, we will not be doing e2e tests here
1.  Start your application
    - You may need to do `npx nx reset` first, as creating so many files at once sometimes causes issues with the NX Daemon.
    - Now you can start your app: `npx nx run ts-app:serve`
