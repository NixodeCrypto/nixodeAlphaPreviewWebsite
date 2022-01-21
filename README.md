# Nixode
[![CircleCI](https://circleci.com/gh/NixodeCrypto/nixodeWebsite.svg?style=svg&circle-token=51db2999a5b98ac793e651fed7cb1efc06a28102)](https://www.nixode.com)

<hr />

##### The Technologies We Use To Pave The Way For Digital Finance

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

<hr />

# What's Our Goal
To build a community for traders, investors and cypto enthusiasts to be able to track their favourite cryptocurrencies, get price alerts, get the latest crypto news, and learn about other's expirences when trading coins

# Developer Notes

## Setup
Developers must install the following packages globally through npm
- ```commitizen```
- ```yarn```
- ```redis```

## Secrets
Local .env files or secrets are not shared within this company, instead we use [Doppler](https://www.doppler.com/)

### What this means
- Developers must install Doppler on their local machine and authenticate with it using ```doppler login```
- Setup is also required with the command ```doppler setup``` within the root directory or /server directory and the respective environments must be chosen before proceeding to the next step
- Instead of running package.json scripts with ```npm run dev```, it will instead use ```doppler -- npm run dev```
