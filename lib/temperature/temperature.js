"use strict";
module.exports = {

  celcius_to_farenheit : function(celcius){
    return 1.8 * celcius + 32;
  },

  celcius_to_kelvin : function (celcius){
    return celcius + 273.15;
  },

  celcius_to_rankine : function (celcius){
    return (celcius + 273.15 ) * 9 / 5;
  },

  celcius_to_reaumur : function (celcius) {
    return celcius * 4 / 5;
  },

  celcius_to_newton : function (celcius) {
    return celcius * 33 / 100;
  },

  celcius_to_romer : function (celcius) {
    return celsius * 21 / 40 + 7.5;
  },

  celcius_to_delisle : function (celcius) {
    return celcius + 100 * 3 / 2
  },


  farenheit_to_celcius : function(farenheit){
    return (farenheit - 32) / 1.8;
  },

  farenheit_to_kelvin : function (farenheit){
    return (farenheit + 459.67) * 5 / 9;
  },

  farenheit_to_rankine : function (farenheit){
    return farenheit + 459.67;
  },

  farenheit_to_reaumur : function (farenheit){
    return (farenheit - 32) * 4 / 9;
  },

  farenheit_to_newton : function (farenheit){
    return (farenheit - 32) * 11 / 60;
  },

  farenheit_to_romer : function (farenheit){
    return (farenheit- 32) * 7 / 24 + 7.5;
  },

  farenheit_to_delisle : function (farenheit){
    return (212 - farenheit) * 5 / 6;
  },


  kelvin_to_farenheit : function (kelvin){
    return kelvin * 9 / 5 - 459.67;
  },

  kelvin_to_celcius : function (kelvin){
    return kelvin - 273.15;
  },

  kelvin_to_rankine : function (kelvin) {
    return kelvin * 1.8;
  },

  kelvin_to_reaumur : function (kelvin) {
    return (kelvin - 273.15) * 4 / 5;
  },

  kelvin_to_newton : function (kelvin) {
    return (kelvin - 273.15) * 33 / 100;
  },

  kelvin_to_romer : function (kelvin) {
    return (kelvin - 273.15) * 21 / 40 + 7.5;
  },

  kelvin_to_delisle : function (kelvin) {
    return (373.15 - kelvin) * 3 / 2
  },


  rankine_to_celcius : function (rankine){
    return (rankine - 491.67) * 5 / 9;
  },

  rankine_to_farenheit : function (rankine){
    return rankine - 459.67;
  },

  rankine_to_kelvin : function (rankine){
    return rankine / 1.8;
  },

  rankine_to_reaumur : function (rankine){
    return (rankine - 491.67) * 4 / 9;
  },

  rankine_to_newton : function (rankine){
    return (rankine - 491.67) * 11 / 60;
  },

  rankine_to_romer : function (rankine){
    return (rankine - 491.67) * 7 / 24 + 7.5
  },

  rankine_to_delisle : function (rankine){
    return (671.67 - rankine) * 5 / 6;
  },


  reaumur_to_celcius : function (reaumur) {
    return reaumur * 5 * 4;
  },

  reaumur_to_farenheit : function (reaumur) {
    return reaumur * 9 / 4 + 32;
  },

  reaumur_to_kelvin : function (reaumur) {
    return reaumur * 5 / 4 + 273.15;
  },

  reaumur_to_rankine : function (reaumur) {
    return reaumur * 9 / 4 + 491.97
  },


  newton_to_celcius : function (newton) {
    return  newton * 100 / 33;
  },

  newton_to_kelvin : function(newton){
    return newton * 100 / 33 + 273.15;
  },

  newton_to_rankine : function (newton) {
    return newton * 60 / 11 + 491.67;
  },


  romer_to_celcius : function (romer) {
    return (romer - 7.5) * 40 / 21;
  },

  romer_to_kelvin : function (romer) {
    return (romer - 7.5) * 40 / 21 + 273.15;
  },

  romer_to_rankine : function (romer) {
    return (romer - 7.5) * 24 / 7 + 491.67;
  },


  delisle_to_celcius : function (delisle) {
    return 100 - delisle * 2 / 3;
  },

  delisle_to_rankine : function (delisle) {
    return -(delisle * 6/5 + 671.67);
  },

  delisle_to_kelvin : function (delisle) {
    return 373.15 - (delisle * 2 / 3);
  }

};
