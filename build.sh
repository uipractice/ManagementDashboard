npm -v

echo 'Install dependencies'
npm install

echo 'Production Build started'
node --max-old-space-size=2048 node_modules/@angular/cli/bin/ng build --prod

echo 'Remove old dist files in Nginx'
rm -rf /usr/share/nginx/html/management_dashboard/*

echo 'Copying dist files to Nginx'
cp -R dist/ngMat/* /usr/share/nginx/html/management_dashboard

echo 'Files copied to Nginx'
