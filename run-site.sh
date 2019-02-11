# build new changes, if needed
if [ "$1" = '--build' ] || [ "$1" = '-b' ]; then
  docker build -t timstoddard/amica .
fi

# remove old instance, if any
if [ "$(docker ps -q -f name=amica)" ]; then
  docker rm -f amica
fi

# run the app, display info
docker run -i --rm --name amica -p 80:8080 -d timstoddard/amica
docker ps

# display dev message
echo ""
echo ""
echo "*** ctrl+c to exit, the app will continue running in the background ***"
echo ""
echo ""

# show live logs
docker logs amica -f
