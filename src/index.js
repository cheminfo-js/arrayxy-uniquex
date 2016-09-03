'use strict';

/**
 * In place modification of the 2 arrays to make X unique and sum the Y if X has the same value
 * @param xs : Array containing an array of the X elements
 * @param ys : Array containing an array of the Y elements
 */

function uniqueX(xs, ys) {
    if (xs.length < 2) return;
    if (xs.length !== ys.length) {
        throw new Error('The X and Y arrays mush have the same length');
    }
    
    var current = xs[0];
    var counter = 0;

    for (var i = 1; i < xs.length; i++) {
        if (current !== xs[i]) {
            counter++;
            current = xs[i];
            xs[counter] = xs[i];
            if (i !== counter) {
                ys[counter] = 0;
            }
        }
        if (i !== counter) {
            ys[counter] += ys[i];
        }

    }

    xs.length = counter + 1;
    ys.length = counter + 1;
}

module.exports = uniqueX;
