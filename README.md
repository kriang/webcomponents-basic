# Web Components


## Running the project

Note: If you have not used babel or live-server before then please install it's global dependency by typing "npm install --save-dev babel-cli" and "npm install -g live-server". Do not install live-server if you intedn to use your own web server


Clone the repo, cd into 'webcomponent' directory and run

```
npm install
```


Once the process completes, run the following 

```
live-server public
```

Alternatively, you can also run your own local server but make sure to render content from the public folder


### Files

Files that you will be working on includes the following

* src/app.js
This is where you write and manipulate components. In order for web browsers to be able to read react javascript from the src/app.js file, it needs to be compiled to vanilla javscript. Run the code below to  


```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```
The code above is asking babel to compile the src/app.js to vanilla javascript and insert the compiled code to public/scripts/app.js


* public/index.html
This is where you can insert basic scripts and also add custom stylesheets


Once you have the above setup ready, you can get started and update the content in the src/app.js
* A basic component has been created for you
* You can add a stylesheet either inline or an external file to the public/index.html page to start styling the message class. The message class can be found on line 9 of the src/app.js file.
* Once done, you can control the message displayed in the component by seeing an example on line 29