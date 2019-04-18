# Test Files for this project

Both the major components of oute webapp were tested seperately. The Audio-input functions were tested with __TSL__ and the buttons and editable fields on the webapp were tested through __Selenium__. 

The __tsl.spec__ file was written to test the audio functionality of the resume. The __tsl.spec.tsl__ file consists of the test cases we generated for the audio input functions.

For the button and editable-fields testing, we used the Selenium IDE. We recorded the path and tested for the buttons.
There are only 3 seperate paths that could be chosen from the start; everythign else that follows would be sequential. 
Therefore, we had to buttons and the editable fields of 3 paths only, namely with the CS, Medical and Business Resumes. 
Which gave us our __.side__ files, which we generated from the Selenium IDE by testing the 3 paths that it could take. These files can be fed again to the Selenium IDE to the path and editable fields of the WebApp. 
