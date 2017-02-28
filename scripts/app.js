module.exports = function(bot) {
    var greeting = ['hi', 'howdy', 'hello', 'good morning'];
    var adjective = ['Great!', 'Awesome.', 'You got it.', 'Excellent.'];
    var images = ["https://cdn.meme.am/cache/instances/folder270/56977270.jpg", "http://combiboilersleeds.com/images/you-can-do-it/you-can-do-it-9.jpg", "http://combiboilersleeds.com/image.php?pic=/images/you-can-do-it/you-can-do-it-7.jpg"];
    var toDo = [];
    bot.reply(greeting, function(msg) {
        return msg.send("Hi there! What did you need to do today? Type 'add' followed by your task");
    });
    bot.hear(/add (.*)/i, function(msg){
        toDo.push(msg.match[1]);
        return msg.send(msg.random(adjective) + ' I\'ve added ' + msg.match[1] + ' to your list. Anything else? \n\nTo check what you have so far, type "check"');
    });
    bot.hear('yes', function(msg){
        return msg.send(msg.random(adjective) + " What else should I add?");
    });
    bot.hear('no', function(msg){
        return msg.send(msg.random(adjective) + " Here are all the things you  need to do: " + toDo + ". " + msg.random(images));
    });
    bot.hear('check', function(msg) {
        if (toDo.length>3) {
            return msg.send('To Do List: ' + toDo + '\nYou\'re a busy bee! Anything else?')
        } else {
            return msg.send('To Do List: ' + toDo + '\nAnything else?')
        }
    });
}