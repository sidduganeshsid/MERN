
# W0
Internet 
Browser supports this 3 langs => HTML, CSS & JS
IDE => vs code
website

------------------
HTML defines the structure of the website
what all should be placed on the website 
HTML Tags
Attributes are the extra information to the tags.
RC-> inspect.

- structural tags are html, head , body
- meta information is present in the head section.

```HTML

<span>
<div>

<div style="background: red">Hello</div>

```

-----
css lets you to add styles the website and position the elements on the page.

- you will get the figma file for that you need to build the site.

divs always take up all the space available horizontally.
spans only take up as much space as needed.

# W1
## week 1.1 | Orientation class

- Head down and focus 
- contribute to the open source projects
- learn and get a head.
- build lots of projects 
- try upwork
- do well and be at top 5%
- be consistent and carry on momentum
- Be curious.
- Try to build your own portfolio
  
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/6287a195-1b47-494c-9262-87ce7bf0c28a)


## w1.2 JS Foundation
(enough js concepts will be taught)

### why languages ?
Computer?
RAM? =apps run on ram
SSD? =photos, videos,etc... resides 
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/2ffa4a14-130f-4675-b2b9-a2ae72d7b59c)
VLC is open source software.
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/7966b368-8cf3-4733-bc48-a890da2038f0)
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/cb6d2109-8ba9-4b6b-a9b8-030552f96e03)

### Scripting vs Compiler

c/c++ (is a compiled language)
1. write code
2. compile the code
3. run the code
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/4dacffb4-18d5-4671-8164-108131551f41)
eg. a.cpp -> when compiled -> gets converted into the binary file which is executable.

JS (is an interpreted language)
1. write the code
2. run the code.
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/e7afda5a-b183-408e-b539-1a0862219e14)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/96ce3570-4fd4-4428-aa21-0aa2259b8018)

To write code in online 
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/7daa726a-53bf-4d9c-ac25-d00ad65a8248)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/98cc94b2-34fc-4fbd-9414-ef629009d98f)

### why js is better than other languages.
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/74ab1ba7-c2ff-4201-baf8-90fe64f8ebf7)

### static vs dynamic language
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/178b7477-792c-4a4c-a85e-091bac6c0af3)

- static is good for large codebase project
- for js, type safe we have TypeScript.
- TypeScript is superset of js

  ### Single threaded nature of JS
  - JS is single threaded, but it can do context switching.

  eg.
  ![image](https://github.com/sidduganeshsid/MERN/assets/94279014/304043a1-8e3f-4e03-b5a3-9e0f17383f90)

  eg.JAVA can distribute the load of the application.

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/37887766-6ec0-4e18-99c0-af054fb365fa)
JS can be done using cluster module. (parallelize JS).

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/4e0162e5-c2e7-4685-bb3b-2ba349630b79)

this is single threaded code in c++
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/0a70ce55-5fe4-46e5-889e-2183f6ee6d20)
you can write the multi thread code using sub routines.

### simple primitives
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/85e50a02-547b-4470-b28a-8f8fa0519efb)

```javascript
console.log("HelloWorld")

var a = 1;
console.log(a);

const b = 2;
// b=3;//const 
console.log(b);
// let, const are used now days. 
// let means variables can be reassigned later.
// const means variables can't be reassigned.
// C:\Users\siddu\OneDrive\Desktop\MERN\demoCodes\hello.js:7
// b=3;
//  ^

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (C:\Users\siddu\OneDrive\Desktop\MERN\demoCodes\hello.js:7:2)
//     at Module._compile (node:internal/modules/cjs/loader:1358:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
//     at Module.load (node:internal/modules/cjs/loader:1208:32)
//     at Module._load (node:internal/modules/cjs/loader:1024:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.14.0

let c = 10;
c = 20;
console.log(c);
```

## 1.3 | Basic JS APIs

parseInt() is a global function.

> study about callbacks, map, filter, find, sort (arrays)

- class means give out a struture of something that's reusable and can be usable at multiple places.

class and object, static method
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/235d1178-161e-4567-aa0c-9a8aa2dd75dc)

//JSON.parse
//JSON.stringify

>npm install

To test
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/283e6e67-556a-4ae0-9775-b4ce0a0d60b8)

## 1.4 loops , functions and callbacks in JS

functions
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/a715fdc7-0534-4675-99f1-76dc53e98e88)

## 1.5 Async function vs sync func
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/b9b54912-32d7-47ed-968e-b3e4c3b63843)
sync = one thing after another thing.(one thing at a time)

(until now all the above are done using sync functions)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/62839586-f485-49cc-98bd-58e276025a21)

- setTimeout() is a async function.
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/6a295de7-f10c-429f-936d-371ed11668ad)

- callbacks are mostly used in async functions (not much in sync)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/854a6182-e1a0-403a-bca9-b13137588bf9)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/b8acf8a2-b170-494b-b3aa-605e783598b3)

promises
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/d658662a-6f4e-401c-8574-538813356bb9)

in promises callbacks are not used.

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/53d018ad-cc6d-45d8-b00a-13dfbc61c65e)
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/f9843116-4a0a-4ec5-a03c-726ceb6093c4)
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/8b238519-e8fe-4e24-be53-cb57dcc94177)
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/97fd00d2-6cd2-4da4-b240-3fa1d0ae5a1b)
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/c8414108-4368-48d6-85ae-fdc6ac898bd7)

# W2

## 2.1 Revision of Promises, Async JS
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/a01226af-5061-4100-a77e-ff33f32c35f9)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/f1d726c7-1bbc-4932-b0a8-e6e08c0b2f38)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/c18a4271-dba5-48ea-a7a2-2105600896b0)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/67c388af-dc47-4fd2-b129-5321ab39fa44)
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/b336d641-8415-40a5-82fa-00f60ce57a94)

## 2.2 Node.js runtime | HTTP

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/b38d2590-2f10-4dd5-b8c8-92e90b74461e)

express
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/a0f4645f-04ce-445e-8369-8edbaf9a958f)


![image](https://github.com/sidduganeshsid/MERN/assets/94279014/90afbbd2-aab1-4218-a00b-277d8da9203d)

callback
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/f163ec4a-dbaf-4e01-af5e-9a87b7d53b85)

## 2.3 | Bash & Terminal

some of bash cmds won't works in cmd prompt
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/11ab3e20-1342-4e55-be35-ddb505ad781b)
termial is nothing but another interface to do things on your machine.
>pwd = present working directory
>cd = change directory
>cd Onedrive/
>cd.. = to go to back folder
>ls = to list all files and directories.
>(press tab to auto complete)
>mkdir to make directory
>touch cmd won't works in windows cmd prompt

test dir> touch index.txt (creates the file if not exists)
>cat index.txt (to see contents in the file)
vim command
>vi index.txt (open the file and able edit in it)
~
~
~
>press i to start insert mode
>to exit
>press escape button
>then type
>
>:wq! (to save and exit)
or
>:q! (exit without saving)
>then press enter button
(above cmds are for vim and shell modes)
>mv index.txt dir-name/orpathofdir (to move)
>mv test new-folder (folder to folder moving)
>cp index.txt new-folder (copies the file)
(if you want to copy folders then)(-r recursive flag)
>cp -r test new-foler
>(grep cmd)


node cmds
>nvm (node version manager) (to install node into the machine)

>node index.js (enable you run the js source code file)

below is called node shell that lets you write the js snippets
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/c4118e6c-207c-4cb0-84a4-200eab66a862)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/0446bd2a-043b-4dae-bfb2-4652a7debb40)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/4ba5f4e8-87a2-4ddf-a618-97a929d4651f)

to search for other lib's
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/404c80e8-d5bd-4c4a-96c9-ec3ccfc7b0ee)

the way to get packages into the project
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/dab0b0b1-8a44-445d-9c87-445bc6cb0c0a)

## 2.4 | adv bash, node installation
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/17def466-cf26-4ece-9c92-1e7bc2e34728)


![image](https://github.com/sidduganeshsid/MERN/assets/94279014/33693d68-51b4-40d1-a2ee-6c3b1a72c004)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/6aa5214a-9a2a-4ea1-8553-c3c5d2238422)

>ls -R dir-name (to see all sub dir's)
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/7820a009-f21b-40a7-9816-5cbec71282e3)


last modified time
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/acb3eafe-d72b-44e2-ac68-67f77e44abd3)

last modification of particular files
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/bbe80bdf-ed94-40b3-aac5-0c47d079545d)

to see hiden files
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/dd8908b6-384f-42be-923b-7b3f0cae63df)

(to recursively list all dir's)
>ls -lR\a new-dir/snake_game

(files in the reverse order that are modified)
>ls -lr newdir/snake_game

(list by size)
>ls -s newdir
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/af1fe9e4-98d1-4162-a828-1a6afa134527)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/87f81f35-a6c0-4402-b5cd-0f1d15337bee)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/9cf4242c-bb71-45b2-875d-bbfcf91602d7)

wild card the specific file you are looking for
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/16cc30d7-1c30-40b4-a01d-480093c9a07f)

>ls .. (to see all the files and dirs)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/ff13ebda-89b1-493a-8396-badf58d62033)
ctrl + d (to save and exit)

To modifiy
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/52c05a2e-6c2c-407b-aff5-acf3430b2a75)

combining the cmds
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/ab6e3214-690f-431d-b741-c2846e7b0d1a)

to come back (navigate to back)
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/9fe89719-8095-4498-b696-4947602a3365)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/0cf13403-5f0f-4ae6-9a04-8b07527b2ca2)
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/1f4574f9-0515-401c-ac75-2927191d9d51)

To rename the script.js or particular file
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/63ffd430-bc42-4d67-bcac-7660ace47483)

(move and rename and move)
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/d080cad4-2ec4-4b90-a8d0-de606d33dd49)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/69e479a8-f5ec-41e7-a8db-2a65135cd8bb)

To delete file and folder
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/cfdfd233-f5a4-4d5f-bfd6-dab968b2261e)


giving the permission to file and dir's
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/4ece5389-c119-479b-b24a-eb82387b6112)

>chmod ugo
>u = user
>g = group
>o = others

>chmod ugo+ (means adding permissions)
>chmod ugo- (means removing the permissions)

if file
>chmod ugo-rwx
if folder
>chmod -R ugo-rwx

sample (newscript.sh)
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/5f272353-1270-432d-8484-7425aa55c7d4)

at group level
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/def80216-6ced-4f24-a4a2-8a426a590c5e)

4 = read
2 = write
1 = execute
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/c13d25f9-21f4-45fe-8a42-7b70ab75af51)

giving all cmd's
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/6f8cc6f5-0579-48a3-8b2c-b2802148c277)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/9b730dad-b775-415a-8f93-2eb1b8e1c74e)

(give first 10 rows of the file)
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/1d4b6bab-0c67-40a2-83b1-5f9c26785b71)

(gives the last 10 rows of the file)
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/33d56151-1c58-4ba1-8c1b-1355a78eae8f)


![image](https://github.com/sidduganeshsid/MERN/assets/94279014/46450f09-a80e-47b3-9999-b8907fe7ecce)

cmd 1 flow to cmd 2
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/3af180b1-37d1-4eec-a4ba-6f302643d513)

(give me next five rows)
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/24e58f8b-744d-4067-b647-4522d10d8a73)

To see line word character in a file
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/a7f1ed7a-a449-46dc-8109-a204c44b70e4)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/44cf05cf-fea6-4080-a3a8-05f10597aa9c)

grep is the cmd used to find patterns, regex of the file

number of occurence
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/680a80d1-1bf9-41fb-9eb4-82a63052af26)

ignore the case and search 
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/010c788f-d28d-4568-8b8a-1a3dfe63db62)

To see occurence in current directory
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/3842c8ac-8ff5-4deb-862c-9c162922ea33)

to see the line numbers
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/68d481ea-4f01-4226-86b3-79a7123e2739)

>all this things are use ful when you are working with the big projects and files

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/72326364-d40f-417f-b9e4-3a9103b2c19f)

![image](https://github.com/sidduganeshsid/MERN/assets/94279014/6ea79fae-a5c5-4e4b-82bd-fc629034eb7c)

to see the history of all cmds you ran
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/4f2fd9ec-0fcb-4823-80e3-cc9d18e7dbb7)

>bash is not only about the writing the scripts or cmds, you can automate the scripts
>bash is language the you write the scripts and execute it.
![image](https://github.com/sidduganeshsid/MERN/assets/94279014/bc534908-c2eb-43d5-855b-c51377ab13b6)
