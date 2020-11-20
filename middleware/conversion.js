const conversion = function(req){
  let csvFormat = 'firstName,lastName,county,city,role,sales\n';
  const append = function(request){
    let values = Object.values(request);
    for(let i=0;i<values.length;i++){
      if(Array.isArray(values[i])){
        continue;
      }
      typeof(values[i])==='number'?csvFormat+=`${values[i]}\n`: csvFormat+=`${values[i]},`;
    }
  };
  const childSearch = function(request){
    append(request);
    if(request.children===undefined){
      return;
    }else{
      request.children.forEach(child=>{
        append(child);
        childSearch(child.children);
      });
    }
  };

  childSearch(JSON.parse(req.body.json));
  console.log(csvFormat);
  return csvFormat;
};

module.exports.conversion = conversion;