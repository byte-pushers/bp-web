'use strict';

// Example of using the uploadDir() method to upload a directory
// to a remote SFTP server
const path = require('path');
const SftpClient = require('ssh2-sftp-client');

const dotenvPath = path.join('dist/angular-app/', '..', '.env');
require('dotenv').config({path: dotenvPath});

const config = {
  host: 'www.bytepushers.software',
  username: process.env.FTP_USER1,
  password: process.env.FTP_PASSWORD1,
  port: process.env.SFTP_PORT || 22
};

async function main() {
  const client = new SftpClient('upload-test');
  const dst = '/home/pouncilt/public_html';

  try {
    await client.connect(config);
    client.on('upload', info => {
      console.log(`Listener: Uploaded ${info.source}`);
    });
    let rslt = await client.uploadDir('dist/angular-app', dst);
    return rslt;
  } finally {
    client.end();
  }
}

main()
  .then(msg => {
    console.log(msg);
  })
  .catch(err => {
    console.log(`main error: ${err.message}`);
  });
