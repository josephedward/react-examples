# brew services start mongodb-community
echo 'mongo not started; backend unneccessary for now'

echo 'attempting to close ports'
sudo killall -9 node

echo 'ports test(3000) :'
sudo lsof -i tcp:3000  

echo 'would require dotenv, but no environment variables currently'
# Make sure dotenv loads your env variables
# export syntax IN TEST.JS FILE? 
#  node -r dotenv/test.js

 