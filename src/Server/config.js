//HOLD APPLICATION SECRET CONFIG

module.exports = {
  secret: 'eriwer4309054erfhwiu32*&$#@d32',
  creation_timestamp: '1496667600', //June 5th, 2017 09:00AM EST
  Twitter : {
    consumer_key: 'jlD8BSZCNsCqqDpmHgkelSB6A',
    consumer_secret: 'zUEOxXBxfLJj3GmrWOS1DGCSZU9usa8htO5dSsgZIPXhSY7v3u',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAC9D1QAAAAAAi0AoObt49isSGovSBXoWR5uTpiY%3DVCKs7jmtj1mxSo9VQt18go9RRmdtknb0Nj3dTnLou1XTroxMoJ'
  },
  Instagram : {
    id_key: 'bb65c1a4262349d78765097663077982',
    id_secret: '2d472d1d92cc4802b91943e4edf107be',
    accessToken_url : 'https://api.instagram.com/oauth/access_token',
    redirect_uri: 'http://localhost:3090/authInstagram'
  },
  Linkedin: {
    id_key: '778l6ot4kvtw5r',
    id_secret: 'CBfe31te33qaJx1P',
    accessToken_url: 'https://www.linkedin.com/oauth/v2/accessToken',
    redirect_uri: 'http://localhost:3090/authLinkedin'
  },
  EmailServer:{
    emailAccountUser: 'octo.engager.mailer@gmail.com',
    emailPassword: 'S3D5jRBnkcTp5ghnIk5fCLS6KvDo02',
    emailName: 'Octo Engager'
  },
  Heroku: {
  	username: 'octo.engager.mailer@gmail.com',
  	password: '9fdewiofj4095043876hyunerilku'
  },
  mLab: {
  	username: 'octo_engager',
  	password: 'cKxsLB4WWBs1USasy0jZZ38akVyxkZvTN'
  },
  database: {
  	username: 'octo_intern',
  	password: '1410Trieu'
  }
}
