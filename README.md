<h1> DockerizeMe </h1>

Automatic creation of Docker image from Code repository.

1. <b>Predict technology of the repository</b></br>
    This is achieved by using the tool 'linguist'. In order to install linguist, run the script linguist_mac.sh for mac, linguist_ubuntu.sh for Linux and linguist_windows.sh for Windows.
    The detect_technology.js     app takes as input the URL of the repository for which the Dockerfile is to be created. It clones the repo and runs          linguist command on it and outputs the technology used.

    ```
    node detect_technology.js <github_repo_url>
    ```
2. <b>Populate the Dockerfile</b></br>
    The output of the detect_technology app, i.e. the technology predicted is then passed as input to the                        populate_dockerfile.js app, along with the name of the repo. As of now, the populate_dockerfile is printing out the          commands for installing base and source dependencies for the repo, these commands would later be written directly to the     Dockerfile.

    ```
    node populate_dockerfile.js <technology> <name_of_repo>
    ```
On a DO Ubuntu droplet, sudo apt-get install docker.io
sudo docker run -p 8080:8080 -td --name test_container img_test
sudo docker exec -it test_container bash
///Main:
run 
```
sh create_dockerfile.sh <githut repo URL>
```
Generates Dockerfile

Copy Dockerfile to the repo (git push)
On a DO droplet, install git, do git clone <githut repo URL>, 
run
```
ssh root@dropletIP
scp setup_droplet.sh root@<dropletIP>:setup_droplet.sh
sh setup_droplet.sh <github repo URL>
cd repo
sudo docker build -t img_dockerizeme .
sudo docker run -p 8080:8080 -td --name npm_updates_container img_dockerizeme
sudo docker exec -it npm_updates_container bash
ln -s /usr/bin/nodejs /usr/bin/node
```

### Future Research Directions.
We see three possible directions for how to improve the tools

1. Create a smart dictionary of dependencies. Be able to scan import statements of code and detect which high-level libraries that need to be installed.

2. Create smart profiles of different types of applications. If we can create a common python/ML container that is able to run most machine learning or text processing applications, then we can focus on how to reduce and optimize the dependencies further.

3. Create a selenium-like bot that can process README.md and install instructions and see if we can create installers from human instructions.
   
    > Everyone: please start doing installation-driven development. Not test-driven, not feature-driven: installation-driven. [1/2]
    > Best possible use of AI: a program that simulates a naive user trying to install your software. "Reads" docs, follows steps... [2/2]
    -- https://twitter.com/gvwilson/status/710950558207774722
