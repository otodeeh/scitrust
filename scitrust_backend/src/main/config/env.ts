
export const env = {
  port: process.env.PORT || 5090,
  server: process.env.SERVER || 'http://localhost',
  jwtSecret: process.env.JWT_SECRET || "tj670==SH",
  httpsOptions: getHttpsOptions()
};


function getHttpsOptions() {
  const mainPath = '/etc/letsencrypt/live';
  const mainDomain = process.env.HTTPS_DOMAIN;
  const path = `${mainPath}/${mainDomain}`

  // return {
  //   key: readFileSync(`${path}/privkey.pem`),
  //   cert: readFileSync(`${path}/cert.pem`),
  //   ca: readFileSync(`${path}/fullchain.pem`),
  // }
  return {}
}