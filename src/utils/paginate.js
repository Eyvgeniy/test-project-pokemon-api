const paginate = (page, pageSize, total) => {
  const lastPage = Math.ceil(total / pageSize);
  if (page > lastPage) {
    return null;
  }
  const firstPage = 1;
  const pageShow = 5;
  const border = 2;
  const separator = '...';
  const pages = [];
  if (pageShow >= lastPage) {
    for (let i = firstPage; i <= lastPage; i++) {
      pages.push(i);
    }
  } else {
    if (page - firstPage <= border) {
      for (let i = 1; i <= page + border; i++) {
        pages.push(i);
      }
      pages.push(separator);
      pages.push(lastPage);
    } else if (lastPage - page <= border) {
      pages.push(firstPage);
      pages.push(separator);
      for (let i = page - border; i <= lastPage; i++) {
        pages.push(i);
      }
    } else {
      pages.push(firstPage);
      pages.push(separator);
      for (let i = page - border; i <= page + border; i++) {
        pages.push(i);
      }
      pages.push(separator);
      pages.push(lastPage);
    }
  }
  return pages;
};

export default paginate;
