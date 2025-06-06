const CryptoJS = require("crypto-js")
import { PROD_SECRET_CRYPTO } from "@env"

export const Encrypta =  (pass:any):string => {
    var secret:any = PROD_SECRET_CRYPTO;
    var aa =  CryptoJS.SHA512(pass.toString(CryptoJS.enc.Utf8)+secret.toString(CryptoJS.enc.Utf8));
    var bb =  aa.toString(CryptoJS.enc.Base64);
    var cc =  bb.toString(CryptoJS.enc.Ut8);
  
    return cc;
};