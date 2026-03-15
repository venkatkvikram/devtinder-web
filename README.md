# Dev Tinder

- Created using Vite + React
- Tailwind setup
- Install Tailwind CSS
- Install Daisy UI
- Adding Navbar component
- Seperate NAvBar.jsx
- Install react-router-dom
- Create Browser Router > Routes > Route=/ Body > RouteChildren
- Create an outlet in your body component
- Create a footer
- Create a login page
- Install axios
- CORS - Install CORS in backend => Add middleware to with configuration. : origin, credentials : true
- Whenever you are making API call so pass axios => withCredentials : true 
- Install Redux Tool kit 
- react-redux + @reduxjs/toolkit 
=> configureStore => Provider => createSlice => add reducer to store
- Add redux devtools (extension)
- Login and set the data in redux
- NavBar should update as soon as user logs in
- Refactor code to add constants file 
- You wont be able to access profile endpoint without logging in
- If token is not present redirect to login page
- Get the feed and add it in store
- Create feed component and build user card component to display inside it
- Edit Profile
- Toast notification for success



      #  DEPLOYMENT
      - Sign up on AWS
      - Launch an Instance
      - chmod 400 your-key.pem
      - ssh -i "devTinder-secret.pem" ubuntu@ec2-15-135-236-135.ap-southeast-2.compute.amazonaws.com
      - Install nvm and along with nvm to install relevant node version your project is supported in
      - Git Clone your repository
      - Frontend

            - npm install => Install dependencies
            - npm run build => Build the project
            - sudo apt update (Update system dependcies)
            - sudo apt install nginx (Install nginx)
            - sudo systemctl start nginx (Start nginx)
            - sudo systemctl enable nginx (Enable nginx)
            - sudo systemctl status nginx (Check nginx status)
            - Copy code from `dist`(build server) folder to `/var/www/html`
            - sudo scp -r dist/* /var/www/html/
            - Enable port :80 of your instance
            - Instance > Security > Security Groups > Add inbound rule

      - Backend
            - npm install 
            - allowed ec2 instance public IP on mongodb server
            - npm install pm2 -g
            - pm2 start npm --name "devtinder-backend" -- start
            - pm2 list, pm2 logs, pm2 stop, pm2 restart

            -  Frontend = http://15.135.236.135
            - Backend = http://15.135.236.135:8888

            Domain Name = devtinder.com => 15.135.236.135

            - Frontend : devtinder.com
            - Backend: devtinder.com:8888 => devtinder.com/api
            
            This "/api" is mapped to your port "8888"

            - For that we use nginx, nginx proxy pass

            inside /etc/nginx/sites-available/default

            ```
                
                location /api {
                    proxy_pass http://localhost:8888;
                    proxy_set_header Host $host;
                    proxy_set_header X-Real-IP $remote_addr;
                }

            ```
            - sudo systemctl restart nginx
            - sudo systemctl status nginx
            - Modify the BaseURL in frontend project to "/api"
            