var fs = require('fs');
var pckgjson = require('./package.json');
var child_process = require('child_process');
var exec = require('child_process').exec;

var builder_commands = require("./builder_commands.js");
var builder = builder_commands.builder
var technology, path_repo;

fs.readFile('op.txt', 'utf8',function (err, data) {
  if (err) throw err;
  path_repo = data.trim().split(" ")[0];
  technology = data.trim().split(" ")[1];
  console.log("FROM ubuntu:14.04\n\nRUN sudo apt-get update\n")
  console.log(builder.baseinstallcommands[builder.basedependencies[technology]]);	//command(s) to install basedependency

	//After installing basic python, node js. first check the dependency dictionary
	var command = "python check_dependency.py";
	exec(command, function(err,out,code) {
		console.log(out)
		populate(path_repo,technology);
    });
});

// technology = process.argv[3];
// path_repo = process.argv[2];

function populate(path_repo,technology) {

	fs.exists('./'+path_repo+'/'+builder.packagedependencies[technology], function(exists) {	// in case of JS, package.json
		if(exists) {
			//console.log("Requirements met");
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
				}
			}
 		}
		else
		{
			console.log("Package manager not found");
		}
	});
}


// if(technology=='JavaScript')
				// {
				// 	var pjson = require('./'+path_repo+'/package.json');
				// 	// if(pjson.hasOwnProperty('engineStrict'))
				// 	// 	console.log('yes')
				// 	// else
				// 	// 	console.log('no')
				// }
