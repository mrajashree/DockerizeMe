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
