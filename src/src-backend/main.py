
import subprocess


result = subprocess.run(['ls', '-la'], stdout=subprocess.PIPE)
print(result.stdout.decode('utf-8'))