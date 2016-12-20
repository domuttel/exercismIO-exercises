//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
    /* A teenager */
// Shouting (all upper case)
if ( input.toUpperCase() === input && /[A-Z]/.test(input)){

    return "Whoa, chill out!";
}
// Question (ends with a question mark)
// if ( /\?\s*$/.test(input) )
//     return "Sure.";
// Nothing (al white space)
// if ( /^\s*$/.test(input))
//     return "Fine. Be that way!";
// Default
return "Whatever.";
};

module.exports = Bob;
