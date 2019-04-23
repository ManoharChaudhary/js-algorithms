// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function prioritizedOrders(numOrders, orderList)
{
    // CREATED PRIME AND NON PRIME ORDER LIST 
    const [primeOrders, nonPrimeOrders ] = orderList.reduce(([pass, fail], order) => {
        return isPrimeOrder(order)
        ? [[...pass, order], fail] : [pass, [...fail, order]];
    },[[],[]]);
    
    // SORT PRIMEORDER ARRAY BY LEXOGRAPHIC ORDER
   primeOrders.sort((a, b) => {
        a = a.substring(a.indexOf(' ') + 1);
        b = b.substring(b.indexOf(' ') + 1);
       return  a.localeCompare(b)  
    }  );
    // CONCAT AND RETURN PRIMORDER AND NONPRIMEORDERS     
    return [...primeOrders, ...nonPrimeOrders];

}
// CHECK IS ORDER IS PRIME 
 function isPrimeOrder(order) {
      
         const orderString = order.substring(order.indexOf(' ') + 1);
         let firstChar = '';
        
         if(orderString) {
            firstChar = orderString.charAt(0);
         }else {
             return false;
         }
        
        if(firstChar && !Number(firstChar)) {
            return true
        }else {
            return false;
        }
 }
   var orderList = ['ab2 asdlsdfsd','ab2 1233213123','ab1 asdlsdfsd','ab1 4342342342'];
   var noOfOrders = 4;
   //\prioritizedOrders(noOfOrders, orderList); 
// FUNCTION SIGNATURE ENDS