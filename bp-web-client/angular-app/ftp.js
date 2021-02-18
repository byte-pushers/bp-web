const FtpClient = require('ftp-client');

async function upload() {
  const config = {
    host: 'www.bytepushers.software',
    user: 'aman@bytepushers.software',
    password: 'Aman@123',
    port: 21
  };

  const options = {
    logging: 'basic'
  };

  const client = new FtpClient(config, options);

  client.connect(function () {
    client.upload(['dist/**'], '/', {
      baseDir: 'dist/angular-app',
      overwrite: 'older'
    }, function (result) {
      console.log(result);
    });
  });
}

upload().then(r => console.log("Uploading the contents"))
