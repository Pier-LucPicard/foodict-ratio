var expect=require('chai').expect;
var Ratio=require('./../lib/ratio');

var ratio = new Ratio();

describe('Ratio Volume',function(){
  it('should create a full list of all the supported volume',function(){
    return ratio.listVolume().then((list)=>{
      expect(list).to.be.deep.equal([
        { name: 'celcius', displayName: 'Celcius', symbole: '°C' },
        { name: 'farenheit', displayName: 'Farenheit', symbole: '°F' },
        { name: 'romer', displayName: 'Rømer', symbole: '°Rø' },
        { name: 'rankine', displayName: 'Rankine', symbole: '°Ra' },
        { name: 'newton', displayName: 'Newton', symbole: '°N' },
        { name: 'reaumur', displayName: 'Réaumur', symbole: '°Ré' },
        { name: 'delisle', displayName: 'Delisle', symbole: '°D' },
        { name: 'kelvin', displayName: 'Kelvin', symbole: 'K' }
      ]);
    })
  })
});
