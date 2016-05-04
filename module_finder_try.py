from modulefinder import ModuleFinder
import glob
import types

finder = ModuleFinder()
files = glob.glob('*.py')

# for file in files:
# 	finder.run_script(file)
finder.run_script('check_dependency.py')

def imports():
    for name, val in globals().items():
        if isinstance(val, types.ModuleType):
            print name

def main():
	imports()

if __name__ == '__main__':
	main()


# print '-'*50
# print 'Modules not imported:'
# print '\n'.join(finder.badmodules.iterkeys())