/*eslint-disable */
// const test = require('ava');
const artworks = require('../static/momaartworks.json');
let departmentHeads = require('../static/momadepartmentheads.json');
let photoCurators = [];
const moment = require('moment');
moment().format();

function filterArtworks() {
  const photograph = artworks.filter((artwork, index) => {
    if (artwork.Department === 'Photography' && artwork.ThumbnailURL != null) {
      return artwork;
    }
  });
}

function formatDeptHeadData() {
  return departmentHeads.map(head => {
    head.PositionBeginYear = new Date(
      head.PositionBeginYear.toString() + '-' + '01' + '-' + '01'
    );
    if (head.PositionEndYear === '') {
      head.PositionEndYear = new Date();
    } else {
      head.PositionEndYear = new Date(
        head.PositionEndYear + '-' + '12' + '-' + '31'
      );
    }
    return head;
  });
}

function filterDepartmentHeads() {
  let photoCurators = departmentHeads.filter(head => {
    return head.DepartmentFullName === 'Department of Photography';
  });
  return photoCurators;
}

function getSpecificCurator() {
  let photoHead = filterDepartmentHeads();
  let artworkDate = '';
  const photograph = artworks.filter((artwork, index) => {
    if (artwork.Department === 'Photography' && artwork.ThumbnailURL != null) {
      return artwork;
    }
  });
  photograph.forEach(photo => {
    let artworkDate = photo.DateAcquired;
    new Date(artworkDate);
    return photoHead.slice(0, 10).filter(head => {
      moment(artworkDate).isBefore(head.PositionEndYear) &&
        moment(artworkDate).isAfter(head.PositionBeginYear);
    });
  });
}

getSpecificCurator();
