/* 
As javascript follows applicative order for function evaluation, sqrt_iter will be evaluated first before passing
it as an argument. But, this creates infinite recursion as the conditional is truly never called and sqrt_iter
keeps on getting called.
*/