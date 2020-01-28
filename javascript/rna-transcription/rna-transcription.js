const MAP = { A: "U", T: "A", C: "G", G: "C" };

export const toRna = n => {
  const adnSequence = [...n];
  let arnSequence = "";

  for (let adn of adnSequence) {
    arnSequence += MAP[adn];
  }
  return arnSequence;
};
