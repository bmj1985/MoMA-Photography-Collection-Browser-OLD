const mediaArray = [];
function getArrayOfMedia() {
  photoMedia.forEach(artwork => {
    mediaArray.push(artwork.Medium);
  });
  return mediaArray;
}

getArrayOfMedia();

const unique = mediaArray.filter((v, i, a) => a.indexOf(v) === i);

function filterMedia(array, string) {
  unique.filter(media => {
    if (media.toLowerCase().includes(string)) {
      array.push(media);
    }
  });
  return array;
}

function list(array) {
  const body = document.querySelector('body');
  const $ul = document.createElement('ul');
  const $h3 = document.createElement('h3');
  body.appendChild($ul);
  $ul.appendChild($h3).textContent = '';
  array
    .sort((a, b) => {
      return a.length - b.length;
    })
    .map(media => {
      const $li = document.createElement('li');
      $ul.appendChild($li).textContent = media;
    });
  $h3.textContent = array[0];
}

// Inkjet //
const inkjet = [];
// Color Processes //
const silverDyeBleach = [];
const chromogenicColor = [];
const dyeTransfer = [];
const colorInstant = [];
const pigmentedInkjet = [];
// Gelatin Silver //
const gelatinSilver = [];
//Alternative Processes //
const daguerreotype = [];
const cyanotype = [];
const albumen = [];
const printingOutPaper = [];
const saltedPaper = [];
const directCarbon = [];
const calotype = [];
const bromoil = [];
const ambrotype = [];
const collodion = [];
const gumBichromate = [];
const gumPlatinum = [];
const platinumPalladium = [];
const tintype = [];
// Printmaking processes & collage//
const intaglio = [];
const lithograph = [];
const photogravure = [];
const screenprints = [];
const serigraph = [];
const photomontage = [];

// Inkjet //
filterMedia(inkjet, 'inkjet');
// Color Processes //
filterMedia(silverDyeBleach, 'silver dye bleach');
filterMedia(chromogenicColor, 'chromogenic color');
filterMedia(dyeTransfer, 'dye Transfer');
filterMedia(colorInstant, 'color instant');
filterMedia(pigmentedInkjet, 'pigmented inkjet');
// Gelatin Silver //
filterMedia(gelatinSilver, 'gelatin silver');
//Alternative Processes //
filterMedia(daguerreotype, 'daguerreotype');
filterMedia(cyanotype, 'cyanotype');
filterMedia(albumen, 'albumen');
filterMedia(printingOutPaper, 'printing-out-paper');
filterMedia(saltedPaper, 'salted paper');
filterMedia(cyanotype, 'cyanotype');
filterMedia(directCarbon, 'direct carbon');
filterMedia(calotype, 'calotype');
filterMedia(bromoil, 'bromoil');
filterMedia(ambrotype, 'ambrotype');
filterMedia(collodion, 'collodion');
filterMedia(gumBichromate, 'gum bichromate');
filterMedia(gumPlatinum, 'gum platinum');
filterMedia(tintype, 'tintype');
// Printmaking processes & collage//
filterMedia(intaglio, 'intaglio');
filterMedia(lithograph, 'lithograph');
filterMedia(photomontage, 'photomontage');
filterMedia(serigraph, 'serigraph');
filterMedia(screenprints, 'screenprints');
filterMedia(photogravure, 'photogravure');

// Inkjet //
list(inkjet);
// Color Processes //
list(silverDyeBleach);
list(chromogenicColor);
list(dyeTransfer);
list(colorInstant);

// Gelatin Silver //
list(gelatinSilver);
//Alternative Processes //
list(daguerreotype);
list(cyanotype);
list(albumen);
list(saltedPaper);
list(printingOutPaper);
list(directCarbon);
list(calotype);
list(bromoil);
list(ambrotype);
list(collodion);
list(gumBichromate);
list(gumPlatinum);
list(platinumPalladium);
list(tintype);
// Printmaking processes & collage//
list(intaglio);
list(lithograph);
list(photomontage);
list(serigraph);
list(screenprints);
list(photogravure);
