1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   
   (1) an expression that can include the count state variable that updates the value somehow
   (2) A callback function returning (1), that takes the previous count state variable as the parameter.


2. When would you want to pass the first option (from answer
   above) to the state setter function?

   When you don't have to depend on the previous count value.


3. When would you want to pass the second option (from answer
   above) to the state setter function?

   When you do.