#/bin/bash
echo $NODE_ENV
cd frontend

if [ "$NODE_ENV" == "testing"  ]; then
    echo "npm run start-testing"
    npm run start-testing
elif [ "$NODE_ENV" == "dev"  ]; then
    echo "npm run start-dev"
    npm run start-dev
elif [ "$NODE_ENV" == "rel"  ]; then
    echo "npm run start"
    npm run start
elif [ "$NODE_ENV" == "pre"  ]; then
    echo "npm run start-pre"
    npm run start-pre
else
    echo "npm run start"
    npm run start
fi

