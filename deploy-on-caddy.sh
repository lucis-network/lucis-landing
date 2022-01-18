#!/bin/bash

#
# Usage: ./deploy-on-caddy.sh <your_caddy_site_dir>
# Eg: ./deploy-on-caddy.sh ~/caddy/site/
#

XENO_SERVER_ROOT=$1
PROD_FLAG=$2

if [ -z "$1" ]
  then
  	echo "Error: Invalid argument"
    echo "./deploy-on-caddy.sh <your_caddy_site_dir> <prod>"
    echo "Eg for staging: ./deploy-on-caddy.sh ~/caddy/site"
    echo "Eg for prod: ./deploy-on-caddy.sh ~/caddy/site prod"
    exit 0
fi

if [ "prod" == "$2" ]; then
    XENO_WEB_ROOT=$XENO_SERVER_ROOT/prod-xeno-landing-out
else
    XENO_WEB_ROOT=$XENO_SERVER_ROOT/xeno-landing-out
fi

git pull
yarn
yarn build && yarn export-static


mkdir -p $XENO_WEB_ROOT

echo "remove ${XENO_WEB_ROOT}_bak"
rm -rf $XENO_WEB_ROOT"_bak"

echo "move $XENO_WEB_ROOT ${XENO_WEB_ROOT}_bak"
mv $XENO_WEB_ROOT $XENO_WEB_ROOT"_bak"

echo "copy /out to $XENO_WEB_ROOT"
cp -r out/ $XENO_WEB_ROOT

echo "🚀 All done !!"
