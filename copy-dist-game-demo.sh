#!/bin/bash

echo 'rm -rf public/dist-game-demo-old'
rm -rf public/dist-game-demo-old

echo 'mv public/dist-game-demo public/dist-game-demo-old'
mv public/dist-game-demo public/dist-game-demo-old

echo 'cp -r ../xeno-landing-game-demo/landingPage public'
cp -r ../xeno-landing-game-demo/landingPage public

echo 'mv public/landingPage public/dist-game-demo'
mv public/landingPage public/dist-game-demo

echo 'cp public/dist-game-demo-old/splash.85cfd.png public/dist-game-demo/splash.85cfd.png'
cp public/dist-game-demo-old/splash.85cfd.png public/dist-game-demo/splash.85cfd.png

echo 'll public'
ls -lh public

echo 'll public/dist-game-demo'
ls -lh public/dist-game-demo
