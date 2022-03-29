/*
 * Unit tests 
 */

describe('Calculator', function() {

  // inject the HTML calculator for the tests
  beforeEach(function() {
    var calculator = '<div id="calculator">'+
    '    <input type="text" class="display" disabled>'+
    '      <div class="keys">'+
    '        <div class="row">'+
    '          <button value="+/-" class="operator">+/-</button>'+
    '          <button value="sqrt" class="operator">&#x221A</button>'+
    '          <button value="percent" class="operator">&#x25</button>'+
    '          <button value="/" class="operator">&#xf7</button>'+
    '        </div>'+
    '        <div class="row">'+
    '          <button value="MRC" class="operator">MRC</button>'+
    '          <button value="M-" class="operator">M-</button>'+
    '          <button value="M+" class="operator">M+</button>'+
    '          <button value="*" class="operator">*</button>'+
    '        </div>'+
    '      <div class="row">'+
    '        <button value="7">7</button>'+
    '        <button value="8">8</button>'+
    '        <button value="9">9</button>'+
    '        <button value="+" class="operator">+</button>'+
    '      </div>'+
    '      <div class="row">'+
    '        <button value="4">4</button>'+
    '        <button value="5">5</button>'+
    '        <button value="6">6</button>'+
    '        <button value="-" class="operator">-</button>'+
    '      </div>'+
    '      <div class="row">'+
    '        <button value="1">1</button>'+
    '        <button value="2">2</button>'+
    '        <button value="3">3</button>'+
    '        <button value="=" class="operator">=</button>'+
    '      </div>'+
    '      <div class="row">'+
    '        <button value="C" class="operator">C</button>'+
    '        <button value="0">0</button>'+
    '        <button value="." class="operator">.</button>'+
    '        <button style="visibility: hidden;" value="=" class="operator">=</button>'+
    '      </div>'+
    '    </div>'+
    '  </div>'

    document.body.insertAdjacentHTML(
      'afterbegin', 
      calculator);
    startUpCalculator();
  });

  // remove the html calculator from the DOM
  afterEach(function() {
    document.body.removeChild(document.getElementById('calculator'));
  });


 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/************* 6 test cases for basic addition with correct input *************/

it('should return 2 for 0 + 1', function() {
  document.querySelectorAll("button[value='0']")[0].click();
  document.querySelectorAll("button[value='+']")[0].click();
  document.querySelectorAll("button[value='1']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  expect(document.querySelector('.display').value).toBe('1');
});

it('should return 8 for 2 + 6', function() {
  document.querySelectorAll("button[value='2']")[0].click();
  document.querySelectorAll("button[value='+']")[0].click();
  document.querySelectorAll("button[value='6']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  expect(document.querySelector('.display').value).toBe('8');
});

it('should return 12 for 3 + 9', function() {
  document.querySelectorAll("button[value='3']")[0].click();
  document.querySelectorAll("button[value='+']")[0].click();
  document.querySelectorAll("button[value='9']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  expect(document.querySelector('.display').value).toBe('12');
});

it('should return 2 for 4 + 5', function() {
  document.querySelectorAll("button[value='4']")[0].click();
  document.querySelectorAll("button[value='+']")[0].click();
  document.querySelectorAll("button[value='5']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  expect(document.querySelector('.display').value).toBe('9');
});


it('should return 13 for 7 + 6', function() {
  document.querySelectorAll("button[value='7']")[0].click();
  document.querySelectorAll("button[value='+']")[0].click();
  document.querySelectorAll("button[value='6']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  expect(document.querySelector('.display').value).toBe('13');
});

it('should return 2 for 8 + 9', function() {
  document.querySelectorAll("button[value='8']")[0].click();
  document.querySelectorAll("button[value='+']")[0].click();
  document.querySelectorAll("button[value='9']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  expect(document.querySelector('.display').value).toBe('17');
});


  /************* 4 test cases for basic addition that will cause an error *************/
  it('should return Invalid Expression for + + +', function() {
    document.querySelectorAll("button[value='+']")[0].click();
    document.querySelectorAll("button[value='+']")[0].click();
    document.querySelectorAll("button[value='+']")[0].click();
    document.querySelectorAll("button[value='=']")[0].click();
    expect(document.querySelector('.display').value).toBe('Invalid Expression');
  });

  it('should return Invalid Expression for 6 + +', function() {
    document.querySelectorAll("button[value='6']")[0].click();
    document.querySelectorAll("button[value='+']")[0].click();
    document.querySelectorAll("button[value='+']")[0].click();
    document.querySelectorAll("button[value='=']")[0].click();
    expect(document.querySelector('.display').value).toBe('Invalid Expression');
  });

  it('should return Invalid Expression for 6 + 7 +', function() {
    document.querySelectorAll("button[value='6']")[0].click();
    document.querySelectorAll("button[value='+']")[0].click();
    document.querySelectorAll("button[value='7']")[0].click();
    document.querySelectorAll("button[value='+']")[0].click();
    document.querySelectorAll("button[value='=']")[0].click();
    expect(document.querySelector('.display').value).toBe('Invalid Expression');
  });

  it('should return Invalid Expression for +', function() {
    document.querySelectorAll("button[value='+']")[0].click();
    document.querySelectorAll("button[value='=']")[0].click();
    expect(document.querySelector('.display').value).toBe('Invalid Expression');
  });




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/************* 7 test cases for basic subtraction with correct input *************/
it('should return 5 for 1 - 3 - 3', function() {
  document.querySelectorAll("button[value='1']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
	document.querySelectorAll("button[value='3']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='3']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('-5');
});

it('should return  for 2 - 2', function() {
	document.querySelectorAll("button[value='2']")[0].click();
	document.querySelectorAll("button[value='-']")[0].click();
	document.querySelectorAll("button[value='2']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('0');
});

it('should return -6 for 3 - 9', function() {
	document.querySelectorAll("button[value='3']")[0].click();
	document.querySelectorAll("button[value='-']")[0].click();
	document.querySelectorAll("button[value='9']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('-6');
});

it('should return -4 for 4 - 5 - 1 - 2', function() {
	document.querySelectorAll("button[value='4']")[0].click();
	document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='5']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='1']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
	document.querySelectorAll("button[value='2']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('-4');
});



it('should return 5 for 6 - 0 - 1', function() {
	document.querySelectorAll("button[value='6']")[0].click();
	document.querySelectorAll("button[value='-']")[0].click();
	document.querySelectorAll("button[value='0']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='1']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('5');
});

it('should return 2 for 7 - 5', function() {
	document.querySelectorAll("button[value='7']")[0].click();
	document.querySelectorAll("button[value='-']")[0].click();
	document.querySelectorAll("button[value='5']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('2');
});

it('should return -1 for 8 - 9', function() {
	document.querySelectorAll("button[value='8']")[0].click();
	document.querySelectorAll("button[value='-']")[0].click();
	document.querySelectorAll("button[value='9']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('-1');
});



/************* 5 test cases for basic subtraction that will cause an error *************/
it('should return Invalid Expression for - - -', function() {
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  expect(document.querySelector('.display').value).toBe('Invalid Expression');
});

it('should return Invalid Expression for  - 3 -', function() {
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='3']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  expect(document.querySelector('.display').value).toBe('Invalid Expression');
});

it('should return Invalid Expression for  - 3 -', function() {
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='3']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  expect(document.querySelector('.display').value).toBe('Invalid Expression');
});

it('should return Invalid Expression for 93 - 7 - 0 -', function() {
  document.querySelectorAll("button[value='9']")[0].click();
  document.querySelectorAll("button[value='3']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='7']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='0']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  expect(document.querySelector('.display').value).toBe('Invalid Expression');
});

it('should return Invalid Expression for -', function() {
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  expect(document.querySelector('.display').value).toBe('Invalid Expression');
});


it('should return 72 for 9 * 8', function() {
	document.querySelectorAll("button[value='9']")[0].click();
	document.querySelectorAll("button[value='*']")[0].click();
	document.querySelectorAll("button[value='8']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('72');
});

it('should return 56 for 8 * 7', function() {
	document.querySelectorAll("button[value='8']")[0].click();
	document.querySelectorAll("button[value='*']")[0].click();
	document.querySelectorAll("button[value='7']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('56');
});

it('should return 18 for 6 * 3', function() {
	document.querySelectorAll("button[value='6']")[0].click();
	document.querySelectorAll("button[value='*']")[0].click();
	document.querySelectorAll("button[value='3']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('18');
});

it('should return 12 for 3 * 4', function() {
	document.querySelectorAll("button[value='3']")[0].click();
	document.querySelectorAll("button[value='*']")[0].click();
	document.querySelectorAll("button[value='4']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('12');
});

it('should return 0 for 2 * 0', function() {
	document.querySelectorAll("button[value='2']")[0].click();
	document.querySelectorAll("button[value='*']")[0].click();
	document.querySelectorAll("button[value='0']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('0');
});

it('should return 1 for 1 * 1', function() {
	document.querySelectorAll("button[value='1']")[0].click();
	document.querySelectorAll("button[value='*']")[0].click();
	document.querySelectorAll("button[value='1']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('1');
});

it('should return 0.75 for 3 / 4', function() {
	document.querySelectorAll("button[value='3']")[0].click();
	document.querySelectorAll("button[value='/']")[0].click();
	document.querySelectorAll("button[value='4']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('0.75');
});

it('should return Infinity for 3 / 0', function() {
	document.querySelectorAll("button[value='3']")[0].click();
	document.querySelectorAll("button[value='/']")[0].click();
	document.querySelectorAll("button[value='0']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('Infinity');
});

it('should return NaN for 0 / 0', function() {
	document.querySelectorAll("button[value='0']")[0].click();
	document.querySelectorAll("button[value='/']")[0].click();
	document.querySelectorAll("button[value='0']")[0].click();
	document.querySelectorAll("button[value='=']")[0].click();
	expect(document.querySelector('.display').value).toBe('NaN');
});







////PART 3//////////////////////PART 3////////////////// PART 3 ///////////////////PART 3//////////////////////////

/* +/- +/- +/- +/- +/- +/- +/- +/- Tests For negative positive +/- +/- +/- +/- +/- +/- +/- +/-  */

it('should return -345 Expression for 345 when +/- is pressed ', function() {
  document.querySelectorAll("button[value='3']")[0].click();
  document.querySelectorAll("button[value='4']")[0].click();
  document.querySelectorAll("button[value='5']")[0].click();
  document.querySelectorAll("button[value='+/-']")[0].click();
  expect(document.querySelector('.display').value).toBe('-345');
});

it('should return -420 Expression for 420 when +/- is pressed ', function() {
  document.querySelectorAll("button[value='4']")[0].click();
  document.querySelectorAll("button[value='2']")[0].click();
  document.querySelectorAll("button[value='0']")[0].click();
  document.querySelectorAll("button[value='+/-']")[0].click();
  expect(document.querySelector('.display').value).toBe('-420');
});

it('should return 15 Expression for - 15 when +/- is pressed ', function() {
  document.querySelectorAll("button[value='1']")[0].click();
  document.querySelectorAll("button[value='5']")[0].click();
  document.querySelectorAll("button[value='+/-']")[0].click();
  expect(document.querySelector('.display').value).toBe('-15');
});

it('should return NaN Expression for 2 + 9 - 8 when +/- is pressed ', function() {
  document.querySelectorAll("button[value='2']")[0].click();
  document.querySelectorAll("button[value='+']")[0].click();
  document.querySelectorAll("button[value='9']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='8']")[0].click();
  document.querySelectorAll("button[value='+/-']")[0].click();
  expect(document.querySelector('.display').value).toBe('NaN');
});


/*√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√ Tests For Square ROOT √√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√ */

it('should return 5 Expression for √ 25', function() {
  document.querySelectorAll("button[value='2']")[0].click();
  document.querySelectorAll("button[value='5']")[0].click();
  document.querySelectorAll("button[value='sqrt']")[0].click();
  expect(document.querySelector('.display').value).toBe('5');
});

it('should return 5 Expression for √ 62', function() {
  document.querySelectorAll("button[value='6']")[0].click();
  document.querySelectorAll("button[value='2']")[0].click();
  document.querySelectorAll("button[value='sqrt']")[0].click();
  expect(document.querySelector('.display').value).toBe('7.874007874011811');
});

it('should return NaN Expression for √ - 100', function() {
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='1']")[0].click();
  document.querySelectorAll("button[value='0']")[0].click();
  document.querySelectorAll("button[value='0']")[0].click();
  document.querySelectorAll("button[value='sqrt']")[0].click();
  expect(document.querySelector('.display').value).toBe('NaN');
});

it('should return NaN Expression for √ 8 + 5- 0', function() { //if the display has and expression when sqrt is called then it will be NaN
  document.querySelectorAll("button[value='8']")[0].click();
  document.querySelectorAll("button[value='+']")[0].click();
  document.querySelectorAll("button[value='5']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='0']")[0].click();
  document.querySelectorAll("button[value='sqrt']")[0].click();
  expect(document.querySelector('.display').value).toBe('NaN');
});

it('should return NaN Expression for √NaN', function() { //if the display has and expression when sqrt is called then it will be NaN
  document.querySelector('.display').value='NaN';
  document.querySelectorAll("button[value='sqrt']")[0].click();
  expect(document.querySelector('.display').value).toBe('NaN');
});



/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% TEST FOR PERCENTAGE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

it('should return 2349156.07 Expression for 234915607 when ÷ is pressed ', function() {
  document.querySelectorAll("button[value='2']")[0].click();
  document.querySelectorAll("button[value='3']")[0].click();
  document.querySelectorAll("button[value='4']")[0].click();
  document.querySelectorAll("button[value='9']")[0].click();
  document.querySelectorAll("button[value='1']")[0].click();
  document.querySelectorAll("button[value='5']")[0].click();
  document.querySelectorAll("button[value='6']")[0].click();
  document.querySelectorAll("button[value='0']")[0].click();
  document.querySelectorAll("button[value='7']")[0].click();
  document.querySelectorAll("button[value='percent']")[0].click();
  expect(document.querySelector('.display').value).toBe('2349156.07');
});

it('should return .09 Expression for 9 when ÷ is pressed ', function() {
  document.querySelectorAll("button[value='9']")[0].click();
  document.querySelectorAll("button[value='percent']")[0].click();
  expect(document.querySelector('.display').value).toBe('0.09');
});

it('should return -4.04 Expression for - 404 when ÷ is pressed ', function() {
  document.querySelectorAll("button[value='+/-']")[0].click();
  document.querySelectorAll("button[value='4']")[0].click();
  document.querySelectorAll("button[value='0']")[0].click();
  document.querySelectorAll("button[value='4']")[0].click();
  document.querySelectorAll("button[value='percent']")[0].click();
});

it('should return NaN Expression for 5 * 3 / 0 when ÷ is pressed ', function() {
  document.querySelectorAll("button[value='5']")[0].click();
  document.querySelectorAll("button[value='*']")[0].click();
  document.querySelectorAll("button[value='3']")[0].click();
  document.querySelectorAll("button[value='/']")[0].click();
  document.querySelectorAll("button[value='0']")[0].click();
  document.querySelectorAll("button[value='percent']")[0].click();
  expect(document.querySelector('.display').value).toBe('NaN');
});


/*mrc mrc mrc mrc mrc mrc  mrc mrc mrc TEST FOR MRC  mrc mrc mrc mrc mrc mrc mrc mrc mrc*/

it('should return 254  for 246 + 8 = when MRC is pressed ', function() {
  document.querySelectorAll("button[value='2']")[0].click();
  document.querySelectorAll("button[value='4']")[0].click();
  document.querySelectorAll("button[value='6']")[0].click();
  document.querySelectorAll("button[value='+']")[0].click();
  document.querySelectorAll("button[value='8']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  document.querySelectorAll("button[value='C']")[0].click();
  document.querySelectorAll("button[value='MRC']")[0].click();
  expect(document.querySelector('.display').value).toBe('254');
});

it('should return 24  for 48 / 2 = when MRC is pressed ', function() {
  document.querySelectorAll("button[value='4']")[0].click();
  document.querySelectorAll("button[value='8']")[0].click();
  document.querySelectorAll("button[value='/']")[0].click();
  document.querySelectorAll("button[value='2']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  document.querySelectorAll("button[value='C']")[0].click();
  document.querySelectorAll("button[value='MRC']")[0].click();
  expect(document.querySelector('.display').value).toBe('24');
});

it('should return Infinity for 9 / 0 = when MRC is pressed ', function() {
  document.querySelectorAll("button[value='9']")[0].click();
  document.querySelectorAll("button[value='/']")[0].click();
  document.querySelectorAll("button[value='0']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  document.querySelectorAll("button[value='C']")[0].click();
  document.querySelectorAll("button[value='MRC']")[0].click();
  expect(document.querySelector('.display').value).toBe('Infinity');
});

it('should return Infinity for 5 * / 9 = when MRC is pressed ', function() {
  document.querySelectorAll("button[value='5']")[0].click();
  document.querySelectorAll("button[value='*']")[0].click();
  document.querySelectorAll("button[value='/']")[0].click();
  document.querySelectorAll("button[value='9']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  document.querySelectorAll("button[value='C']")[0].click();
  document.querySelectorAll("button[value='MRC']")[0].click();
  expect(document.querySelector('.display').value).toBe('Infinity');
});

/*m- m- m- m- m- m- m- m- m- m- m- m- m- TEST FOR M-  m- m- m- m- m- m- m- m- m- m- m- m- m-*/

it('should return -8  for when 16 is on display, 8 is in memory,  when M- is pressed ', function() {
  document.querySelectorAll("button[value='4']")[0].click();
  document.querySelectorAll("button[value='+']")[0].click();
  document.querySelectorAll("button[value='4']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  document.querySelectorAll("button[value='C']")[0].click();
  document.querySelectorAll("button[value='1']")[0].click();
  document.querySelectorAll("button[value='6']")[0].click();
  document.querySelectorAll("button[value='M-']")[0].click();
  expect(document.querySelector('.display').value).toBe('-8');
});

it('should return 2  for when -7 is on display, -5 is in memory,  when M- is pressed ', function() {
  document.querySelectorAll("button[value='4']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='4']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  document.querySelectorAll("button[value='C']")[0].click();
  document.querySelectorAll("button[value='5']")[0].click();
  document.querySelectorAll("button[value='M-']")[0].click();
  document.querySelectorAll("button[value='C']")[0].click();
  document.querySelectorAll("button[value='-']")[0].click();
  document.querySelectorAll("button[value='7']")[0].click();
  document.querySelectorAll("button[value='M-']")[0].click();
  expect(document.querySelector('.display').value).toBe('2');
});


/*m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ TEST FOR M+ m+ m+ m+ m+m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ m+ m+*/

it('should return 13  for when 5 is on display, 8 is in memory,  when M+ is pressed ', function() {
  document.querySelectorAll("button[value='4']")[0].click();
  document.querySelectorAll("button[value='+']")[0].click();
  document.querySelectorAll("button[value='4']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  document.querySelectorAll("button[value='C']")[0].click();
  document.querySelectorAll("button[value='5']")[0].click();
  document.querySelectorAll("button[value='M+']")[0].click();
  expect(document.querySelector('.display').value).toBe('13');
});


it('should return NaN for when 5 is on display, NaN is in memory,  when M+ is pressed ', function() {
  document.querySelectorAll("button[value='0']")[0].click();
  document.querySelectorAll("button[value='/']")[0].click();
  document.querySelectorAll("button[value='0']")[0].click();
  document.querySelectorAll("button[value='=']")[0].click();
  document.querySelectorAll("button[value='C']")[0].click();
  document.querySelectorAll("button[value='5']")[0].click();
  document.querySelectorAll("button[value='M+']")[0].click();
  expect(document.querySelector('.display').value).toBe('NaN');
});












});

