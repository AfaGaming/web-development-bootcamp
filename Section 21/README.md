
# Section 21 - Git, GitHub, and Version Control

**About:** This section is an introduction to how Git works and how I can use it to achieve various powerful ends. I learned how to do things such as version control, clone repositories, fork, make a pull request, merge repositories and a whole bunch more. 
## Lessons Learned
- Using Git Locally on Command Line Terminal
    - 'vim' - to open files on command line Terminal
    - git init - initializing git
    - 'ls -a' - allows you to see all the hidden files in a directory
    - once you initialize git, you will have a '.git' named file in your directory, which is going to allow you to track all your changes, commit your changes to perform version control.
    - 'working directory' - a terminology used to refer to the directory we are in on command line Terminal
    - In order to start tracking the changes of my files, I have to add the files to 'staging area'.
    - 'staging area' -  a terminology used to refer to an intermediate place where I can pick and choose which files inside my working directory I want to commit.
    - 'git status' - this command allows you to see what is inside in my staging area at the time.
    - 'untracked files' - a terminology used to refer to files that are in the working directory but, are not yet in the staging area.
    - 'git add filename.ext' - This command allows you to add the file to the staging area and to start tracking changes in it.
    - 'git commit' - allows you to commit the file in the staging area
    - 'git commit -m "this is my message"' -- '-m' flag allows you to commit message. Committing message is important because it helps you keep track of what changes you have made in each commit. So, when you create a new save point, you have to be as explicit as possible about what changes were made between last save point and current save point.
    - 'git log' - this command allows you see what commits you've made
    - 'git add .' - this command allows you to add all the files in the current directory to staging area.
    - 'git diff filename.ext' - this command allows you to see the differences in the file in its current state vs its last save point.
    - 'git checkout filename.ext' this command allows you to roll back the file to the last version that was committed in the local repository.
- GitHub and Remote Repositories
    - remote repository is a repository that is hosted on somebody else's server or somebody else's computer by using GitHub.
    - in order to push your local commits to GitHub, you will first have to create a remote.
    - remote is essentially telling my local git repository that I've created a remote repository somewhere on the internet and I want to transfer all of my commits over there.
    - 'git remote add origin https://url-of-remote-repository-on-github.git' - this command creates your remote
        - origin is simply the name of your remote, you can theoretically call it whatever you want but, origin is the just the common naming convention.
    - 'git push -u origin master' - this command pushed your local repository to the remote repository using the '-u' flag or the u option which basically links up your remote and your local repositories and then it poshes it towards the remote that's called origin and push it to the branch called master.
    - Master branch is simply the default branch or the main branch of all of your commits.
- Gitignore
    - 'touch .gitignore' - this command lets you make a hidden gitignore file
    - 'git rm --chached -r .' - this command allows you to unstage all the files in the staging
        - '-r' - this flag means recursive
    - 'open .gitignore' - this allows the gitignore file to open in your default editor
    - open the gitignore file and specify each and every file that you want git to ignore on a new line
        - you can use '#' to comment in gitignore
        - '*.ext' - this is wild card, so if you type this in gitignore file, all the files with that extension will be ignored.
- Cloning
    - 'git clone https://url.com' - this allows you to clone the project from github
- Branching & Merging
    - 'git branch branch-name' - this command creates a branch to your master branch of the name specified
    - 'git branch' - this command lists all the branches of the repository
        - '*' shows you which branch you are currently on
    - 'git checkout branch-name' - this command allows you to switch branch to work on
    - in order to merge branches, go back to the master branch
    - 'git merge branch-name' - after you hit enter, the command line will open vim for you to add merge message if you'd like.
        - ':q!' - this command will save the vim and exit the vim editor
    - at this point, your branches should have been merged into the master branch
        - note: your side branch will still exist after merge
- Forking & Pull Requests
    - Forking is simply making a copy or a duplicate of a remote repository and putting it under your own GitHub account.
        - Note: Forking a repository creates a copy of the original repository on our GitHub account while Cloning a repository creates a copy of the original repository on our local machine.
    

## Demo





## Screenshots




## Authors

- [@bhoamikhona](https://github.com/bhoamikhona)

