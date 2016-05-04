var fs = require('fs');
var technology, path_repo;
var pckgjson = require('./package.json');

var exports = module.exports = {};

var builder = {};
builder.basedependencies = {
	"Java":"jdk",
	"JavaScript":"node.js",
	"Python":"python"
}

builder.packagemanager = {
	"JavaScript":"npm",
	"Java":"maven",
	"Python":"pip_requirements"
}

builder.packagedependencies = {
	"Java":"pom.xml",
	"JavaScript":"package.json",
	"Python":"requirements.txt"
}

builder.baseinstallcommands = {
	"jdk":"RUN sudo apt-get install -y apt-file\nRUN sudo apt-file update\nRUN apt-file search -y add-apt-repository \nRUN sudo apt-get install -y software-properties-common\nRUN sudo add-apt-repository -y ppa:webupd8team/java\nRUN echo debconf shared/accepted-oracle-license-v1-1 select true | \
  sudo debconf-set-selections\nRUN sudo apt-get update -y\nRUN sudo apt-get install oracle-java8-installer -y\n",
	"node.js":"RUN sudo apt-get install -y nodejs\n",
	"python":"RUN sudo apt-get install -y python2.7\nRUN sudo apt-get install -y python-dev\nRUN sudo apt-get install -y python-pip\n"
}

builder.packageinstallcommands = {
	"npm":"RUN sudo apt-get install -y npm\nCOPY . /src\nRUN cd /src;sudo npm install\n",
	"maven":"RUN sudo apt-get install -y maven\nCOPY . /src\n",
	"pip_requirements":"COPY . /src\nRUN cd /src;pip install -r requirements.txt\n"
}

builder.languageindicator = {
	".jar":"Java"
}

builder.secondaryinstallcommands = {
	"Python":"RUN sudo apt-get install -y python2.7\nRUN sudo apt-get install -y python-dev\nRUN sudo apt-get install -y python-pip\n",
	"Java":"RUN sudo apt-get install -y apt-file\nRUN sudo apt-file update\nRUN apt-file search -y add-apt-repository \nRUN sudo apt-get install -y software-properties-common\nRUN sudo add-apt-repository -y ppa:webupd8team/java\nRUN echo debconf shared/accepted-oracle-license-v1-1 select true | \
  sudo debconf-set-selections\nRUN sudo apt-get update -y\nRUN sudo apt-get install oracle-java8-installer -y\n",
	"JavaScript":"RUN sudo apt-get install -y nodejs\n"
}

builder.secondarypackageinstallcommands = {
	"npm":"RUN cd /src;sudo npm install\n",
	"maven":"RUN sudo apt-get install -y maven\n",
	"pip_requirements":"RUN cd /src;pip install -r requirements.txt\n"
}

exports.builder = builder;


