
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

