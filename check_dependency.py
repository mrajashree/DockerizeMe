from dependency_dictionary import requirements_dictionary
import os
import json

if os.path.isfile('op.txt'):
	with open('op.txt') as f:
		read_data = f.read()
	repo, technology = read_data.split()

file_name = repo+'/requirements.txt'
if os.path.isfile(file_name):
	with open (file_name,'r') as f:
		read_data = f.read() 
	packages = []
	requirement = read_data.splitlines()
	for line in requirement:
		packages.append(line.split('==')[0])

	for package in packages:
		if package in requirements_dictionary.keys():
			for dependency in requirements_dictionary[package]:
				print "RUN sudo apt-get install -y {0}".format(dependency)

file_name = repo+'/package.json'
if os.path.isfile(file_name):
	with open(file_name,'r') as f:
		read_data = f.read()
	pckg_json =  json.loads(read_data)
	for package in pckg_json['dependencies']:
		if package in requirements_dictionary.keys():
			for dependency in requirements_dictionary[package]:
				print "RUN sudo apt-get install -y {0}".format(dependency)