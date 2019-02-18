# speech to text trial 1
# the simplest form of speech to text 
# using google APIs


import speech_recognition as sr
import time

r = sr.Recognizer()


def get_name():
    name_in = ''
    with sr.Microphone() as source:
        print('What is your name ?')
        time.sleep(1)
        audio = r.listen(source)
        print('got it, thanks !')

    try:
        name_in = r.recognize_google(audio)
        # f.write(name_in)
    except:
        pass
    
    return name_in

def get_major():
    major_in = ''
    with sr.Microphone() as source:
        print('What is your major ?')
        time.sleep(1)
        audio = r.listen(source)
        print('got it, thanks !')

    try:
        major_in = r.recognize_google(audio)
        # f.write(major_in)
    except:
        pass

    return major_in

def get_gpa():
    gpa_in = ''
    with sr.Microphone() as source:
        print('What is your GPA ?')
        time.sleep(1)
        audio = r.listen(source)
        print('got it, thanks !')

    try:
        gpa_in = r.recognize_google(audio)
        # f.write(gpa_in)
    except:
        pass
    
    return gpa_in


def get_hobbies():
    hobbies = []
    print("name all the hobbies and say EXIT to quit")
    while hobby_in is not 'exit':
        with sr.Microphone() as source:
            print('listening now')
            time.sleep(1)
            audio = r.listen(source)
            print('got it, thanks !')

        try:
            hobby_in = r.recognize_google(audio)
            hobbies.append(hobby_in)
            # f.write(hobby_in)
        except:
            pass
        
    return hobbies

def get_jobs():
    jobs = []
    print("name all the comapnies you have worked for and say EXIT to quit")
    while hobby_in is not 'exit':
        with sr.Microphone() as source:
            print('listening now')
            time.sleep(1)
            audio = r.listen(source)
            print('got it, thanks !')

        try:
            hobby_in = r.recognize_google(audio)
            jobs.append(hobby_in)
            # f.write(hobby_in)
        except:
            pass
        
    return jobs

def main():

    

    print 'Welcome to the resume builder !'
    time.sleep(2)
    print 'You will be asked a bunch of quesitons and your reponses should help us tailor make a resume for you'
    time.sleep(4)

    name = get_name()
    major = get_major()
    gpa = get_gpa()
    job = get_jobs()
    hobby = get_hobbies()



    print 'for Name: ', get_name
    print
    print 'for Major: ', get_major, '\t\t GPA: ', get_gpa
    print
    print 'for Work Experience: ', get_jobs
    print
    print 'for Hobbies: ', get_hobbies

    f = open("speechToTextResponses.txt", "w+")
    f.write(name)
    f.write(major)
    f.write(gpa)
    f.write(job)
    f.write(hobby)
    f.close()

main()

# print
# print
# print 'NAME: ', name_in
# print
# print 'MAJOR: ', major_in, '\t\t GPA: ', gpa_in
# print
# print 'WORK EXPERIENCE: ', work_in
# print
# print 'AWARDS: ', awards_in
# print


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
