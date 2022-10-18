# The Angular Django Socket.IO Messenger
[![Up to Date](https://github.com/ikatyang/emoji-cheat-sheet/workflows/Up%20to%20Date/badge.svg)](https://github.com/ikatyang/emoji-cheat-sheet/actions?query=workflow%3A%22Up+to+Date%22)

This is a light-weight chatting application built on a **Django REST API** Framework as Backend, **Angular** Frontend and a **Socket.IO** WebSocket server.

## Dependencies and Version Info

* **Django : 4.1.2**
* **django-rest-framework : 3.14.0**
* **Angular CLI : 14.2.5**
* **Node : 14.17.0**

## Working

This creates an **Angular** front-end server in ***localhost:4200***(the one which the users access). The **Django** backend gets hosted on ***localhost:8000***(the one which serves the **requests**  of ***localhost:4200***) and finally the **WebSocket** server is hosted on ***localhost:3000*** and provides users access to real-time communication and secure chat-rooms !

## How To Use ?

* Clone this repo :
  ```
  git clone https://github.com/sravan-kumar-ta/django-angular-socket.IO-Messenger.git
  cd django-angular-socket.IO-Messenger
  ```
* You'll need to create three **localhosts** so its advisable to split the terminals.

* For starting the **Django Backend API** on ***localhost:8000*** open terminal from the folder ***django-angular-socket.IO-Messenger***
  ```
  cd backend
  virtualenv venv
  venv\scripts\activate
  pip install -r requirements.txt
  python manage.py runserver
  ```
* For starting the **WebSocket Server** on ***localhost:3000*** open terminal from the folder ***django-angular-socket.IO-Messenger***:
  ```
  cd socket io
  node server.js
  ```
* Finally to play with the **Angular** front-end open terminal from the folder ***django-angular-socket.IO-Messenger***
  ```
  cd frontend
  ng serve
  ```
  If there's an ```unhandled exception : Cannot find module @angular-devkit/build-angular/package.json``` then :
  ```
  npm install -g @angular/cli
  npm install @angular-devkit/build-angular
  ng serve
  ```
  And, it should work.
* Open ***localhost:4200*** in multiple tabs for interacting with the chat app :relaxed:
