$("#commentButton").on(click, TalkFunc());
function talkFunc() {
    wavenet.init("female", window.language()) //sets default voice
    $("#commentField").html().speak()
};
