//the test in this file test should test the behaviour of each button

describe(' For Functionality of buttons', () => {

  beforeEach(() => {
    cy.visit('./index.html');
  });


  it('When the 0 button is pressed then it 0 should be displayed', () => {
    cy.get("button[value='0']").click();
    cy.get(".display").should('have.value',0);
  });

  it('When the 1 button is pressed then it 1 should be displayed', () => {
    cy.get("button[value='1']").click();
    cy.get(".display").should('have.value',1);
  });

  it('When the 2 button is pressed then it 2 should be displayed', () => {
    cy.get("button[value='2']").click();
    cy.get(".display").should('have.value',2);
  });

  it('When the 3 button is pressed then it 3 should be displayed', () => {
    cy.get("button[value='3']").click();
    cy.get(".display").should('have.value',3);
  });

  it('When the 4 button is pressed then it 4 should be displayed', () => {
    cy.get("button[value='4']").click();
    cy.get(".display").should('have.value',4);
  });

  it('When the 5 button is pressed then it 5 should be displayed', () => {
    cy.get("button[value='5']").click();
    cy.get(".display").should('have.value',5);
  });

  it('When the 6 button is pressed then it 6 should be displayed', () => {
    cy.get("button[value='6']").click();
    cy.get(".display").should('have.value',6);
  });

  it('When the 7 button is pressed then it 7 should be displayed', () => {
    cy.get("button[value='7']").click();
    cy.get(".display").should('have.value',7);
  });

  it('When the 8 button is pressed then it 8 should be displayed', () => {
    cy.get("button[value='8']").click();
    cy.get(".display").should('have.value',8);
  });

  it('When the 9 button is pressed then it 9 should be displayed', () => {
    cy.get("button[value='9']").click();
    cy.get(".display").should('have.value',9);

  });



  /**
   * MULTIPLICATION BUTTON FUNCTIONALITY
   */


  it(`Multiplication for Positive numbers (5*5 should display 25)`, () => {
    cy.get("button[value='5']").click();
    cy.get("button[value='*']").click();
    cy.get("button[value='5']").click();
    cy.get("button[value='=']").click();
    cy.get(".display").should('have.value',25);
  });

  it(`Multiplication for Positive and negative numbers numbers (5*-4*1 should display 20)`, () => {
    cy.get("button[value='5']").click();
    cy.get("button[value='*']").click();
    cy.get("button[value='-']").click();
    cy.get("button[value='4']").click();
    cy.get("button[value='*']").click();
    cy.get("button[value='1']").click();
    cy.get("button[value='=']").click();
    cy.get(".display").should('have.value',-20);
  });

  it(`Multiplication for negative and negative numbers numbers (-4*-4 * 2 should display 32)`, () => {
    cy.get("button[value='-']").click();
    cy.get("button[value='4']").click();
    cy.get("button[value='*']").click();
    cy.get("button[value='-']").click();
    cy.get("button[value='4']").click();
    cy.get("button[value='*']").click();
    cy.get("button[value='2']").click();
    cy.get("button[value='=']").click();
    cy.get(".display").should('have.value',32);
  });

  it(`Multiplication for number and NaN  (NaN * 2 should display NaN)`, () => {
    cy.get("button[value='0']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='*']").click();
    cy.get("button[value='2']").click();
    cy.get("button[value='=']").click();
    cy.get(".display").should('have.value',"NaN");
  });

  it(`Multiplication for number and Infinity  (Infinity * 2 should display Infinity)`, () => {
    cy.get("button[value='6']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='*']").click();
    cy.get("button[value='2']").click();
    cy.get("button[value='=']").click();
    cy.get(".display").should('have.value',"Infinity");
  });


  /**
   * DIVISION BUTTON FUNCTIONALITY
   */


   it(`Division for Positive numbers (25/5 should display 5)`, () => {
    cy.get("button[value='2']").click();
    cy.get("button[value='5']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='5']").click();
    cy.get("button[value='=']").click();
    cy.get(".display").should('have.value',5);
  });

  it(`Division for Positive and negative numbers (20/-5 should display -4)`, () => {
    cy.get("button[value='2']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='-']").click();
    cy.get("button[value='5']").click();
    cy.get("button[value='=']").click();
    cy.get(".display").should('have.value',-4);
  });


  it(`Division for negative and negative numbers (-100/-5 should display 20)`, () => {
    cy.get("button[value='-']").click();
    cy.get("button[value='1']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='-']").click();
    cy.get("button[value='5']").click();
    cy.get("button[value='=']").click();
    cy.get(".display").should('have.value',20);
  });

  it(`Division for number and NaN  (NaN / 2 should display NaN)`, () => {
    cy.get("button[value='0']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='2']").click();
    cy.get("button[value='=']").click();
    cy.get(".display").should('have.value',"NaN");
  });

  it(`Division for number and Infinity  (Infinity / 2 should display Infinity)`, () => {
    cy.get("button[value='6']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='2']").click();
    cy.get("button[value='=']").click();
    cy.get(".display").should('have.value',"Infinity");
  });





  /**
   * ADDITION BUTTON FUNCTIONALITY
   */


   it(`Addition for Positive numbers (5+5 should display 10)`, () => {
    cy.get("button[value='5']").click();
    cy.get("button[value='+']").click();
    cy.get("button[value='5']").click();
    cy.get("button[value='=']").click();
    cy.get(".display").should('have.value',10);
  });

  it(`Addition for Positive and negative numbers  (-4+5 should display 1)`, () => {
    cy.get("button[value='-']").click();
    cy.get("button[value='4']").click();
    cy.get("button[value='+']").click();
    cy.get("button[value='5']").click();;
    cy.get("button[value='=']").click();
    cy.get(".display").should('have.value',1);
  });

  it(`Addition for negative and negative numbers when operations arent
  separated  (-4+-4 should display Invalid Expression)`, () => {
    cy.get("button[value='-']").click();
    cy.get("button[value='4']").click();
    cy.get("button[value='+']").click();
    cy.get("button[value='-']").click();
    cy.get("button[value='4']").click();
    cy.get("button[value='=']").click();
    cy.get(".display").should('have.value',"Invalid Expression");
  });

  it(`Addtion for number and NaN  (NaN + 2 should display NaN)`, () => {
    cy.get("button[value='0']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='+']").click();
    cy.get("button[value='2']").click();
    cy.get("button[value='=']").click();
    cy.get(".display").should('have.value',"NaN");
  });

  it(`Addition for number and Infinity  (Infinity + 2 should display Infinity)`, () => {
    cy.get("button[value='6']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='+']").click();
    cy.get("button[value='2']").click();
    cy.get("button[value='=']").click();
    cy.get(".display").should('have.value',"Infinity");
  });


   /**
   * SUBTRACTION BUTTON FUNCTIONALITY
   */

    it(`Subtraction for Positive numbers (5-5 should display 0)`, () => {
      cy.get("button[value='5']").click();
      cy.get("button[value='-']").click();
      cy.get("button[value='5']").click();
      cy.get("button[value='=']").click();
      cy.get(".display").should('have.value',0);
    });
  
    it(`Subtraction for Positive and negative numbers  (4-5 should display -1)`, () => {
      cy.get("button[value='4']").click();
      cy.get("button[value='-']").click();
      cy.get("button[value='5']").click();;
      cy.get("button[value='=']").click();
      cy.get(".display").should('have.value',-1);
    });
  
    it(`Subtraction for negative and negatve numbers when operators are not separated 
    (-4--4 should display Invalid Expression)`, () => {
      cy.get("button[value='-']").click();
      cy.get("button[value='4']").click();
      cy.get("button[value='-']").click();
      cy.get("button[value='-']").click();
      cy.get("button[value='4']").click();
      cy.get("button[value='=']").click();
      cy.get(".display").should('have.value',"Invalid Expression");
    });
  
    it(`Multiplication for number and NaN  (NaN - 2 should display NaN)`, () => {
      cy.get("button[value='0']").click();
      cy.get("button[value='/']").click();
      cy.get("button[value='0']").click();
      cy.get("button[value='=']").click();
      cy.get("button[value='-']").click();
      cy.get("button[value='2']").click();
      cy.get("button[value='=']").click();
      cy.get(".display").should('have.value',"NaN");
    });
  
    it(`Substraction for number and Infinity  (Infinity - 2 should display Infinity)`, () => {
      cy.get("button[value='6']").click();
      cy.get("button[value='/']").click();
      cy.get("button[value='0']").click();
      cy.get("button[value='=']").click();
      cy.get("button[value='-']").click();
      cy.get("button[value='2']").click();
      cy.get("button[value='=']").click();
      cy.get(".display").should('have.value',"Infinity");
    });


  /**
   * POSITIVE TO NEGATIVE BUTTON
   */

  it(`When the +/- button is pressed and any positive number  is on display
   then the negative of that value should be on display`, () => {

    cy.get("button[value='0']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',0);
    cy.get("button[value='C']").click();
    
    cy.get("button[value='1']").click();
    cy.get("button[value='+/-']").click(); // makes number negative
    cy.get(".display").should('have.value',-1);
    cy.get("button[value='C']").click();

    cy.get("button[value='2']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',-2);
    cy.get("button[value='C']").click();

    cy.get("button[value='3']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',-3);
    cy.get("button[value='C']").click();

    cy.get("button[value='4']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',-4);
    cy.get("button[value='C']").click();

    cy.get("button[value='5']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',-5);
    cy.get("button[value='C']").click();

    cy.get("button[value='6']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',-6);
    cy.get("button[value='C']").click();

    cy.get("button[value='7']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',-7);
    cy.get("button[value='C']").click();

    cy.get("button[value='8']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',-8);
    cy.get("button[value='C']").click();

    cy.get("button[value='9']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',-9);
    cy.get("button[value='C']").click();

  });


  it(`When the +/- button is pressed and any negative number is on display
   then the positive of that value should be on display`, () => {

    cy.get("button[value='0']").click();
    cy.get("button[value='+/-']").click(); 
    cy.get("button[value='+/-']").click(); 
    cy.get(".display").should('have.value',0);
    cy.get("button[value='C']").click();
    
    cy.get("button[value='1']").click();
    cy.get("button[value='+/-']").click(); // makes number negative
    cy.get("button[value='+/-']").click();  //should change number to its positive representation
    cy.get(".display").should('have.value',1);
    cy.get("button[value='C']").click();

    cy.get("button[value='2']").click();
    cy.get("button[value='+/-']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',2);
    cy.get("button[value='C']").click();

    cy.get("button[value='3']").click();
    cy.get("button[value='+/-']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',3);
    cy.get("button[value='C']").click();

    cy.get("button[value='4']").click();
    cy.get("button[value='+/-']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',4);
    cy.get("button[value='C']").click();

    cy.get("button[value='5']").click();
    cy.get("button[value='+/-']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',5);
    cy.get("button[value='C']").click();

    cy.get("button[value='6']").click();
    cy.get("button[value='+/-']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',6);
    cy.get("button[value='C']").click();

    cy.get("button[value='7']").click();
    cy.get("button[value='+/-']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',7);
    cy.get("button[value='C']").click();

    cy.get("button[value='8']").click();
    cy.get("button[value='+/-']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',8);
    cy.get("button[value='C']").click();

    cy.get("button[value='9']").click();
    cy.get("button[value='+/-']").click();
    cy.get("button[value='+/-']").click();
    cy.get(".display").should('have.value',9);
    cy.get("button[value='C']").click();

    

  });


  /**
  * SQUARE ROOT BUTTON FUNCTIONALITY
  */

  it('The square root of 0 should display 0 in the div with class display', () => {
    cy.get("button[value='0']").click();
    cy.get("button[value='sqrt']").click();
    cy.get(".display").should('have.value',0);
  });

  it(`The div with class display should have content 35.12833614050059 when 
  the sqrt of 1235 is calculated`, () => {
    cy.get("button[value='1']").click();
    cy.get("button[value='2']").click();
    cy.get("button[value='3']").click();
    cy.get("button[value='4']").click();
    cy.get("button[value='sqrt']").click();
    cy.get(".display").should('have.value',35.12833614050059);
  });

  it(`The div with class display should have content 75.35250493513803 when 
  the sqrt of 5678 is calculated`, () => {
    cy.get("button[value='5']").click();
    cy.get("button[value='6']").click();
    cy.get("button[value='7']").click();
    cy.get("button[value='8']").click();
    cy.get("button[value='sqrt']").click();
    cy.get(".display").should('have.value',75.35250493513803);
  });

  /*** sqrt of negative */
  it(`The div with class display should have content 'NaN' when 
  the sqrt of -13579 is calculated`, () => {
    cy.get("button[value='1']").click();
    cy.get("button[value='3']").click();
    cy.get("button[value='5']").click();
    cy.get("button[value='7']").click();
    cy.get("button[value='9']").click();
    cy.get("button[value='+/-']").click();
    cy.get("button[value='sqrt']").click();
    cy.get(".display").should('have.value',"NaN");
  });

  it(`The div with class display should have content 'NaN' when 
  the sqrt of -24680 is calculated`, () => {
    cy.get("button[value='2']").click();
    cy.get("button[value='4']").click();
    cy.get("button[value='6']").click();
    cy.get("button[value='8']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='+/-']").click();
    cy.get("button[value='sqrt']").click();
    cy.get(".display").should('have.value',"NaN");
  });

  it(`The div with class display should have content 'NaN' when 
  the sqrt of 'NaN' is calculated`, () => {
    cy.get("button[value='2']").click();
    cy.get("button[value='4']").click();
    cy.get("button[value='6']").click();
    cy.get("button[value='+/-']").click();
    cy.get("button[value='sqrt']").click();
    cy.get("button[value='sqrt']").click();
    cy.get(".display").should('have.value',"NaN");
  });

  it(`The div with class display should have content 'NaN' when 
  the sqrt of an operator (+,-,/,*) is calculated`, () => {

    cy.get("button[value='+']").click();
    cy.get("button[value='sqrt']").click();
    cy.get(".display").should('have.value',"NaN");
    cy.get("button[value='C']").click();

    cy.get("button[value='-']").click();
    cy.get("button[value='sqrt']").click();
    cy.get(".display").should('have.value',"NaN");
    cy.get("button[value='C']").click();

    cy.get("button[value='/']").click();
    cy.get("button[value='sqrt']").click();
    cy.get(".display").should('have.value',"NaN");
    cy.get("button[value='C']").click();

    cy.get("button[value='*']").click();
    cy.get("button[value='sqrt']").click();
    cy.get(".display").should('have.value',"NaN");

  });

  it(`The div with class display should have content 'Infinity' when 
  the sqrt of infinity is calculated`, () => {
    cy.get("button[value='0']").click();
    cy.get("button[value='1']").click();
    cy.get("button[value='2']").click();
    cy.get("button[value='3']").click();
    cy.get("button[value='4']").click();
    cy.get("button[value='5']").click();
    cy.get("button[value='6']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='sqrt']").click();
    cy.get(".display").should('have.value',"Infinity");
    cy.get("button[value='C']").click();

  });



  /**
  * PERCENTAGE BUTTON FUNCTIONALITY
  */

   it(`When the % button is pressed then any value in the div with class display 
   will be divided by 100 to find the percentage and that value should be stored 
   in the div with class display`, () => {

    cy.get("button[value='0']").click();
    cy.get("button[value='percent']").click();
    cy.get(".display").should('have.value',0);
    cy.get("button[value='C']").click();

    cy.get("button[value='1']").click();
    cy.get("button[value='2']").click();
    cy.get("button[value='percent']").click();
    cy.get(".display").should('have.value',0.12);
    cy.get("button[value='C']").click();

    cy.get("button[value='3']").click();
    cy.get("button[value='4']").click();
    cy.get("button[value='5']").click();
    cy.get("button[value='percent']").click();
    cy.get(".display").should('have.value',3.45);
    cy.get("button[value='C']").click();

    cy.get("button[value='6']").click();
    cy.get("button[value='7']").click();
    cy.get("button[value='8']").click();
    cy.get("button[value='+/-']").click();
    cy.get("button[value='percent']").click();
    cy.get(".display").should('have.value',-6.78);
    cy.get("button[value='C']").click();

    cy.get("button[value='9']").click();
    cy.get("button[value='percent']").click();
    cy.get("button[value='percent']").click();
    cy.get(".display").should('have.value',0.0009);
    cy.get("button[value='C']").click();

  });

  it(`The div with class display should have content 'NaN' when 
  the percentage of NaN  is calculated`, () => {

    cy.get("button[value='+']").click();
    cy.get("button[value='sqrt']").click();
    cy.get("button[value='percent']").click();
    cy.get(".display").should('have.value',"NaN");
    cy.get("button[value='C']").click();

    cy.get("button[value='4']").click();
    cy.get("button[value='6']").click();
    cy.get("button[value='+/-']").click();
    cy.get("button[value='sqrt']").click();
    cy.get("button[value='percent']").click();
    cy.get(".display").should('have.value',"NaN");

  });

  it(`The div with class display should have content 'Infinity' when 
  the percentage of Infinity is calculated`, () => {

    cy.get("button[value='7']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='percent']").click();
    cy.get(".display").should('have.value',"Infinity");
    cy.get("button[value='C']").click();

  });

  /**
   * MRC BUTTON FUNCTIONALITY
   */

  it(`The div with class display should have content 5 when 
  the 2+3 is calculated, the diplay cleared and MRC is pressed`, () => {

    cy.get("button[value='2']").click();
    cy.get("button[value='+']").click();
    cy.get("button[value='3']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='C']").click();
    cy.get("button[value='MRC']").click();
    cy.get(".display").should('have.value',5);

  });

  it(`The div with class display should have content -1 when 
  the 6-4 is calculated, the diplay cleared, 7-8 is calculated
  the display is cleared again and MRC is pressed`, () => {

    cy.get("button[value='6']").click();
    cy.get("button[value='-']").click();
    cy.get("button[value='4']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='C']").click();
    cy.get("button[value='7']").click();
    cy.get("button[value='-']").click();
    cy.get("button[value='8']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='C']").click();
    cy.get("button[value='MRC']").click();
    cy.get(".display").should('have.value',-1);

  });

  it(`The div with class display should have content NaN when 
  the square root of -3 is calculated, the diplay cleared and MRC is pressed`, () => {

    cy.get("button[value='3']").click();
    cy.get("button[value='+/-']").click();
    cy.get("button[value='sqrt']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='C']").click();
    cy.get("button[value='MRC']").click();
    cy.get(".display").should('have.value',"NaN");

  });

  it(`The div with class display should have content Infinity when 
  the 1/0 is calculated, the diplay cleared and MRC is pressed`, () => {

    cy.get("button[value='1']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='C']").click();
    cy.get("button[value='MRC']").click();
    cy.get(".display").should('have.value',"Infinity");

  });

 
  /**double click MRC to clear memory */

  it(`The div with class display should have content '' when 
  the 1+1 is calculated, the diplay cleared and MRC is double clicked`, () => {

    cy.get("button[value='1']").click();
    cy.get("button[value='+']").click();
    cy.get("button[value='1']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='C']").click();
    cy.get("button[value='MRC']").dblclick();
    cy.get(".display").should('have.value','');

  });

  it(`The div with class display should have content '' when 
  the 2-4 is calculated, the diplay cleared, 45-8 is calculated
  the display is cleared again and MRC is double clicked`, () => {

    cy.get("button[value='2']").click();
    cy.get("button[value='-']").click();
    cy.get("button[value='4']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='C']").click();
    cy.get("button[value='4']").click();
    cy.get("button[value='5']").click();
    cy.get("button[value='-']").click();
    cy.get("button[value='8']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='C']").click();
    cy.get("button[value='MRC']").dblclick();
    cy.get(".display").should('have.value','');

  });

  it(`The div with class display should have content NaN when 
  the square root of -9 is calculated, the diplay cleared and MRC is pressed`, () => {

    cy.get("button[value='9']").click();
    cy.get("button[value='+/-']").click();
    cy.get("button[value='sqrt']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='C']").click();
    cy.get("button[value='MRC']").dblclick();
    cy.get(".display").should('have.value','');

  });

  it(`The div with class display should have content Infinity when 
  the 1/0 is calculated, the diplay cleared and MRC is pressed`, () => {

    cy.get("button[value='1']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='C']").click();
    cy.get("button[value='MRC']").dblclick();
    cy.get(".display").should('have.value','');

  });


  /**
   * M- Button Functionality
   */

  it(`When a value of a 100 is initially in memory, The div with class display should have content 50
  when 10 is on diplay and  M- pressed 5 times`, () => {

    cy.get("button[value='1']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();

    for (let index = 0; index < 5; index++) {
      cy.get("button[value='C']").click();
      cy.get("button[value='1']").click();
      cy.get("button[value='0']").click();
      cy.get("button[value='M-']").click();
      
    }
    cy.get(".display").should('have.value','50');


  });

  it(`When a value of a 50 is initially in memory, The div with class display should have content -60
  when 10 is on diplay and  M- pressed 10 times`, () => {

    cy.get("button[value='5']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();

    for (let index = 0; index < 11; index++) {
      cy.get("button[value='C']").click();
      cy.get("button[value='1']").click();
      cy.get("button[value='0']").click();
      cy.get("button[value='M-']").click();
      
    }
    cy.get(".display").should('have.value','-60');


  });


  it(`When a value of 10 is initially in memory, The div with class display should have content 100
  when -10 is on diplay and  M- pressed 9 times`, () => {

    cy.get("button[value='1']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();

    for (let index = 0; index < 9; index++) {
      cy.get("button[value='C']").click();
      cy.get("button[value='1']").click();
      cy.get("button[value='0']").click();
      cy.get("button[value='+/-']").click();
      cy.get("button[value='M-']").click();
      
    }
    cy.get(".display").should('have.value','100');


  });

  it(`When a value of NaN is initially in memory, The div with class display should have content NaN
  when -10 is on diplay and  M- pressed`, () => {

    cy.get("button[value='0']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();

    cy.get("button[value='C']").click();

    cy.get("button[value='1']").click();
    cy.get("button[value='0']").click();

    cy.get("button[value='M-']").click();

    cy.get(".display").should('have.value','NaN');
  });

  it(`When a value of Ininity is initially in memory, The div with class display should have content Ininity
  when 100 is on diplay and  M- pressed`, () => {

    cy.get("button[value='5']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();
    cy.get("button[value='C']").click();

    cy.get("button[value='1']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='0']").click();

    cy.get("button[value='M-']").click();

    cy.get(".display").should('have.value','Infinity');
  });


  /**
   * M+ Button Functionality
   */

   it(`When a value of a 100 is initially in memory, The div with class display should have content 150
   when 10 is on diplay and  M+ pressed 5 times`, () => {
 
     cy.get("button[value='1']").click();
     cy.get("button[value='0']").click();
     cy.get("button[value='0']").click();
     cy.get("button[value='=']").click();
 
     for (let index = 0; index < 5; index++) {
       cy.get("button[value='C']").click();
       cy.get("button[value='1']").click();
       cy.get("button[value='0']").click();
       cy.get("button[value='M+']").click();
       
     }
     cy.get(".display").should('have.value','150');
 
 
   });
 
   it(`When a value of a -50 is initially in memory, The div with class display should have content 80
   when 10 is on diplay and  M+ pressed twice times without clearing display each time`, () => {
 
     cy.get("button[value='5']").click();
     cy.get("button[value='0']").click();
     cy.get("button[value='+/-']").click();
     cy.get("button[value='=']").click();
     cy.get("button[value='C']").click();
 
     cy.get("button[value='1']").click();
     cy.get("button[value='0']").click();
     cy.get("button[value='M+']").click();
     cy.get("button[value='M+']").click();


     cy.get(".display").should('have.value','-80');
 
 
   });
 
 
   it(`When a value of 11 is initially in memory, The div with class display should have content 1
   when -10 is on diplay and  M+ pressed `, () => {
 
     cy.get("button[value='1']").click();
     cy.get("button[value='1']").click();
     cy.get("button[value='=']").click();
     cy.get("button[value='C']").click();
     cy.get("button[value='1']").click();
     cy.get("button[value='0']").click();
     cy.get("button[value='+/-']").click();
     cy.get("button[value='M+']").click();
     cy.get(".display").should('have.value','1');

   });
 
   it(`When a value of NaN is initially in memory, The div with class display should have content NaN
   when 5 is on diplay and  M+ pressed`, () => {
 
     cy.get("button[value='0']").click();
     cy.get("button[value='/']").click();
     cy.get("button[value='0']").click();
     cy.get("button[value='=']").click();
 
     cy.get("button[value='C']").click();
 
     cy.get("button[value='5']").click();
 
     cy.get("button[value='M+']").click();
 
     cy.get(".display").should('have.value','NaN');
   });
 
   it(`When a value of Ininity is initially in memory, The div with class display should have content Ininity
   when 10 is on diplay and  M+ pressed`, () => {
 
     cy.get("button[value='5']").click();
     cy.get("button[value='/']").click();
     cy.get("button[value='0']").click();
     cy.get("button[value='=']").click();
     cy.get("button[value='C']").click();
 
     cy.get("button[value='1']").click();
     cy.get("button[value='0']").click();
 
 
     cy.get("button[value='M+']").click();
 
     cy.get(".display").should('have.value','Infinity');
   });



  
  







  it(`Calculator converts values to scientific notation when the value is equal to or greater than 10^21`, () => {

    cy.get("button[value='1']").click();
    for (let index = 0; index < 20; index++) {
      cy.get("button[value='0']").click();
    }
    cy.get("button[value='*']").click();
    cy.get("button[value='1']").click();
    cy.get("button[value='0']").click();
    cy.get("button[value='=']").click();

    cy.get(".display").should('have.value','1e+21');
  });
  
  it('When the decimal button is pressed then no action should be taken', () => {
    cy.get("button[value='.']").click();
    cy.get(".display").should('have.value','');

    cy.get("button[value='2']").click();
    cy.get("button[value='.']").click();
    cy.get(".display").should('have.value','2');

    
    cy.get("button[value='4']").click();
    cy.get("button[value='.']").click();
    cy.get(".display").should('have.value','24');

    cy.get("button[value='.']").click();
    cy.get("button[value='/']").click();
    cy.get(".display").should('have.value','24/');

  });



  /**
   * NaN Expressions 
   * 
   * */ 

   it(`Pressing +/- withn an expression on display should show NaN `, () => {
     cy.get("button[value='1']").click();
     cy.get("button[value='-']").click();
     cy.get("button[value='1']").click();
     cy.get("button[value='+']").click();
     cy.get("button[value='5']").click();
     cy.get("button[value='+/-']").click();
     cy.get(".display").should('have.value','NaN');
   });

   it(`Pressing Square root with an expression on display should show NaN `, () => {
    cy.get("button[value='9']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='3']").click();
    cy.get("button[value='*']").click();
    cy.get("button[value='5']").click();
    cy.get("button[value='sqrt']").click();
    cy.get(".display").should('have.value','NaN');
  });

  it(`Pressing percentage with an expression on display should show NaN `, () => {
    cy.get("button[value='2']").click();
    cy.get("button[value='/']").click();
    cy.get("button[value='3']").click();
    cy.get("button[value='-']").click();
    cy.get("button[value='9']").click();
    cy.get("button[value='percent']").click();
    cy.get(".display").should('have.value','NaN');
  });

  
});
