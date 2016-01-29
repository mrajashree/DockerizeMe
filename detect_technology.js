var GitUrlParse = require("git-url-parse");	//sudo npm i --save git-url-parse
var Git = require("nodegit");	//sudo npm install nodegit --save
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var child;

var url_github_repo = process.argv[2];
var name_github_repo = GitUrlParse(url_github_repo).name;

var py =
{
  detect: function()
  {
    var command = 'pylinguist '+name_github_repo;
    exec(command, function(err,out,code)
    {
      console.log("Technology of the repo is: ",out.split('\n')[0].split(' ')[1]);
      //console.log("Technology of the repo is: ",out);
      process.exit();
    });
    
	}
}


Git.Clone(url_github_repo, name_github_repo)
	.then(function(repository) {console.log("Cloned and repo created");})
	.then(function() {py.detect();})
	.done(function () { console.log("Done!");  });

console.log("Name of github repo : ", name_github_repo);

