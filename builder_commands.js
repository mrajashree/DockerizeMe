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
	"jdk":"RUN sudo apt-get install openjdk-7-jdk\n",
	"node.js":"RUN sudo apt-get install -y nodejs\n",
	"python":"RUN sudo apt-get install -y python2.7\nRUN sudo apt-get install -y python-dev\nRUN sudo apt-get install -y python-pip\n"
}

builder.packageinstallcommands = {
	"npm":"RUN sudo apt-get install -y npm\nCOPY . /src\nRUN cd /src;sudo npm install\n",
	"maven":"RUN wget http://www.eng.lsu.edu/mirrors/apache/maven/maven-3/3.2.3/binaries/apache-maven-3.2.3-bin.zip\nRUN unzip apache-maven-3.2.3-bin.zip\n",
	"pip_requirements":"COPY . /src\nRUN cd /src;pip install -r requirements.txt\n"
}

builder.secondaryinstallcommands = {
	"Python":"RUN sudo apt-get install -y python2.7\nRUN sudo apt-get install -y python-dev\nRUN sudo apt-get install -y python-pip\n"
}

builder.secondarypackageinstallcommands = {
	"npm":"RUN cd /src;sudo npm install\n",
	"maven":"RUN wget http://www.eng.lsu.edu/mirrors/apache/maven/maven-3/3.2.3/binaries/apache-maven-3.2.3-bin.zip\nRUN unzip apache-maven-3.2.3-bin.zip\n",
	"pip_requirements":"RUN cd /src;pip install -r requirements.txt\n"
}

exports.builder = builder;


