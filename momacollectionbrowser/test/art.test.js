/*eslint-disable */
// const test = require('ava');
const artworks = require('../static/momaartworks.json');
const departmentHeads = require('../static/momadepartmentheads.json');
const moment = require('moment');
moment().format();

// function filterArtworks() {
//   const photograph = artworks.filter((artwork, index) => {
//     if (artwork.Department === 'Photography' && artwork.ThumbnailURL != null) {
//       return artwork;
//     }
//   });
//   console.log(photograph);
// }
function formatDeptHeadData() {
  return departmentHeads.map(head => {
    head.PositionBeginYear =
      head.PositionBeginYear.toString() + '-' + '01' + '-' + '01';
    if (head.PositionEndYear === '') {
      head.PositionEndYear = moment();
    } else {
      head.PositionEndYear = head.PositionEndYear + '-' + '12' + '-' + '31';
    }
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

// console.log(artworks[36331]);
formatDeptHeadData();
console.log(getHeadCurators('1942-05-28'));
