/*eslint-disable */
// const test = require('ava');
const artworks = require('../static/momaartworks.json');
const departmentHeads = require('../static/momadepartmentheads.json');
const moment = require('moment');
moment().format();

function filterArtworks() {
  const photograph = artworks.filter((artwork, index) => {
    if (artwork.Department === 'Photography' && artwork.ThumbnailURL != null) {
      return artwork;
    }
  });
  console.log(photograph);
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
    console.log(head.PositionBeginYear, head.PositionEndYear);
    return head;
  });
}

function filterDepartmentHeads() {
  return departmentHeads.filter(department => {
    return department.DepartmentFullName === 'Department of Photography';
  });
}

function getHeadCurators(artworkDate) {
  const photoCurators = filterDepartmentHeads();
  return photoCurators.filter(head => {
    return (
      moment(artworkDate).isBefore(head.PositionEndYear) &&
      moment(artworkDate).isAfter(head.PositionBeginYear)
    );
  });
  return photoCurators;
}

function getSpecificCurator() {
  const artworkDate = '';
  const photograph = artworks.filter((artwork, index) => {
    if (artwork.Department === 'Photography' && artwork.ThumbnailURL != null) {
      return artwork;
    }
  });
  photograph.forEach(photo => {
    let artworkDate = photograph.DateAcquired;
    return artworkDate;
  });
  console.log(artworkDate);
  let artworkDate = photograph.DateAcquired;
  new Date(artworkDate);
  console.log(artworkDate);
  return departmentHeads.filter(head => {
    moment(artworkDate).isBefore(head.PositionEndYear) &&
      moment(artworkDate).isAfter(head.PositionBeginYear);
  });
  console.log(departmentHeads);
}

getSpecificCurator();
