#!/usr/bin/env bash

cd server
npm run build
firebase emulators:start
