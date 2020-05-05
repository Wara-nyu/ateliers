def find_longest(string):
    spl = str.split(" ")
    longest = 0
    i=0
    while (i < len(spl)):
        if (len(spl[i]) > longest): 
            longest = len(spl[i])
        i +=1
    return longest

print(find_longest("coucou Alya"))
