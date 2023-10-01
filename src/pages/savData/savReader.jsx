import React from "react";
import { SavFileReader } from "sav-reader"; // import the commonjs module

const savReader = () => {
  // create new sav reader from local file
  const sav = new SavFileReader("finalized_ca_wildfire_ml_lightgbm.sav");

  // this opens the file and loads all metadata (but not the data records)

  // print the header, vars, valuelabels, etc.
  // (more info about vars and valuelabels below)
  console.log(sav.meta);

  return <></>;
};
export default savReader;
