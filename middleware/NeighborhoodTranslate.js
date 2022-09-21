  
  function NeighborhoodTranslate(req, res, next) {
  const { Neighborhood } = req.query;
   switch (Neighborhood) {
    case "Bloomington Heights":
      res.locals = "Blmngtn"
      break;
    case "Bluestem":
      res.locals = "Blueste"
      break;
    case "Briardale":
      res.locals = "BrDale"
      break;
    case "Brookside":
      res.locals = "BrkSide"
      break;
    case "Clear Creek":
      res.locals = "ClearCr"
      break;
    case "College Creek":
      res.locals = "CollgCr"
      break;
    case "Crawford":
      res.locals = "Crawfor"
      break;
    case "Iowa DOT and Rail Road":
      res.locals = "IDOTRR"
      break;
    case "Meadow Village":
      res.locals = "MeadowV"
      break;
    case "Mitchell":
      res.locals = "Mitchel"
      break;
    case "Meadow Village":
      res.locals = "MeadowV"
      break;
    case "North Ames":
      res.locals = "Names"
      break;
    case "Northridge":
      res.locals = "NoRidge"
      break;
    case "Northpark Villa":
      res.locals = "NPkVill"
      break;
    case "Northridge Heights":
      res.locals = "NridgHt"
      break;
    case "Northwest Ames":
      res.locals = "NWAmes"
      break;
    case "Old Town":
      res.locals = "OldTown"
      break;
    case "South & West of Iowa State University":
      res.locals = "SWISU"
      break;
    case "Sawyer West":
      res.locals = "SawyerW"
      break;
    case "Somerset":
      res.locals = "Somerst"
      break;
    case "Stone Brook":
      res.locals = "StoneBr"
      break;
    case "Timberland":
      res.locals = "Timber"
      break;
   
    default:
      break;
   }
   
   if (Neighborhood){
      next();
      return;
   }
    res.status(400).send("Neighborhood is not part of list");
  }
  module.exports = {NeighborhoodTranslate};
  