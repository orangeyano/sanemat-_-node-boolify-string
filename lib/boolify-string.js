/*
 * boolify-string
 * https://github.com/sanemat/node-boolify-string
 *
 * Copyright (c) 2014 sanemat
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(obj){
  if (typeof obj !== 'string'){
    return !!obj;
  }
  return true;
};
