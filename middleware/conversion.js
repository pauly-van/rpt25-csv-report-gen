const conversion = function(req){
  let csvFormat = 'firstName,lastName,county,city,role,sales';
  let request = req.body.json;
  console.log(request);
  return csvFormat;
};

const recursiveVal = function(object){
  
};

module.exports.conversion = conversion;