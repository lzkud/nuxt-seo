#/bin/bash
echo $NODE_ENV
cd frontend

pm2 stop haimayun
pm2 delete haimayun

if [ "$NODE_ENV" == "testing"  ]; then
    echo "npm run build-testing"
    npm run build-testing
elif [ "$NODE_ENV" == "dev"  ]; then
    echo "npm run build-dev"
    npm run build-dev
elif [ "$NODE_ENV" == "rel"  ]; then
    echo "npm run build"
    npm run build
elif [ "$NODE_ENV" == "pre"  ]; then
    echo "npm run build-pre"
    npm run build-pre
else
    echo "npm build start"
    npm run build
fi

pm2 start ../haimayun.json

