FROM ubuntu:14.04

RUN sudo apt-get update

RUN sudo apt-get install -y nodejs

RUN sudo apt-get install -y libmagic-dev
RUN sudo apt-get install -y libicu-dev
RUN sudo apt-get install -y python-pygments
RUN sudo apt-get install -y git

RUN sudo apt-get install -y npm
COPY . /src
RUN cd /src;sudo npm install

RUN sudo apt-get install -y python2.7
RUN sudo apt-get install -y python-dev
RUN sudo apt-get install -y python-pip

RUN cd /src;pip install -r requirements.txt

