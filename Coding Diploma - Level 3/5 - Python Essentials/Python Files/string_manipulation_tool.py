input_string = input("Enter a string: ")

print("\nString Manipulation Menu:")
print("a. Convert to uppercase")
print("b. Convert to lowercase")
print("c. Slice the string")
print("d. Calculate string length")
print("e. Loop through characters")

selection = int(input("Enter your selection (1-5): "))

if selection == 1:
    result = input_string.upper()
    print("Uppercase:", result)
elif selection == 2:
    result = input_string.lower()
    print("Lowercase:", result)
elif selection == 3:
    start = int(input("Enter start index: "))
    end = int(input("Enter end index: "))
    result = input_string[start:end]
    print("Sliced string:", result)
elif selection == 4:
    length = len(input_string)
    print("String length:", length)
elif selection == 5:
    print("Characters:")
    for char in input_string:
        print(char)
else:
    print("Invalid selection.")
