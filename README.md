<h1> DockerizeMe </h1>

Automatic creation of Docker image from Code repository.

1. <b>Predict technology of the repository</b></br>
    This is achieved by using the tool 'linguist'. Instrucions on how to use Linguist can be found here: https://github.com/douban/linguist
    The detect_technology.js     app takes as input the URL of the repository for which the Dockerfile is to be created. It clones the repo and runs          linguist command on it and outputs the technology used.

2. <b>Populate the Dockerfile</b></br>
    The output of the detect_technology app, i.e. the technology predicted is then passed as input to the                        populate_dockerfile.js app, along with the name of the repo. The populate_dockerfile is printing out the          commands for installing base and source dependencies for the repo. All these commands are stored in the Dockerfile.

3. <b>Creating Dockerfile</b></br>
    The script create_dockerfile.sh runs these files sequentially creating a Dockerfile
    ```
    sh create_dockerfile.sh <github repo URL>
    ```
    
Once created, you can either save the Dockerfile somewhere or push it to the repo it was created for
<h2> Testing on a DO droplet </h2>
On a DO Ubuntu droplet, run the setup.sh script
```
scp setup_droplet.sh root@<dropletIP>:setup_droplet.sh
sh setup.sh <github repo URL>
```
Then create docker image using following steps (Assuming the Dockerfile created using create_dockerfile.sh is a part of this repo

```
cd repo
sudo docker build -t img_dockerizeme .
sudo docker run -p 8080:8080 -td --name npm_updates_container img_dockerizeme
sudo docker exec -it npm_updates_container bash
```

### Future Research Directions.
We see three possible directions for how to improve the tools

1. Create a smart dictionary of dependencies. Be able to scan import statements of code and detect which high-level libraries that need to be installed.

2. Create smart profiles of different types of applications. If we can create a common python/ML container that is able to run most machine learning or text processing applications, then we can focus on how to reduce and optimize the dependencies further.

3. Create a selenium-like bot that can process README.md and install instructions and see if we can create installers from human instructions.

We have already started working on the approach that involves creation of a smart dictionary.

 
