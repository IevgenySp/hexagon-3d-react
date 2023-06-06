"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hexagon_3d_1 = __importDefault(require("hexagon-3d"));
var Hexagon3D = function (props) {
    var width = props.width, height = props.height, rotateZ = props.rotateZ, rotateX = props.rotateX, growTop = props.growTop, showShadow = props.showShadow, shadowColor = props.shadowColor, topBottomColor = props.topBottomColor, sidesColor = props.sidesColor, opacity = props.opacity, showTransition = props.showTransition, topChildren = props.topChildren, bottomChildren = props.bottomChildren, side1Children = props.side1Children, side2Children = props.side2Children, side3Children = props.side3Children, side4Children = props.side4Children, side5Children = props.side5Children, side6Children = props.side6Children;
    var hexagonData = (0, hexagon_3d_1.default)({
        width: width,
        height: height,
        rotateZ: rotateZ,
        rotateX: rotateX,
        growTop: growTop,
        showShadow: showShadow,
        shadowColor: shadowColor,
        topBottomColor: topBottomColor,
        sidesColor: sidesColor,
        opacity: opacity,
        showTransition: showTransition
    });
    return (react_1.default.createElement("div", { style: hexagonData.container.style },
        react_1.default.createElement("div", { id: hexagonData.container.top.id, style: hexagonData.container.top.style }, topChildren),
        react_1.default.createElement("div", { id: hexagonData.container.side1.id, style: hexagonData.container.side1.style }, side1Children),
        react_1.default.createElement("div", { id: hexagonData.container.side2.id, style: hexagonData.container.side2.style }, side2Children),
        react_1.default.createElement("div", { id: hexagonData.container.side3.id, style: hexagonData.container.side3.style }, side3Children),
        react_1.default.createElement("div", { id: hexagonData.container.side4.id, style: hexagonData.container.side4.style }, side4Children),
        react_1.default.createElement("div", { id: hexagonData.container.side5.id, style: hexagonData.container.side5.style }, side5Children),
        react_1.default.createElement("div", { id: hexagonData.container.side6.id, style: hexagonData.container.side6.style }, side6Children),
        react_1.default.createElement("div", { id: hexagonData.container.bottom.id, style: hexagonData.container.bottom.style }, bottomChildren)));
};
exports.default = Hexagon3D;
