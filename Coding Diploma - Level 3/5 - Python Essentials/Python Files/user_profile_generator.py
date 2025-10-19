firstName = input("Enter your First Name: ")
lastName = input("Enter your Surname: ")
age = input("Enter your age: ")
city = input("Enter your city: ")
job = input("Enter your job: ")


fullName = firstName + " " + lastName


description = f"{fullName} is {age} years old, lives in {city}, and works as a {job}."


info = '"Profile:"\n' + description


modified_name = fullName.upper()
modified_desc = (
    info.replace("a", "an") if job.startswith(("a", "e", "i", "o", "u")) else info
)

print("##### User Profile #####")
print(modified_name)
print(modified_desc)
print("########################")
