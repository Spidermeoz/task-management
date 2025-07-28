module.exports = (query) => {
  let objectSearch = {
    keyword: "",
  };

  if (query.keyword) {
    objectSearch.keyword = query.keyword;
    objectSearch.regex = { $regex: objectSearch.keyword, $options: "i" }; // Tìm kiếm không phân biệt chữ hoa chữ thường
  }
  return objectSearch;
};
