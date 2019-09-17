"use strict";
/*jshint esversion = 6 */


const DomElement = function (options, text) {
	this.selector = options.selector;
	this.height = options.height;
	this.width = options.width;
	this.bg = options.bg;
	this.fontSize = options.fontSize;
	this.text = text;
};

DomElement.prototype.createElement = function () {
	if (this.selector[0] === '.') {
		const div = document.createElement('div');
		div.style.cssText = `
			height: ${this.height};
			width: ${this.width};
			background: ${this.bg};
			fonst-size: ${this.fontSize};
		`;
		div.textContent = this.text;
		document.body.appendChild(div);
	} else if (this.selector[0] === '#') {
		const _p = document.createElement('p');
		_p.style.cssText = `
			height: ${this.height};
			width: ${this.width};
			background: ${this.bg};
			fonst-size: ${this.fontSize};
		`;
		_p.textContent = this.text;
		document.body.appendChild(_p);
	};
};

const optionSquareRed = {
	selector: '#square-red',
	height: '150px',
	width: '150px',
	bg: 'red',
	fontSize: '15px'
};

const square = new DomElement(optionSquareRed, 'Hello');
square.createElement();
