var fs = require('fs');

var builder = {};
builder.basedependencies = {
	"Java":"maven",
	"Javascript":"node.js",
	"Python":"python"
}

builder.packagemanager = {
	"Javascript":"npm"
}

builder.packagedependencies = {
	"Java":"pom.xml",
	"Javascript":"package.json",
	"Python":"requirements.txt"
}

builder.baseinstallcommands = {
	"maven":"RUN sudo apt-get install openjdk-7-jdk\nRUN wget http://www.eng.lsu.edu/mirrors/apache/maven/maven-3/3.2.3/binaries/apache-maven-3.2.3-bin.zip\nRUN unzip apache-maven-3.2.3-bin.zip",
	"node.js":"RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -\nRUN sudo apt-get install -y nodejs",
	"python":"RUN sudo apt-get install -y python2.7\nRUN sudo apt-get install -y python-pip"
}

builder.packageinstallcommands = {
	"npm":"RUN sudo apt-get install -y npm\nRUN npm install"
}

var technology = process.argv[2];

console.log(builder.baseinstallcommands[builder.basedependencies[technology]]);	//command(s) to install basedependency


var path_repo = process.argv[3];	

fs.exists('./'+path_repo+"/"+builder.packagedependencies[technology], function(exists) {
	if(exists) {
		console.log("Requirements met");
		if(builder.packagemanager[technology])
		{
			console.log(builder.packageinstallcommands[builder.packagemanager[technology]])
		} 
	}
});

