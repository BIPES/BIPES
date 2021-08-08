/*
 * Queue using localstorage! 
 * Adapted from from:  https://www.javascripttutorial.net/javascript-queue/
*/

function Queue(num) {
   this.qn = num;
   var elements = JSON.parse(localStorage.getItem("queue" + this.qn));

   if (!elements) {
	   console.log("Creating a new queue");
	   var elements = [];
	   localStorage.setItem("queue" + this.qn, JSON.stringify(elements));
   }
   //console.log('queue' + num);
}

Queue.prototype.enqueue = function (e) {
   //console.log('push queue' + this.qn);
   var elements = JSON.parse(localStorage.getItem("queue" + this.qn));
   elements.push(e);
   localStorage.setItem("queue" + this.qn, JSON.stringify(elements));
};

Queue.prototype.dequeue = function () {
    var elements = JSON.parse(localStorage.getItem("queue" + this.qn));
    var x = elements.shift();
    localStorage.setItem("queue" + this.qn, JSON.stringify(elements));
    return x;
};

Queue.prototype.isEmpty = function () {
    var elements = JSON.parse(localStorage.getItem("queue" + this.qn));
    return elements.length == 0;
};

/*
Queue.prototype.peek = function () {
    var elements = JSON.parse(localStorage.getItem("queue"));
    return !isEmpty() ? elements[0] : undefined;
};
*/

Queue.prototype.length = function() {
    var elements = JSON.parse(localStorage.getItem("queue" + this.qn));
    return elements.length;
}


