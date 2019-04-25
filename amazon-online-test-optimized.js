const comparator = (a, b) => {
  let secondHalfOfA = a.split(" ")[1];
  let secondHalfOfB = b.split(" ")[1];
  if (!Number(secondHalfOfA) && Number(secondHalfOfB)) {
    return -1;
  } else if (Number(secondHalfOfA) && !Number(secondHalfOfB)) {
    return 1;
  } else if (!Number(secondHalfOfA) && !Number(secondHalfOfB)) {
    if (secondHalfOfA < secondHalfOfB) {
      return -1;
    } else if (secondHalfOfA > secondHalfOfB) {
      return 1;
    } else {
      let firstHalfOfA = a.split(" ")[0];
      let firstHalfOfB = b.split(" ")[0];
      if (firstHalfOfA < firstHalfOfB) {
        return -1;
      } else if (firstHalfOfA > firstHalfOfB) {
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
  "ab2 asdlsdfsd",
  "ab2 1233213123",
  "ab1 asdlsdfsd",
  "ab1 4342342342"
];
prioritizedOrders(4, ordList);
