# Introduction

This repository contains a React SPA and a Node.JS backend to implement authentication and authorization with [Datawiza Access Broker](https://datawiza.com/) through the Backend For Frontend (BFF) pattern.

Backend for Frontend (BFF) is a new design pattern that has gained traction recently. It effectively solves the problem of secret exposure and avoids storing the Access Token in the browser, which is considered to be risky. With the BFF pattern, the Datawiza Access Broker (DAB) acts as a dedicated back end for all authorization code exchange in OAuth Flow as well as handling access and refreshing tokens. At the same time, the authentication process is isolated from the business code, making the architecture very clean.

<!---
TODO(tdd): Replace the doc URL to the actual one when it's published.
--->
The following article describes the implementation details: [Backend For Frontend Authentication Pattern with Okta and Datawiza Access Broker](https://docs.google.com/document/d/1v1gK_KPsmxSh7mU37ogmScIjibH9QL8MxDVVVoMoDLQ/edit#heading=h.2vku5x5y4iho/)

## The Benefits of Using No-Code Datawiza

- No need to learn complex OIDC/OAuth or SAML protocols
- No need to manage refresh tokens, access tokens or ID tokens
- No need to manage user sessions
- No need to use SDKs and write code
- Reduce weeks of engineering work to hours, even minutes
- Avoid security vulnerabilities with a No-Code product developed by security experts

## Requirements

Prior Datawiza Access Broker experience isn’t necessary, but you need:

- Docker and docker-compose are required to run DAB
- An account with Okta application admin permissions

## Run this demo

1. Clone the repo: `git clone https://github.com/datawiza-inc/bff-spa-demo.git`.
1. Run `npm install` to install all dependencies.
1. Run `npm start` to start the application.
1. Follow [tutorial](https://docs.google.com/document/d/1v1gK_KPsmxSh7mU37ogmScIjibH9QL8MxDVVVoMoDLQ/edit#heading=h.2vku5x5y4iho/) to configure on the [Datawiza Management Console](https://console.datawiza.com) and note down the Provisioning key and secret.
1. Replace the provisioning key and secret in the `example.docker-compose.yml`
1. Run the `docker-compose -f example.docker-compose.yml up -d` to start the Datawiza Access Broker
1. Point your browser to `http://spa.demo.datawiza.net:3000` to interactively test your application.

## Support

If you run into any issues or would like to get help from Datawiza team, you can

- Schedule a [30-minutes meeting](https://calendly.com/datawiza/30min)
- Join [Datawiza Discord server](https://discord.com/invite/Sn3nbc83Up)
- Send an email to: [support@datawiza.com](mailto:support@datawiza.com)