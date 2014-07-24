"use strict"

var SVGElement = require("./SVGElement.js")
  , inherits = require("util").inherits

var SVGShape = module.exports = function (elementName) {
    SVGElement.call(this, elementName)
}
inherits(SVGShape, SVGElement)

SVGShape.prototype.setStrokeColor = function (color) {
    this.rawSVGElement().style.stroke = color
}

SVGShape.prototype.setStrokeWidth = function (width) {
    this.rawSVGElement().style.strokeWidth = width
}