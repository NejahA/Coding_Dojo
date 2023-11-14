x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]



x[1][0] =15

students[0]["last_name"]="Bryant"

sports_directory['soccer'][0]="Andres"


students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]



def iterateDictionary(some_list):
    for i in range(len(some_list)):
        fullStr=""
        for key in some_list[i]:
            keyStr= f"{key} - {some_list[i][key]}"
            fullStr=fullStr+ keyStr+", "
        print(fullStr)


iterateDictionary(students) 


def iterateDictionary2(key_name, some_list):
    for i in range(len(some_list)):
        for key in some_list[i]:
            if (key == key_name):
                print (some_list[i][key])

iterateDictionary2("last_name",students)


def printInfo(some_dict): 
    for key in some_dict:
        print(len(some_dict[key]), f"{key}")
        for j in range(len(some_dict[key])):
            print (some_dict[key][j])
        print("\n")

dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)
