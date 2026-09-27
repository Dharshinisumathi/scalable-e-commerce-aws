   #!/bin/bash
   cd /home/ubuntu/portfolio
   pkill -f app.js || true
   nohup node app.js > app.log 2>&1 &
