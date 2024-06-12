
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


# W2 
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


