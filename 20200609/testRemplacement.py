from remplacement import *
import unittest

class RemplacementTest(unittest.TestCase):

    def test_1_renvoie_I(self):
        self.assertEqual("I", replace("1"))
        
    def test_5_renvoie_S(self):
        self.assertEqual("S", replace("5"))
    
    def test_0_renvoie_O(self):
        self.assertEqual("O", replace("0"))

    def test_PAR15_renvoie_PARIS(self):
        self.assertEqual("PARIS", replace("PAR15"))

unittest.main()
