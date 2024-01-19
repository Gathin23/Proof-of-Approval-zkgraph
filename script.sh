# Test script for zkGraph

# Update `zkgraph.config.ts` with your own parameters first!
# Then run `sh test.sh`

npm run compile &&
npm run exec -- 5051369 &&
npm run prove -- --inputgen 5051369 00000000000000000000000056deea193ac02bcd7f155e9b857b21fc2eaa33a4 &&
npm run prove -- --test 5051369 00000000000000000000000056deea193ac02bcd7f155e9b857b21fc2eaa33a4