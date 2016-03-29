var fs = require('fs');
var technology, path_repo;
var pckgjson = require('./package.json');

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
	"python":"RUN sudo apt-get install -y python2.7\nRUN sudo apt-get install -y python-pip\n"
}

builder.packageinstallcommands = {
	"npm":"RUN sudo apt-get install -y npm\nCOPY . /src\nRUN cd /src;sudo npm install\n",
	"maven":"RUN wget http://www.eng.lsu.edu/mirrors/apache/maven/maven-3/3.2.3/binaries/apache-maven-3.2.3-bin.zip\nRUN unzip apache-maven-3.2.3-bin.zip\n",
	"pip_requirements":"COPY . /src\nRUN cd /src;pip install -r requirements.txt\n"
}

builder.secondarypackageinstallcommands = {
	"Python":"RUN sudo apt-get install -y python2.7\nRUN sudo apt-get install -y python-pip\nRUN cd /src;pip install -r requirements.txt\n"
}


fs.readFile('op.txt', 'utf8',function (err, data) {
  if (err) throw err;
  path_repo = data.trim().split(" ")[0];
  technology = data.trim().split(" ")[1];
  console.log("FROM ubuntu:14.04\n\nRUN sudo apt-get update\n")
  populate(path_repo,technology);
});

// technology = process.argv[3];
// path_repo = process.argv[2];

function populate(path_repo,technology) {
	console.log(builder.baseinstallcommands[builder.basedependencies[technology]]);	//command(s) to install basedependency

	fs.exists('./'+path_repo+'/'+builder.packagedependencies[technology], function(exists) {	// in case of JS, package.json
		if(exists) {
			//console.log("Requirements met");
			if(builder.packagemanager[technology])
			{
				if(technology=='JavaScript')
				{
					var pjson = require('./'+path_repo+'/package.json');
					// if(pjson.hasOwnProperty('engineStrict'))
					// 	console.log('yes')
					// else
					// 	console.log('no')
				}
				console.log(builder.packageinstallcommands[builder.packagemanager[technology]])
				for(language in builder.basedependencies)
				{
					if(language!=technology)
					{
						// console.log('./'+path_repo+'/'+builder.packagedependencies[language])
						fs.exists('./'+path_repo+'/'+builder.packagedependencies[language], function(exists) {
							if(exists) {
								console.log(builder.secondarypackageinstallcommands[language])	
							}
						});
						// {
						// 	console.log(builder.packageinstallcommands[builder.packagemanager[language]])
						// }
					}
				}
			} 
		}
		else
		{
			console.log("Package manager not found");
		}
	});
}

