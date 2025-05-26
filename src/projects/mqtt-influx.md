---
isDraft: false
title: 'MQTT to InfluxDB'
description: 'A simple tool to store data collected from MQTT topics into InfluxDB'
status: 'done'
image:
  src: '/mqtt_influx.png'
  alt: 'MQTT to InfluxDB logo'
link: 'https://github.com/xamcost/mqtt-to-influx'
tags: ['Python', 'Docker', 'InfluxDB', 'MQTT']
---

MQTT-to-Influx is a (very) simple tool to store data collected from MQTT topics into InfluxDB, a time-series database. It is implemented in Python and can be run as a Docker container.

## How it works

MQTT-to-Influx can be easily configured to connect to any MQTT broker and InfluxDB instance, by providing the connection parameters as environment variables. So if you store them in an `.env` file like this:

```dotenv
BROKER_HOST="http://mosquitto.mosquitto.svc.cluster.local"
BROKER_PORT=1883
BROKER_USER="admin"
BROKER_PWD="changeme"
INFLUXDB_V2_URL="http://influxdb.influxdb.svc.cluster.local:8086"
INFLUXDB_V2_TOKEN="my-influxdb-token"
INFLUXDB_V2_ORG="my-org"
INFLUX_BUCKET="my-bucket"
```

You can then run the tool using Docker:

```bash
docker build -t mqtt-to-influx .
docker run --rm --env-file .env mqtt-to-influx
```

It is worth keeping in mind that this tiny app remains tailored to my specific use case, which is to collect environmental data from my home sensors, such as temperature, humidity, and air quality. Yet it can be easily adapted to other use cases, by simply overwriting the `on_message` method in the `main.py` file. More info [in the repository](https://github.com/xamcost/mqtt-to-influx/tree/main).
