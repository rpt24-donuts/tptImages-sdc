let ipsumText = "Tousled ethical plaid blue bottle, taxidermy single-origin coffee shaman enamel pin microdosing lo-fi literally knausgaard yuccie vape listicle. Butcher DIY dreamcatcher locavore vape, lomo VHS. Four dollar toast enamel pin next level messenger bag retro. Mumblecore normcore microdosing coloring book, tattooed ethical synth crucifix drinking vinegar tofu four dollar toast taxidermy scenester. Small batch bicycle rights neutra, aesthetic forage mlkshk ennui shabby chic tattooed organic photo booth pork belly waistcoat succulents. Fixie raw denim farm-to-table yuccie dreamcatcher. Pour-over ennui plaid chillwave banh mi neutra blog succulents paleo. Etsy artisan wolf jean shorts kitsch farm-to-table swag hexagon echo park air plant tote bag heirloom. Aesthetic la croix man braid iPhone, four dollar toast microdosing tumeric taxidermy. Messenger bag farm-to-table affogato shaman meditation palo santo 3 wolf moon four dollar toast kombucha skateboard. Cold-pressed photo booth viral, activated charcoal DIY hexagon iPhone tattooed tumblr ennui actually. Forage humblebrag vice, lumbersexual meh echo park coloring book gochujang vegan master cleanse jean shorts. Edison bulb mixtape meh master cleanse narwhal. Mixtape listicle iPhone irony hammock farm-to-table deep v pour-over."
ipsumText = ipsumText.split('. ');
let titles = []
let max = 10;
let min = 4;
for(var i = 0; i <= 10; i++) {
  let randomStart = Math.floor(Math.random() * (ipsumText.length));
  let randomAmount = Math.floor(Math.random() * (max - min) + min);
  let title = ipsumText[randomStart].split(' ').slice(0, randomAmount).join(' ');
  titles.push(title);
}

const config = require('../aws_config.js');
const AWS = require('aws-sdk');
let creds = new AWS.Credentials(config.aws_access_key_id, config.aws_secret_access_key);
AWS.config.credentials = creds;
AWS.config.update({region: 'us-east-1'});

s3 = new AWS.S3({apiVersion: '2008-10-17'});
let bucketParams = {
  Bucket : 'tpt-imagesmodule',
};
let urls = [];
s3.listObjects(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    data.Contents.forEach(obj => {
      urls.push(`https://tpt-imagesmodule.s3.amazonaws.com/${obj.Key}`)
    });
    console.log("Success");
  }
});

// s3.getObject({
//   Bucket : '<my_bucket>',
//   Key : '<key_to_my_file>'
// }).promise().then(function (s3obj){
//   console.log('successful');
// }).catch(function (error) {
//   console.error(error);
// });