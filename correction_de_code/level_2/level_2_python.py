class Dinglemouse(object):
    
    def __init__(self):
        self.name = None
        self.sex  = None
        self.age  = None
        self.reponseNom = ""
        self.responseSex = ""
        self.responceAge = ""
        self.compt = 0
        self.ordre = {
                "numAge" : 0,
                "numSexe" : 0,
                "numNom" : 0
                }
    
    def setAge(self, age):
        self.compt +=1
        self.ordre["numAge"] = sellf.compt
        self.age = age
        self.responseAge = "I am {}. ".format(self.age)
        return self
        
    def setSex(self, sex):
        self.compt += 1
        self.ordre["numSexe"] = self.compt
        self.sex = sex
        if self.reponseSex = "I am male. "
        if self.reponseSex = "I am Female. "
        return self
        
    def setName(self, name):
        self.compt += 1
        self.ordre["numNom"] = self.compt
        self.name = name
        self.reponseNom = "My name is {}. ".format(self.name)
        return self
        
    def hello(self):
        #return "Hello. My name is {}. I am {}. I am {}.".format(self.name, self.age, "male" if self.sex=='M' else "female")
        response = "Hello. "
        self.ordretrie = sorted(self.ordre.items(), key=lambda x: x[1])
        for k in self.ordretrie:
            print(k[0])
            if k[0] == "numNom":
                response += selfe.reponseNom
            elif k[0] == "numSexe":
                response += self.responseSex
            elif k[0] == "numAge":
                response += self.responseAge
        return response

Alya = Dinglemouse()
Alya.setAge(32)
Alya.setName("Alya")
Alya.setName("Laya")
Alya.setSex("F")
Alya.setAge(33)
Alya.setName("Laya")

print(Alya.hello())
