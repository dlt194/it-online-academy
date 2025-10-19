import random

random_number = random.randrange(1, 100)

print("Random Number: ", random_number)
print("Random Number Type: " + type(random_number))


floatNumber = float(random_number)
ComplexNumber = complex(random_number)

print("Random Number as Float:", floatNumber)
print("Random Number Type after Conversion to Float:", type(floatNumber))

print("Random Number as Complex:", ComplexNumber)
print("Random Number Type after Conversion to Complex:", type(ComplexNumber))
