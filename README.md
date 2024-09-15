# Web Console

A web based interactive console/terminal

```md
Apps
├── Client
└── Server
```

## Development

```sh
# Install dependencies
$ npm install

# start server (port 9000)
$ cd server
$ npm run dev

# start client (port 5173)
$ cd client
$ npm run dev

# docker built server (DEV Env.)
$ docker build -f Dockerfile.dev -t sagarpanda/web-console-server .

# docker run
$ docker run -d -p 9000:9000 sagarpanda/web-console-server
$ docker run -d -it --rm -p 9000:9000 --name web-console-server1 sagarpanda/web-console-server
```
