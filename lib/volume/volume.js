"use strict";
module.exports = {

  canadienCup_to_millilitres : function(cup) {
    return cup / 0.0043994;
  },

  millilitres_to_canadienCup : function(ml) {
    return ml * 0.0043994;
  },

  americainCup_to_millilitres : function(cup) {
    return cup / 0.0042268;
  },

  millilitres_to_americainCup : function(ml) {
    return ml * 0.0042268;
  },

  imperialFluidOunce_to_millilitres : function(ounce) {
    return ounce / 0.035195;
  },

  americainFluidOunce_to_millilitres : function(ounce) {
    return ounce / 0.033814;
  }



};
