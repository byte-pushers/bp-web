export TRAVIS_BRANCH=master
echo "TRAVIS_BRANCH = " $TRAVIS_BRANCH;
if [ $TRAVIS_BRANCH = "master" ]; then
  echo -e "Running npm run build --prod";
  npm run build -- --prod;
else
  echo -e "Running npm run build --configuration dev";
  npm run build -- --configuration dev;
fi;
