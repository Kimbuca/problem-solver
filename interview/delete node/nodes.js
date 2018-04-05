function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;


var rootNode = a; 

deleteNode(b);


function deleteNode(target) {

	let currentNode = rootNode;
	let prevNode;

	while(currentNode !== target) {
		prevNode = currentNode;
		currentNode = currentNode.next;
	}

	prevNode.next = currentNode.next;
}