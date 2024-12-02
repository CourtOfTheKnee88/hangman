# This file was for splitting a txt file of a bunch of words into various difficulty levels based on word length.
# This file can be ignored.

# Read words from the input text file
input_file = '../../src/words/wordlist.txt'  

# Open output files for writing
with open('../../src/words/easy.txt', 'w') as easy_file, \
     open('../../src/words/medium.txt', 'w') as medium_file, \
     open('../../src/words/hard.txt', 'w') as hard_file:

    # Read the words from the input file
    with open(input_file, 'r') as file:
        words = file.read().split()

        # Iterate through each word and classify it
        for word in words:
            # Determine the length of the word and write it to the appropriate file
            if len(word) <= 5:
                easy_file.write(word + '\n')
            elif 6 <= len(word) <= 7:
                medium_file.write(word + '\n')
            else:
                hard_file.write(word + '\n')

print("Words have been classified and written to easy.txt, medium.txt, and hard.txt.")
