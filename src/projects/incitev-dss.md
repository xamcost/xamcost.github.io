---
isDraft: false
title: 'INCIT-EV DSS'
description: 'A Decision Support System to evaluate the impact of an electric vehicle fleet on the power grid'
status: 'done'
image:
  src: 'https://www.incit-ev.eu/wp-content/uploads/2020/04/LOGO-INCIT-EV_trans-e1587995833448.png'
  alt: 'INCITEV logo'
link: 'https://github.com/Atos-Research-and-Innovation/incitev-dss-frontend'
tags: ['Kubernetes', 'Javascript', 'Next.js']
---

INCITEV DSS is a Decision Support System to evaluate the impact of an electric vehicle fleet on the power grid. It is part of the [INCIT-EV project](https://www.incit-ev.eu/), an ambitious project funded by the European Commission, gathering more than 40 partners all around Europe. It aims at fostering the adoption of electric vehicles across Europe by providing innovative user-centered solutions, both on the hardware side (fast chargers, wireless EV charging prototypes, ...) and software (EV charging app, mobility provider portal, ...). Extensive resources about the INCIT-EV project can be found [here in the Cordis portal of the European Commission](https://cordis.europa.eu/project/id/875683/results).

## Decision Support System

The DSS is an open source web application intended for EV industry stakeholders such as e-mobility providers, local public authorities and grid operators, to identify where in a city, the electricity grid may not be able to sustain an given increase in EV in the car fleet, as well as providing information about the mobility of such fleet within the city of interest. Interesting in trying it ? You can find a [public version here](https://incitev.linksfoundation.com/intro) for which you can request access.

To achieve this, it is articulated around two sets of modules:

- _urban mobility_: to simulate the mobility patterns of an EV fleet in a given city and estimate the energy consumption of the fleet.
- _power and charging infrastructure_: to evaluate the impact of the EV fleet on the power grid, depending on the results of the urban mobility simulation.

The DSS is built using a microservices architecture, consisting of the following components:

- a simulation engine, implemented in **Python**, and exposing a REST API to receive simulation requests and return the results.
- a backend, also implemented in **Python**, to orchestrate the simulation engine.
- a frontend, implemented using **React** and **Next.js**, to provide a user-friendly interface to run simulations and visualize the results.

## Contributors

The backend and simulation engine have been developed jointly by the [the LINKS foundation](https://linksfoundation.com/en/) and [the University of Ljubljana](https://www.uni-lj.si/en), while the frontend has been developed by my team at [Atos Research and Innovation](https://eviden.com/). Other partners in the projects greatly contributed in improving the DSS by testing it and providing feedback, with a special mention to [Politecnico di Torino](https://www.polito.it/) for their continuous support throughout the development. You can find [the source code of the frontend here](https://github.com/Atos-Research-and-Innovation/incitev-dss-frontend) while the [backend code is hosted here](https://github.com/LINKS-FCC/INCIT-EV_DSS).
