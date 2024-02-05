# File_manager

Please read this file.

The program is started by npm-script start in following way:
   ** npm run start -- --username=your_username

The program is closed: 
   ** by pressing the keyboard ctrl + c;
     or
   ** by sending .exit command into console;
   ** proper message is printed "Thank you for using File Manager, username, goodbye!"
   
Navigation & working directory operations implemented:
   ** up  - go upper;

   ** cd path_to_directory. Here path_to_directory is a full path to target directory. For example:
   if you are in C:\ now,  you want to cd homework, that in username folder, you should write in CLI:
     cd C:\users\username
     cd ./homework
   if you in C:\users\username\homework (your current working directory) now, you want to cd to folder task1 in homework folder, please enter:
     cd task1
     cd C:\users\username\homework\task1
   ** ls  - Print in console list of all files and folders in current directory, like a table;

   ** cat path_to_file. Here path_to_directory is a path to target directory. 
   if you are in C:\users\username\homework now, you want to cat file test.txt in folder task1, that in homework folder, please enter:
     cat task1\test.txt
     cat .\task1\test.txt
     cat ./task1/test.txt
     cat C:\users\username\homework\task1

   ** add new_file_name. Here new_file_name is a name of the file that will be created in current working directory. For example:
     add text.docx

   ** rn path_to_file new_filename 
   if you are in C:\users\username\homework now, you want rename file test.txt in folder task1, that in homework folder, please enter:
     rn task1\test.txt  newFile.txt
     rn ./task1/test.txt newFile.txt
     rn C:\users\username\homework\task1\test.txt newFile.txt

  ** cp path_to_file path_to_new_directory
  if you are in C:\users\username\homework now, you want copy file test.txt in folder task1, that in homework folder, please enter:
     cp task1\test.txt ./
     cp C:\users\username\homework\task1\test.txt C:\users\username\homework
     cp C:\users\username\homework\task1\test.txt ..\
     cp C:\users\username\homework\task1\test.txt ../
     cp ./test.txt ../

  ** mv path_to_file path_to_new_directory
  if you are in C:\users\username\homework now, you want move file test.txt in folder task1, that in homework folder, please enter:
     mv c:\users\username\homework\task1\test.txt c:/users\username/homework
     mv c:\users\username\homework\task1\test.txt ./
     mv task1/test.txt ./

  ** rm path_to_file
  if you are in C:\users\username\homework now, you want remove file test.txt in folder homework, that in username folder, please enter:
     rm C:\users\username\homework\test.txt
     rm test.txt
  if you are in C:\users\username\homework\task1 now, you want remove file test.txt in folder homework, that in username folder, please enter:
     rm ../test.txt 

  ** compress path_to_file path_to_destination
    if you in C:\users\username\homework (your current working directory) now, you want to compress files please enter:

    compress test.txt test  (here test without extansion is only name comressed file, in code will be added .br)
    compress task1/otherFile.docs otherFile (file otherFile.docs is in task1 folder, task1 folder is in homework folder, otherFilde.br in homework folder )
    compress c:/users/username/homework\task1/file.txt task1/file

  ** decompress path_to_file path_to_destination
    if you in C:\users\username\homework (your current working directory) now, you want to decompress file test.br from folder task1 folder into homework, please enter: PLEASE WRITE EXTANSION .br to path_to_file and EXTANSION (.txt, .docs, etc.) of compressed file early

    decompress task1/test.br test.txt
    decompress c:/users/username/homework\task1/test.br test.txt
    or into other folder
    decompress c:/users/username/homework\task1/test.br task1/test.txt

    I believe that other operations do not need to be described.
    THANK YOU! 