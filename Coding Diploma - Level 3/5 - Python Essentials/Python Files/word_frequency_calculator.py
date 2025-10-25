def countFrequency(text):
    if not text:
        return

    strippedText = (
        text.lower().replace(",", "").replace(".", "").replace("!", "").replace("?", "")
    )

    words = strippedText.split()

    wordCount = {}

    def countWords(words, index):
        if index == len(words):
            return

        word = words[index]

        if word in wordCount:
            wordCount[word] += 1
        else:
            wordCount[word] = 1

        countWords(words, index + 1)

    countWords(words, 0)

    return wordCount


test = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

freq = countFrequency(test)

for word, count in freq.items():
    print(f"{word}: {count}")
