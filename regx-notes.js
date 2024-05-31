/* []      //single character
[abc123]000  // All Match   //a000 b000 c000 1000
[^a]000  // not matched a000  //    b000 c000 1000
(?<![a-zA-Z])000    ------ 000 a000 000 a000 000a //Negetive Lookbehind
[0-1]*  //secuence match
[0-9]{11}  //match only 11 numbers
[a-z]{4,8} // match 4 to 8 word length match
[a-z]{4,} // match 4 to Infinity word lenght match


// !meta character
\d match any digit character (same as [0-9] )
\w match any word character (a-z, A-Z, ,0-9, _)
\s match a whitespace character (space, tabs, newline)
\t match a tab character only

\d{3}\s\w{5}        // matched  // 455	65465


// !special character
+   => the one or more quantifier
/   => the escape character
[]  => the character set
[^] => the negate symbol in a character set
?   => the 0 or more quantifier (makes a preceding char optional)
.   => any character whatsoever (exept the newline character)
*   => the 0 or more quantifier (a bit like +)


abc?   // match // ab or abc   // optional the last character
a.     // match // a- or a...  // after a match any one chacter
.+     // match // match any chacter set
abc*   // match // ab or abc or abcccccc
abc\*  // match // abc* // skip special character on regEx


*/


/* Definitions
Look ahead positive (?=)
Find expression A where expression B follows:

ex:-A(?=B)

Look ahead negative (?!)
Find expression A where expression B does not follow:

ex:-A(?!B)

Look behind positive (?<=)
Find expression A where expression B precedes:

ex:-(?<=B)A

Look behind negative (?<!)
Find expression A where expression B does not precede:

ex:-(?<!B)A
 */