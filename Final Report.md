<h1> DockerizeMe </h1>
A research project by Rajashree Mandaogane under the guidance of Prof. Dr. Christopher Parnin

<h1> Project description </h1>
As companies are migrating from on-premise software to hosted software applications, they have been finding cost-effective ways to host software more efficiently.
Virtualization using cloud providers such as AWS is one approach to hosting software effectively. One other approach that has gained a lot more popularity is using docker containers. Docker containers are light-weight. Docker allows services to be isolated in a standalone container which can be provisioned and run with less overhead than full virtual machine images, leading to higher resource utilization. Porting traditional applications to run within docker containers is not always so easy. Docker containers often require that the applications remain stateless. This means if two services needed to interact via the file system, then some degree of porting must occur.

<h1> Motivation </h1>
DockerizeMe attempts to make this porting process easier. We support
1. Porting dependencies into Docker image.
2. A dictionary-building approach to keep track of all platform dependecies encountered so far
3. Single command to handle Dockerfile creation

<h1> Process </h1>
DockerizeMe starts off by accepting the URL of a github repository as an argument. It clones this repo and detects the technology used by this repo. We have used Linguist, a python variant of the tool used by Github for doing so. The language which is used the most is then selected as the base or primary language. </br>
DockerizeMe then begins to populate the Dockerfile using the installation commands for the base language detected in the first step. It then checks if the repo contains the proper package management documentaion, meaning package.json in case of a JavaScript repo, or requirements.txt in case of a Python repo. If it exists then it populates the dockerfile with the commands for installing the package management tools if required, and then with the commands to actually install these dependencies.
