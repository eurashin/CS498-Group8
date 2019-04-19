# User Stories

***
## Overview
### Completed User Stories:
* Web App Integration (1)
* Accurate Text-to-Speech Bot (2)
* Review and Edit Resume (3)
* Output Resume as PDF (4)
* Displaying Questions for User Input and User Responses (5)
* Resume Sections (6)
* Unique Resume Templates (7)
* Background Noise/Microphone Quality (8)
* Aesthetics (10)

### User Stories for the Future:
* User Accounts (9)
* Add Links to Resume (11)

***

## Iteration 1

### Title: Accurate Speech-to-text Bot (DONE)
* Priority: 2
* Unit (Story Points): 30
* Description: Most people have encountered a speech to text program that has been inaccurate in the past. We don't want our users to have that experience so we spent a long time ensuring that our speech to text was accurate.

    * Task A: Downloading google speech-text kit and getting it up and running. We used javascript in tandem with the downloaded package.  

    * Task B: Test the accuracy by saying many different words and sounds and making any needed changes needed.

### Title: Unique Resume Templates (DONE)
* Priority: 7
* Unit (Story Points): 3
* Description: Provide users with a variety of unique resume templates to help them stand out.

    * Task A: Find Appropriate Resume Templates <br/>
    Search for resume templates that are highly used by people so the user audience of this web app can be expanded.

    * Task B: Convert Resume Templates into HTML <br/>
    Create an HTML landing page for each resume template so that data from the answer arrays filled during the interview portion can be displayed appropriately on the HTML page.


### Title: Background Noise/Microphone Quality (DONE)
* Priority: 8
* Unit (Story Points): 10
* Description: Program should be able to distinguish the user's voice from background noise. Microphone quality should not degrade the performance of the bot.

    * Task A: Test Speech-To-Text's functionality in a quiet setting. <br/>
    Get a basic speech-to-text function working and test for inputs in a quiet room.

    * Task B: Test how much ambient noise makes a difference in the values read. <br/>
    With the previously implemented function, make sure what volume and mic setting works perfectly to test the inputs.

    * Task C: Implement the settings. <br/>
    If any specific settings are required, add that to the description else and recommend the test settings so this feature can be used optimally.

## Iteration 2

### Title: Displaying Questions for User Input and User Responses (DONE)
* Priority: 5
* Unit (Story Points): 20
* Description: The program should display questions to obtain user input in text bubbles on the left side of the screen and user responses in text bubbles on the right side of the screen. There should be a maximum of five text bubbles on each side and the text within each bubble should shift up to make room for the next question/answer set.
    * Task A: Create data structures for storing questions and answers. <br/>
    These structures must be dynamic because the questions can change based on resume type. Use arrays in JS to initialize and update.

    * Task B: Make CSS for displaying interview. <br/>
    Design a user-friendly interface that displays the questions and recorded answers during the interview. Should look similar to a "text conversation" on iMessage.

    * Task C: Update the interface as questions are asked. <br/>
    Make the program update the displayed bubbles as the interview is conducted. JS heavy.

    * Task D: Store and send array of question answers to next page. <br/>
    Transition between HTML pages while maintaining the answers from the interview.

### Title: Resume Sections (DONE)
* Priority: 6
* Unit (Story Points): 20
* Description: Enable the user to describe each of their sections within their resume with a bulleted list of descriptions for each project, work experience, etc.

    * Task A: Partitioning HTML Resume Templates. <br/>
    Create HTML resume templates with well-defined sections for each component of the resume (work experience, education, etc.).

    * Task B: Linking Each Section to the Interview. <br/>
    Label each section of the resume so that the program running the interview portion of the program can easily identify which questions correspond with which section of the resume.

### Title: Aesthetics (DONE)
* Priority: 11
* Unit (Story Points): 3
* Description: Web page should be welcoming and colorful and should include a coherent color scheme that is not black and white.

    * Task A: Find Inspiration. <br/>
    Search through different websites to get an idea of what the basic structure of our website should look like.

    * Task B: Prepare a Draft of Website. <br/>
    Get a basic structure of the website outlook ready on paper.

    * Task C: Write Code. <br/>
    Implement these ideas to create webpages using HTML and CSS.

    * Task D: Add Finishing Touches. <br/>
    Enhance the color schemes and pictures for the main page if needed.

## Iteration 3

### Title: Web App Integration (DONE)
* Priority: 1
* Unit (Story Points): 47
* Description: The application should be accessible to the user without downloading any software. Make sure the server is secure (https) to allow for user preferences with microphone access to be saved.

    * Task A: Install and run Apache on VM. <br/>
    Apache will allow our VM to act as a server for the website. Make sure that the OpenStackVM interface allows for http (port 80) requests to the VM.

    * Task B: Make file paths relative. <br/>
    Files should be placed in the "/var/www/html/" path and all references to images, files, etc. within the source code must be relative.

    * Task C: Make website HTTPS. <br/>
    Server must be secure so that it saves the user's microphone permissions. Create a self-signed certificate with OpenSSL and configure our Apache server to host this certificate.


### Title: Review and Edit Resume (DONE)
* Priority: 3
* Unit (Story Points): 5
* Description: Allow users to edit their resumes before it is finalized and changed to pdf if there are any errors.

    * Task A: Highlight Editable Elements with Box. <br/>
    All editable elements of the form should have a box drawn around them so the user will know which parts of the resume are editable.

    * Task B: Label Editable Elements. <br/>
    All editable elements of HTML page should have an ID associated with it to link it to the question and answer arrays in interview.js.

    * Task C: Remove Box from Editable Elements on Export to PDF. <br/>
    All boxes present around editable elements should be removed when the user clicks on the 'Export Resume' so that the boxes do not show in the final resume PDF.

### Title: Output Resume as PDF (DONE)
* Priority: 4
* Unit (Story Points): 9
* Description: Output final resume as a pdf file that the user can print straight from the web browser.

    * Task A: Search for appropriate JS Libraries. <br/>
    Need to find JS libraries that will convert our HTML page to PDF that will work with our code.

    * Task B: Store and Include jsPDF and html2canvas files. <br/>
    Create a directory for jsPDF and html2canvas files and include them in HTML pages.

    * Task C: Convert HTML to PDF. <br/>
    Write a function that will convert an HTML page to PDF using jsPDF and html2canvas. The function is written in form.js.

    * Task D: Testing the HTML to PDF function. <br/>
    We need to make sure that when clicking on the "Export to PDF" button, the PDF that downloads is an accurate copy of the resume template that is shown on the HTML page.

### Title: User Accounts (FOR FUTURE)
* Priority: 9
* Unit (Story Points): 40
* Description: Implement a database to allow users to create an account to store multiple resumes that they can make.

    * Task A: Log-In Page. <br/>
    Create a log-in page for users to enter their credentials, allowing them to access their past resumes stored on the database.

    * Task B: Choosing an Open Source Database Management System. <br/>
    We need to choose a database management system to use for this project.

    * Task C: Implement Database. <br/>
    Create a database that is linked to the log-in page and allows users to store newly created resumes and to access the resumes that they have created in the past.

### Title: Add Links to Resume (FOR FUTURE)
* Priority: 10
* Unit (Story Points): 2
* Description: Allow users to embed hyperlinks to their personal website, LinkedIn profile, GitHub, etc.

    * Task A: Search for the appropriate JS library. <br/>
    Find a JS library that will automatically embed hyperlinks for websites that appear on the HTML resumes.

    * Task B: Implement Function to Add Links. <br/>
    Write a function that will detect website links on the HTML resume and embed the hyperlink on the HTML resume.
