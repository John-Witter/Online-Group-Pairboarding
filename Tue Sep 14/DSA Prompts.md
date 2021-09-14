Run-Length Encoding

Write a function that takes in a non-empty string and returns it’s run-length encoding. 

From Wikipedia, “run-length encoding is a form of lossless data compression in which runs of data are stored as a single data value and count, rather than as the original run.” For this problem, a run of data is any sequence of consecutive, identical characters. So the run “AAA” would be run-length encoded as “3A”. The input string nca contain all sorts of special characters, including numbers.

Sample I/Os:
‘AAAABBBCCD’ => ‘4A3B2C1D’
‘4332221111’ => ‘14233241’





Reverse Words in String

Write a function that takes in a string of words separated by the one or more whitespaces and returns a string that has these words in the reverse order. For example, given the string “tim is great”, your function should return “great is tim”.

For this problem, a word can contain special characters, punctuation, and numbers. The words in the will be separated by one or more whitespaces, and the reversed string must contain the same whitespace as the original string. For example, given the string “whitespaces    4” you would be expected to return “4    whitespaces”.

Note that you’re not allowed to use any built-in split, splice, slice, reverse, or reversed methods/functions. However, you are allowed to use a built-in join method/function.

Also note that the input string isn’t guaranteed to always contain words.


Sample I/Os:
“Take what works for you!” => “you! for works what Take”


