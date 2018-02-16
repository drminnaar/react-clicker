# React Clicker

A basic React app that allows one to increase, decrease, or reset a counter.

Go **[here](http://react-clicker.drminnaar.me/)** for live demo.

This project also demonstrates:

* a typcial React project layout structure
* babel setup and configuration
* webpack setup and configuration
* eslint setup and configuration
* SCSS setup and configuration
* How to run application in a Docker container

... | ...
--- | ---
![](https://user-images.githubusercontent.com/33935506/33752825-a81c5ed0-dbec-11e7-8041-44d1a5b2ca46.PNG) | ![](https://user-images.githubusercontent.com/33935506/33752826-a857c722-dbec-11e7-8eb8-12375f840d10.PNG)

---

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Webpack](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage
* [Bootstrap 4](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS
* [Surge] - Static web publishing for Front-End Developers
* [Docker] - A container management system

---

## Related Projects

* [react-starter]

  A basic template that consists of the essential elements that are required to start building a React application

* [react-clock-basic]

  A basic clock that displays the current date and time

* [react-timer-basic]

  A basic timer that will start a countdown based on an input of time in seconds

* [react-timer-advanced]

   A basic countdown timer that offers an advanced UI experience

* [react-masterminds]

  A basic game of guessing a number with varying degrees of difficulty

* [react-movie-cards]

  A basic application that displays a list of movies as a list of cards

* [react-calculator-standard]

  A calculator that provides the essential arithmetic operations, an expression builder, and a complete history of all expressions

* [react-bitcoin-monitor]

  An app that monitors changes in the Bitcoin Price Index (BPI)

* [react-weather-standard]

  A weather application that displays the current weather, daily forecasts, and hourly forecasts based on your current geolocation

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

### Install

Follow the following steps to get development environment running.

* Clone _'react-clicker'_ repository from GitHub

  ```bash
  git clone https://github.com/drminnaar/react-clicker.git
  ```

   _OR USING SSH_

  ```bash
  git clone git@github.com:drminnaar/react-clicker.git
  ```

* Install node modules

   ```bash
   cd react-clicker
   npm install
   ```

### Build

* Build application

  This command will also run ESLint as part of build process.

  ```bash
  npm run build
  ```

* Build application and start watching for changes

  This command will also run ESLint as part of build process.

  ```bash
  npm run build:watch
  ```

### Run ESlint

* Lint project using ESLint

  ```bash
  npm run lint
  ```

* Lint project using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```

### Run

* Run start

  This will run the _'serve'_ npm task

  ```bash
  npm start
  ```

* Run webpack dev server

  ```bash
  npm run serve:dev
  ```

* Alternatively run live-server (simple development http server with live reload capability)

  ```bash
  npm run serve
  ```

### Docker Instructions

An alternative to installing and running application on your local machine is to build and run your own Docker container that will host the application. There are 2 files related to Docker setup namely:

* Dockerfile - Used to create Docker Image

* .dockerignore - Used to ignore files in local path that are not required in the container

To get the application up and running in a Docker container, please follow the following instructions:

1. Build Docker Image

   The following command will build a new Docker Image called _'react-clicker'_ with the tag _'1.0.0'_ using the Docker file found in the application root.

   ```docker
   docker build -t react-clicker:1.0.0 .
   ```

1. Run Docker Container

   The following command will start a new container based on the Docker image created above. The application within the container runs on port 8080, therefore, as part of command we map container port to local host port. We also give the container a name and run it in the background. The '--rm' switch indicates that the container will be automatically removed once it is stopped.

   ```docker
   docker run --rm --name react-clicker -p 8080:8080 -d react-clicker:1.0.0
   ```

1. Open application

   By typing the following command, you should see a runing container having the name _'react-clciker'_.

   ```docker
   docker container ls
   ```

   If the container is running, you may navigate to the application using your browser at the following address:

   ```bash
   http://localhost:8080
   ```

Lastly, if you're curious to have a look inside container, then you may type the following command:

```docker
docker exec -it react-clicker /bin/sh
```

The above command provides you an interactive shell on the container. Please note that the above command must be executed on a running container.

---

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/drminnaar/react-clicker/tags).

## Authors

* **Douglas Minnaar** - *Initial work* - [drminnaar](https://github.com/drminnaar)

[Surge]: https://surge.sh/
[Docker]: https://www.docker.com/
[react-starter]: https://github.com/drminnaar/react-starter
[react-clicker]: https://github.com/drminnaar/react-clicker
[react-clock-basic]: https://github.com/drminnaar/react-clock-basic
[react-timer-basic]: https://github.com/drminnaar/react-timer-basic
[react-timer-advanced]: https://github.com/drminnaar/react-timer-advanced
[react-masterminds]: https://github.com/drminnaar/react-masterminds
[react-movie-cards]: https://github.com/drminnaar/react-movie-cards
[react-calculator-standard]: https://github.com/drminnaar/react-calculator-standard
[react-bitcoin-monitor]: https://github.com/drminnaar/react-bitcoin-monitor
[react-weather-standard]: https://github.com/drminnaar/react-weather-standard