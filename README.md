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
