myfile = open("myfile.txt", "r") #open in read mode
# print(myfile.readlines())
# myfile.close()

# myfile = open("myfile.txt")
# lines_to_print = [3, 4]
# for index, line in enumerate(myfile):
#     if ( index in lines_to_print):
#         print(line)
# myfile. close()

import linecache
x = linecache.getline("myfile.txt", 5)
print(x)
