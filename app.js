setTimeout(() => {
    console.log("こんばんわ");
}, 1000);

const worthlessTalk = function(greet) {
    return `${greet}、今日はいい天気ですね！`;
};

console.log(worthlessTalk("こんにちは"));