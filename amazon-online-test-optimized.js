const comparator = (a, b) => {
  let metaDataOfA = a.split(" ")[1];
  let metaDataOfB = b.split(" ")[1];
  if (!Number(metaDataOfA) && Number(metaDataOfB)) {
    return -1;
  } else if (Number(metaDataOfA) && !Number(metaDataOfB)) {
    return 1;
  } else if (!Number(metaDataOfA) && !Number(metaDataOfB)) {
    if (metaDataOfA < metaDataOfB) {
      return -1;
    } else if (metaDataOfA > metaDataOfB) {
      return 1;
    } else {
      let identifierOfA = a.split(" ")[0];
      let identifierOfB = b.split(" ")[0];
      if (identifierOfA < identifierOfB) {
        return -1;
      } else if (identifierOfA > identifierOfB) {
        return 1;
      } else {
        return 0;
      }
    }
  } else {
    return 0;
  }
};

function prioritizedOrders(numOrders, orderList) {
  orderList.sort(comparator);
  return orderList;
}
var orderList = [
  "ab1 asdlsdfsd",
  "ab2 asdlsdfsd",
  "ab2 1233213123",
  "ab1 4342342342"
];
prioritizedOrders(4, ordList);
