import random

# Specify the path to your text file
file_path = '/Users/nathanielserrano/Documents/GitHub/hangman/hosting/src/words/easy.txt'  # Replace with your file name

# Read words from the file
with open(file_path, 'r') as file:
    words = file.readlines()

# Strip newline characters from each word
words = [word.strip() for word in words]

random_word = random.choice(words)

# Choose a random word from the list

for i in range(20):
    random_word = random.choice(words)
    print("Random word:", random_word)