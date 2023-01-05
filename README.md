# Founders House Coffee Shop

A simple coffee shop program using html/css, javascript, and an external API


## General Description
Founder’s House Coffee Shop serves coffee with a mission. Built by startup founders, for startup founders, the Founder’s House provides an excellent place to grab a cup of delicious coffee and co-work or socialize with other startup founders. Additionally, for every purchase made, Founder’s House will round up to the nearest dollar and make a donation to the Pharos Founder’s Collective in support of entrepreneurial mental health.

## Features
Our website includes multiple features.
We have a feature that allows the menu item to enlarge upon hover.
We have another feauture that places the menu item of your choosing 
in the front and center of the screen when you  click on the image.
Additionally, we have the coffee name, price, description, and ingredients
all appear when you click on your desired coffee image.
Another feature our website boasts is the order submit button. When you 
decide to order a cofee, you click on the order button and your order will 
appear on the screen.
Every additional coffee you order will be added to the screen 
and the total price of all your coffees will be displayed.


### Backend API Endpoints

GET: coffee/hot
GET: coffee/hot/1


## Environment Setup



### Clone repository
```
$ git clone git@github.com:mplisco/Coffee_Shop.git
```


### Install NodeJS
Verify you are running a recent version of Node with:
```
node -v
```
If your Node version is not 16.x.x, install it and set it as the current and default version with:

```
nvm install 16
nvm use 16
nvm alias default 16
You can also update your npm version with:
```

```
npm i -g npm
```


## Usage
Use this website to order a coffee by hovering over the menu items on the top
of the page.
To select a coffee you would like to order, click on the image.
When you're ready to order, click the order button and your 
coffee will be added together with your updated total.
