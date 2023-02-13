new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("张锦洋 and 梁新晴")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("永远在一起，在一起!")
    .pause(3000)
    .go();

new TypeIt('#talkToLXQ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();