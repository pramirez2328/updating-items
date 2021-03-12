export function funcPagination( arr, pageNumber, moviesPerPage ) {
  //page number = is the number of buttons or pages displayed
  //moviesPerPage = is the number of movies displayed per page

  let sliceIndex = 0;
  let sliceEnd = moviesPerPage;
  let filterObj = {};
  for ( let i = 0; i < pageNumber; i++ ) {
    filterObj[ `page${i + 1}` ] = arr.slice( sliceIndex, sliceEnd );
    sliceIndex = sliceEnd;
    sliceEnd += moviesPerPage;
  }
  return filterObj;
}