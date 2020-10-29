#!/bin/bash

while npx cypress run --config testFiles="**/check.js"; do :; done

start public/explosion_3.mp3