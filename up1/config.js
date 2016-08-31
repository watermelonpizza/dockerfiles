root@melonstudios:/var/docker-config/master-server/up1# cat config.js 
upload.config.server = '' // Empty if the webapp is in the same place as the server
// upload.config.server = 'https://yourserver.com/' // If the webapp is separated from the server - remember the trailing slash
upload.config.api_key = '' // Should be the same as the server, used for uploading
upload.config.footer = '<a href="https://github.com/Upload/Up1" target="_blank">Source Code</a> - <a href="mailto:someemail@email" id="contact" target="_blank">Contact</a>'
