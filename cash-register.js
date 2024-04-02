function checkCashRegister(price, cash, cid) {

        let change = cash - price;

        let totalCid = 0;
        for (let i = 0; i < cid.length; i++) {
            totalCid += cid[i][1];
          }
         totalCid = totalCid.toFixed(2);

      const CURRENCY_AMOUNT = {
            "PENNY": .01,
            "NICKEL": .05,
            "DIME": .10,
            "QUARTER": .25,
            "ONE": 1.00,
            "FIVE": 5.00,
            "TEN": 10.00,
            "TWENTY": 20.00,
            "ONE HUNDRED": 100.00
          }

          let changeArray = [];
          if (change.toFixed(2) === totalCid) {
            return { status: "CLOSED", change: cid  };
          } else if (change > totalCid) {
            return { status: "INSUFFICIENT_FUNDS", change: changeArray };
          } else {
            cid = cid.reverse();
            for (let num of cid) {
              let amount = [num[0], 0];
              while (change >= CURRENCY_AMOUNT[num[0]] && num[1] > 0) {
                amount[1] += CURRENCY_AMOUNT[num[0]];
                num[1] -= CURRENCY_AMOUNT[num[0]];
                change -= CURRENCY_AMOUNT[num[0]];
                change = change.toFixed(2);
              }
              if (amount[1] > 0) {
                changeArray.push(amount);
              }
            }
          }
          if (change > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
          }
          return { status: "OPEN", change: changeArray};
        }
    
    

      //testing
    // console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], 
    //   ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
    //   ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


    // console.log(  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], 
    //   ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
    //   ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


    // console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], 
    //  ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], 
    //  ["ONE HUNDRED", 0]]));

    // console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], 
    //  ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], 
    //  ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

    // console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], 
    //  ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], 
    //  ["ONE HUNDRED", 0]]));

   
        // console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], 
        // ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
        // ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));