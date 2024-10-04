//In applicative-order evaluation, it gets stuck due to infinite recursion as arguments are evaluated first
//and since p calls itself infinitely, it gets stuck while evaluating p().
//In normal-order evaluation, it does not get stuck as p() is never evaluated. Final evaluation of expression
//is 0, without ever evaluating p()