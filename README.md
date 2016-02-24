<h1> DockerizeMe </h1>

Automatic creation of Docker image from Code repository.

1. <b>Predict technology of the repository</b></br>
    This is achieved by using the tool 'linguist'. The file install_linguist.sh installs this tool. The detect_technology.js     app takes as input the URL of the repository for which the Dockerfile is to be created. It clones the repo and runs          linguist command on it and outputs the technology used.

    ```
    node detect_technology.js <github_repo_url>
    ```
2. <b>Populate the Dockerfile</b></br>
    The output of the detect_technology app, i.e. the technology predicted is then passed as input to the                        populate_dockerfile.js app, along with the name of the repo. As of now, the populate_dockerfile is printing out the          commands for installing base and source dependencies for the repo, these commands would later be written directly to the     Dockerfile.

    ```
    node populate_dockerfile.js <technology> <name_of_repo>
    ```

