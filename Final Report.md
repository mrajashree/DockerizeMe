<h1> DockerizeMe </h1>
A research project by Rajashree Mandaogane under the guidance of Prof. Dr. Christopher Parnin

<h1> Project description </h1>
As companies are migrating from on-premise software to hosted software applications, they have been finding cost-effective ways to host software more efficiently.
Virtualization using cloud providers such as AWS is one approach to hosting software effectively. One other approach that has gained a lot more popularity is using docker containers. Docker containers are light-weight. Docker allows services to be isolated in a standalone container which can be provisioned and run with less overhead than full virtual machine images, leading to higher resource utilization. Porting traditional applications to run within docker containers is not always so easy. Docker containers often require that the applications remain stateless. This means if two services needed to interact via the file system, then some degree of porting must occur.

<h1> Motivation </h1>
DockerizeMe attempts to make this porting process easier. We support</br>
1. Porting dependencies into Docker image.</br>
2. A dictionary-building approach to keep track of all platform dependecies encountered so far</br>
3. Single command to handle Dockerfile creation</br>

<h1> Process </h1>
DockerizeMe starts off by accepting the URL of a github repository as an argument. It clones this repo and detects the technology used by this repo. We have used Linguist, a python variant of the tool used by Github for doing so. The language which is used the most is then selected as the base or primary language. </br>
DockerizeMe then begins to populate the Dockerfile using the installation commands for the base language detected in the first step. It then checks if the repo contains the proper package management documentaion, meaning package.json in case of a JavaScript repo, or requirements.txt in case of a Python repo. If it exists then it populates the dockerfile with the commands for installing the package management tools if required, and then with the commands to actually install these dependencies. </br>
There are certain dependencies, such as some platform dependencies for some packages that might not be a part of the requirements.txt or package.json files. However these dependencies need to be installed too. DockerizeMe attempts at storing such dependencies in a dictionary of dependencies. Every package listed is checked for an entry in the dependency dictionary. If found, those dependencies are installed. </br>
Once the Dockerfile is created, it's upto the user to push it to the repository or save it for further use.

<h1> Implementation </h1>
Currently DockerizeMe only supports Python, Java and JavaScript languages. </br>
The implementation steps and instructions on how to use DockerizeMe are given in https://github.com/alt-code/DockerizeMe/blob/master/README.md

<h1> Results </h1>
DockerizeMe has been tested on three repositories:</br>
1. DockerizeMe (On itself) </br>
2. Wolf (https://github.com/rchakra3/wolf) </br>
3. Npm-check-updates (https://github.com/tjunnone/npm-check-updates) </br>

Docker containers created for these repos could successfully run these tools.

<h1> Future Scope </h1>
1. Automatic updation of dependency dictionary.
2. Creating a selenium-like bot that can process README.md and install instructions and see if we can create installers from human instructions.
3. Establishing docker cross container communication
4. Extending DockerizeMe for all languages.
