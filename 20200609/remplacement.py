remplacement = {
        "5" : "S",
        "0" : "O",
        "1" : "I"
        }


def replace(mot):
    result = ""
    for i in mot :
#        if i == "5":
#            result += "S"
#        elif i == "1":
#            result += "I"
#        elif i == "0":
#            result += "O"
#        else :
#            result += i
#    return result

        for i in remplacement: 
            result += remplacement[i]
        result += i
        return result

print(replace("PAR15"))
