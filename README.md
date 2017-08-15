PROJECT ENGAGER  ![Engager](https://github.com/OctoConsulting/engager/blob/public_profile/img/Engager_ico_48.png?raw=true)
================

An interactive web app that measures your activities across multiple social media and project platforms

### Project Setup
1. Install MongoDB
2. Install Node

***Note: config.js was blanked out since it contains secret API keys.***

### Running the Project

1. `npm install`
2. Fire up your local MongoDB database
3. `npm run dev` (runs off port 3090)
4. Open another terminal in the same directory and do `npm start` (runs off port 8080)


### MAIN UI


### PROFILE

![Step 1:](https://photos-6.dropbox.com/t/2/AADM4rLH13JquRAYwNMX1wQEWhKRPP5O3vVJPDeHdRE-Yg/12/76004654/jpeg/32x32/3/1502496000/0/2/Engager_dashboard.JPG/EKy8_DoY6JsIIAcoBw/h2HEhLliKXFYZ_o0rErACfOWyB-T_Rvir7dTGBzb2Ao?dl=0&size=2048x1536&size_mode=3)

# Engager AWS Deployment Instuctions

Note: If you are already familiar with creating, launching and connecting an Ubuntu EC2 instance you may skip to Step 3

### Step 1: Launch an Instance
1. Log onto [AWS](aws.amazon.com) and select EC2 on the dashboard since we are going to deploy this on a single instance of EC2
![AWS Console](https://github.com/OctoConsulting/engager/blob/master/img/aws_screenshots/4.png?raw=true)
2. Next click the Launch Instance Button in the dashboard
![AWS EC2 Dashboard](https://github.com/OctoConsulting/engager/blob/master/img/aws_screenshots/2.png?raw=true)
3. For this deployment we are going to use an Ubuntu Server image
![AWS EC2 Configuration](https://github.com/OctoConsulting/engager/blob/master/img/aws_screenshots/3.png?raw=true)
    And the default configuration
![AWS EC2 Configuration](https://github.com/OctoConsulting/engager/blob/master/img/aws_screenshots/5.png?raw=true)
4. Now proceed to “Step 6” on the website (the default settings are fine for the preceeding steps” . At this step we want to add the ports `8080` and `3090` to the security group to allow us to access the application from our browser and for the backend to communicate with the front end
![AWS EC2 Security Group](https://github.com/OctoConsulting/engager/blob/master/img/aws_screenshots/7.png?raw=true)
5. Now you can proceed to “Review and Launch”. Upon clicking the “Launch” button , you will be prompted to either create a key pair or use an existing one. You want to keep this keypair safe as this is your only way of authenticating into the EC2 instance.
![AWS EC2 Launch](https://github.com/OctoConsulting/engager/blob/master/img/aws_screenshots/6.png?raw=true)
Hooray! Within a couple of minutes, your EC2 Ubuntu server should be up and running on the cloud!
### Step 2: Connect to the Instance
 In this step I will walk through how to connect to your instance, but this only applies to Mac OSX/ Linux distros using their Terminals. If you have a Windows machine, follow this [guide]( https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html?icmpid=docs_ec2_console)
1. Navigate to the directory in which your keypair is located
2. Modify the permissions to make the key private using the following command: 
```bash
chmod 400 [key_name].pem
```
![](https://github.com/OctoConsulting/engager/blob/master/img/aws_screenshots/9.png?raw=true)
3. Retrieve the url of your instance from the dashboard
![](https://github.com/OctoConsulting/engager/blob/master/img/aws_screenshots/10.png?raw=true)
Connect using SSH into your instance through terminal using the following command (ensuring you are still in the same directory as your key)
```bash
 ssh -i "[key_name].pem" ubuntu@[URL_OF_INSTANCE]
 ```
 ![](https://github.com/OctoConsulting/engager/blob/master/img/aws_screenshots/11.png?raw=true)
Hooray! You should now be connected into your instance’s terminal, and be greeted with this screen
![](https://github.com/OctoConsulting/engager/blob/master/img/aws_screenshots/12.png?raw=true)
### Step 3: Setting up the project
1. First lets install node, npm, and nvm onto our machine. First to install nvm (node version manager) use the following command:
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
```
2. Then use this command to be able to use nvm in the command line
```bash
. ~/.nvm/nvm.sh
```
3. Now lets install node, I am going to use the LTS (Latest Stable Version) as of the date this was created which happens to be v6.11.2 , so we enter the following command 
```bash
nvm install v6.11.2
```
(You can use the command nvm ls to double-check that nvm is using the right version of node and that it is installed)
4. Now that we have nvm, node and npm (automatically included when we installed node) we can download our github repo. Navigate into your preferred directory ( I cloned it in the default home directory) and we will use the following command:
```bash
 git clone https://github.com/OctoConsulting/engager.git
```
5. Now navigate into the directory of the project and install the node modules 
cd engager
```bash
npm install
```
(Note: This step will probably require a few minutes so sit back and make small talk with your colleagues, also sometimes I receive weird errors, but if you run the command again it should work)
6. Now use a command line text editor to edit the package.json to make the project ready to run on the instance and accessible to the public. I will open the  `package.json` file in the engager project directory with `vim`.
```sh
vim package.json 
```
   Find the following section of code:
```json
"scripts": {
   "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js",
   "dev": "nodemon ./src/Server/index.js"
 },
 ```
Press the `i` character to start editing and navigate to the end of the following line with the arrow keys. We need to change the line so webpack will know where the website is supposed to be hosted, so we will add some parameters to the start script
```json
"start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js",
```
 to
 ```json
“ start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --host 0.0.0.0 --public [URL_OF_INSTANCE]"
```
Save and exit out of `vim` by pressing `esc`  and then `:wq`. 
7. Now navigate to the Client’s actions folder 
```sh
cd src/Client/actions
```
Here we are going to edit the file `index.js`. So use `vim index.js` and edit the file by pressing `i`. Navigate to where it says 
```javascript
const SERVER_URL = 'http://localhost:3090';
```
Change this to 
```javascript
const SERVER_URL = ‘[URL_OF_INSTANCE]:3090’;
```
Press `esc`  and  `:wq` and you should be good to go.
8. Now navigate to the `Server` directory. If you are still in the directory of the last step then the command should look like this 
```sh
cd ..\..\Server
```
Here we will edit the `index.js` file to tell our application to use MongoDB stored on mlab.  So again we use vim index.js and edit the file by pressing ‘i’ and navigate to where it says `//DATABASE SETUP` .  Here we will comment out the `//LOCAL DB` section and comment in the `//REMOTE DB ON MLAB` section as demonstrated in the screenshot. 
![](https://github.com/OctoConsulting/engager/blob/master/img/aws_screenshots/22.png?raw=true)

Save and exit out of vim by pressing `esc`  and then `:wq`
9. The last part we need to setup the project is putting in our config file (Note: this is not included in the github repo so you will have to reach out to one of the collaborators on this project or create your own credentials). For this step you will run `vim config.js` and go ahead and clear the file by pressing `50dd` from the top of the document. This command deletes the next 50 lines (clears the whole file)  in `vim`. Now press `i` and paste in the code from your own `config.js` file. Since the terminal’s buffer can’t hold all of the text at once, you can’t copy and paste it all at once so you will have to copy and paste it in two sections ( I divide it up after the LinkedIn section).
Now you can save and exit by pressing `esc`  and then `:wq` and finally be done with this long and exhausting step
### Step 4: Running the backend and frontend
 The moment of truth
1. Now you will need to have two terminal windows for this step, one to run the frontend and one for the backend, and you will connect to your instance in both of these
2. To have project running in the background even when you exit out of the terminal, simply type screen before you run the command to start the services. (Use screen -r next time you connect to reconnect to your desired session)
3. In the respective windows run the commands
```sh
'npm start' 
```
and 
```sh
npm run dev 
```
# Hooray! You should now have a working deployment of Engager on your very own instance
