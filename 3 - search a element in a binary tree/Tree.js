class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	add(data) {
		const node = this.root;
		if (node === null) {
			this.root = new Node(data);
			return;
		} else {
			const searchTree = (node) => {
				if (data < node.data) {
					if (node.left === null) {
						node.left = new Node(data);
						return;
					} else if (node.left !== null) {
						return searchTree(node.left);
					}
				} else if (data > node.data) {
					if (node.right === null) {
						node.right = new Node(data);
						return;
					} else if (node.right !== null) {
						return searchTree(node.right);
					}
				} else {
					return null;
				}
			};
			return searchTree(node);
		}
	}

	ordemSimetrica() {
		if (this.root === null) {
			return null;
		} else {
			var result = new Array();
			const emOrdem = (node) => {
				node.left && emOrdem(node.left);
				result.push(node.data);
				node.right && emOrdem(node.right);
			};
			emOrdem(this.root);
			return result;

		}

	}

	preOrdem() {
		if (this.root === null) {
			return null;
		} else {
			var result = new Array();
			const ordem = (node) => {
				result.push(node.data);
				node.left && ordem(node.left);
				node.right && ordem(node.right);
			};
			ordem(this.root);
			return result;
		}
	}

	posOrdem() {
		if (this.root === null) {
			return null;
		} else {
			var result = new Array();
			const ordem = (node) => {
				node.left && ordem(node.left);
				node.right && ordem(node.right);
				result.push(node.data);
			};
			ordem(this.root);
			return result;
		}
	}

	search(data) {

		let current = this.root;

		while (current) {
			if (data === current.data) {
				document.getElementById("msg").innerHTML = `O elemento está na lista`;
				return true;
			}
			if (data < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}
		}
		document.getElementById("msg").innerHTML = `O elemento não está na lista`;
		return false;
	}
}




const tree = new Tree();

function insert() {
	var value = document.getElementById('value').value;
	tree.add(value);
	document.getElementById("value").value = "";
}

function busca() {
	var value = document.getElementById('busca').value;
	tree.search(value);
	document.getElementById('busca').value = "";

}

function printEmOrdem() {
	document.getElementById("msg").innerHTML = `Em ordem simétrica: ${tree.ordemSimetrica()}`;
}

function printPreOrdem() {
	document.getElementById("msg").innerHTML = `Em pré-ordem: ${tree.preOrdem()}`;
}

function printPosOrdem() {
	document.getElementById("msg").innerHTML = `Em pós-ordem: ${tree.posOrdem()}`;
}

/* tree.add(10);
tree.add(9);
tree.add(11);

	console.log(`Ordem simétrica: ${tree.ordemSimetrica()}`);
	console.log(`Pré Ordem: ${tree.preOrdem()}`);
	console.log(`Pós Ordem: ${tree.posOrdem()}`);

 */