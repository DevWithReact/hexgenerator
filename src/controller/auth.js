import models from '../models';

export const generateHexdigits = (req, res) => {
  let num = 0;
  while(1) {
    const hw = models.HEXSPEAK_WORDS;
    num = Math.floor(Math.random() * 0xFFFFFFFF);

    for(var i = 0; i < hw.length; i ++) {
      if (parseInt(hw[i], 16) == num) {
        break;
      }
    }
    if (i == hw.length)
      break;
  }
  
  res.send({
    message: "generated 2FA code",
    code: '0x' + num.toString(16)
  });
}
