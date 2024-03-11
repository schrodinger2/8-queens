let counter = 0;
for (let i = 0; i < 4; i++) {
    for (let i2 = 0; i2 < 8; i2++) {
        if(!alignment(i,i2)){
        for (let i3 = 0; i3 < 8; i3++) {
            if(!alignment(i,i2,i3)){
            for (let i4 = 0; i4 < 8; i4++) {
                if(!alignment(i,i2,i3,i4)){
                for (let i5 = 0; i5 < 8; i5++) {
                    if(!alignment(i,i2,i3,i4,i5)){
                    for (let i6 = 0; i6 < 8; i6++) {
                        if(!alignment(i,i2,i3,i4,i5,i6)){
                            for (let i7 = 0; i7 < 8; i7++) {
                                if(!alignment(i,i2,i3,i4,i5,i6,i7)){
                                    for (let i8 = 0; i8 < 8; i8++) {
                                        if(!alignment(i,i2,i3,i4,i5,i6,i7,i8)){
                                            console.log([i,i2,i3,i4,i5,i6,i7,i8])
                                            counter++;
                                        }
                                    }
                                }
                            }
                        }
                    }}
                }}
            }}
        }}
    }    
}
function alignment(i1,i2,i3,i4,i5,i6,i7,i8) {
    for (let i = 0; i < arguments.length; i++) {
        for (let j = i+1; j < arguments.length; j++) {
            if (arguments[i] === arguments[j]) {
                return true
            }
        }
    }
    //if we get here it means no queens are on the same row
    let diag1 = [...arguments];
    let diag2 = [...arguments];
    for (let i = 1; i < arguments.length; i++) {
        diag1[i] = arguments[i] + i
        diag2[i] = arguments[i] - i
    }
    for (let i = 0; i < diag1.length; i++) {
        for (let j = i+1; j < diag1.length; j++) {
            if (diag1[i] === diag1[j] || diag2[i] === diag2[j]) {
                return true
            }
        }
    }
    return false;
}
// there are 92 possible solutions for this proplem this program only catches 46 the other solutions are just vertical mirrors 
