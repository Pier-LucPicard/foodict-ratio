module.exports = {
  register: (ratio) => {
    require('./volume').register(ratio);
    require('./temperature').register(ratio);
    require('./misc').register(ratio);
    require('./mass').register(ratio);
  },
};
