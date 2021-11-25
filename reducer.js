const INITIAL_sTATE = {
   mcqs: [
        {question:"Select Excel file Type",answer:["xlxs","html","css","js"],correct:"xlxs"},
        {question:"JSON Stand For",answer:["Demo","Demo","Demo","JSON"],correct:"JSON"},
        {question:"Select Php file Type",answer:["xlxs","php","css","js"],correct:"php"},
        {question:"Select css file Type",answer:["xlxs","html","css","js"],correct:"css"},
        {question:"Select Javascript file Type",answer:["xlxs","html","css","js"],correct:"js"},
        {question:"Html Stand For",answer:["HTML","Demo","Demo","Demo"],correct:"HTML"},
        {question:"Css Stand For",answer:["Demo","Demo","css","Demo"],correct:"css"},
        {question:"JS Stand For",answer:["Demo","Javascript","Demo","Demo"],correct:"Javascript"}
   ]
  };
  
  const reducer = (state = INITIAL_sTATE) => state;
  
  export default reducer;
  