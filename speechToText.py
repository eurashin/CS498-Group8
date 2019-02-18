# speech to text trial 1
# the simplest form of speech to text 
# using google APIs


import speech_recognition as sr
import time

r = sr.Recognizer()
f = open("speechToTextResponses.txt", "w+")

with sr.Microphone() as source:
    print('What is your name ?')
    time.sleep(1)
    audio = r.listen(source)
    print('got it, thanks !')

try:
    name_in = r.recognize_google(audio)
    f.write(name_in)
except:
    pass

with sr.Microphone() as source:
    print('What is your major ?')
    time.sleep(1)
    audio = r.listen(source)
    print('got it, thanks !')

try:
    major_in = r.recognize_google(audio)
    f.write(major_in)
except:
    pass

with sr.Microphone() as source:
    print('What is your GPA ?')
    time.sleep(1)
    audio = r.listen(source)
    print('got it, thanks !')

try:
    gpa_in = r.recognize_google(audio)
    f.write(gpa_in)
except:
    pass

with sr.Microphone() as source:
    print('What are your hobbies ?')
    time.sleep(1)
    audio = r.listen(source)
    print('got it, thanks !')

try:
    hobbies_in = r.recognize_google(audio)
    f.write(hobbies_in)
except:
    pass


with sr.Microphone() as source:
    print('Where all have you worked?')
    time.sleep(1)
    audio = r.listen(source)
    print('got it, thanks !')

try:
    work_in = r.recognize_google(audio)
    f.write(work_in)
except:
    pass

with sr.Microphone() as source:
    print('have you recieved any awards ?')
    time.sleep(1)
    audio = r.listen(source)
    print('got it, thanks !')

try:
    awards_in = r.recognize_google(audio)
    f.write(awards_in)
except:
    pass


f.close()

print
print
print 'NAME: ', name_in
print
print 'MAJOR: ', major_in, '\t\t GPA: ', gpa_in
print
print 'WORK EXPERIENCE: ', work_in
print
print 'AWARDS: ', awards_in
print


# need a architecture that takes in: 
# a number of awards
# a number of work experiences
# a statement of purpose, if we want it that way 
# a number of projects 
# need to a dd a lag time
# seperate words 
# test multiple people for time lags 
# we can add languages 
# I can give you a text file as an output for these answers

# statement of purpose 

# name 
# major
# gpa 

# relevant courses #

# experiences 
# projects

# extra curicular 
# award
