function saturdayFun (a = "roller-skate") {
    return `This Saturday, I want to ${a}!`;
    }
saturdayFun()

function mondayWork (b = 'go to the office'){
    return `This Monday, I will ${b}.`;
}

function wrapAdjective(d = '*') {

    const innerFunct = function (c = 'special'){
        return `You are ${d}${c}${d}!`;
    };
    return innerFunct
}
