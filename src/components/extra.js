/* eslint-disable no-useless-constructor */
import React from "react";
import ReactDOM from "react-dom";
import {TextInput} from  "./inputs"
import {Button} from "./buttons"
import analyse from "./analytics"
//functions
function createFields(numberOfFields){
    let content="";
    for (let i=0;i<numberOfFields;i++){
        content+="<DataInputs/>"
    }
    return (<div dangerouslySetInnerHTML={content}></div>)
}


//components
export class InputWithLabel extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.content=null;
        if(this.props.description){
            this.content = (
                <div>
                    <label for={this.props.placeholderVal}>{this.props.description}</label>
                    <TextInput placeholder={this.props.placeholderVal} onChange={this.handleChange} name={this.props.placeholderVal}>
                    </TextInput>
                </div>
            )
        }
        else{
            this.content=(
                <div>
                    <TextInput placeholder={this.props.placeholderVal} onChange={this.handleChange} name={this.props.placeholderVal} >
                    </TextInput>
                </div>
            )
        }
    }
    handleChange(e){
        this.props.onDimensionChange(e.target.value);
    }
    render(){
        return (
            <div class="input-group">
                {this.content}
            </div>
        )
    }
}
export class Dimensionality extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.handleChangeX = this.handleChangeX.bind(this);
        this.handleChangeY = this.handleChangeY.bind(this);
    }
    handleChangeX(dimensions){
        this.props.onDimensionChangeX(dimensions);
    }
    handleChangeY(dimensions){
        this.props.onDimensionChangeY(dimensions);
    }
    render(){
        return (
            <div className="data-dimensions-inputs">
                <InputWithLabel placeholderVal="Input dimensionality" description="Number of input values you want:" onDimensionChange={this.handleChangeX}/>
                <InputWithLabel placeholderVal="Output dimensionality" description="Number of output values you want:" onDimensionChange={this.handleChangeY}/>
            </div>
        )
    }
}

export class UnitsAndLayers extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.handleChangeUnits = this.handleChangeUnits.bind(this);
        this.handleChangeLayers = this.handleChangeLayers.bind(this);
    }
    handleChangeUnits(dimensions){
        this.props.onChangeUnits(dimensions);
    }
    handleChangeLayers(dimensions){
        this.props.onChangeLayers(dimensions);
    }
    render(){
        return (
            <div className="neural-net-specifics">
                <InputWithLabel placeholderVal="Number of units" description="Number of units in each layer:" onDimensionChange={this.handleChangeUnits}/>
                <InputWithLabel placeholderVal="Number of layers" description="Number of layers in model:" onDimensionChange={this.handleChangeLayers}/>
            </div>
        )
    }
}
/*
props ->
Xno,Yno,handleChangeX1-5, handleChangeY1-5
*/
export class DataInputs extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.handleChangeX1 = this.handleChangeX1.bind(this);
        this.handleChangeX2 = this.handleChangeX2.bind(this);
        this.handleChangeX3 = this.handleChangeX3.bind(this);
        this.handleChangeX4 = this.handleChangeX4.bind(this);
        this.handleChangeX5 = this.handleChangeX5.bind(this);
        this.handleChangeY1 = this.handleChangeY1.bind(this);
        this.handleChangeY2 = this.handleChangeY2.bind(this);
        this.handleChangeY3 = this.handleChangeY3.bind(this);
        this.handleChangeY4 = this.handleChangeY4.bind(this);
        this.handleChangeY5 = this.handleChangeY5.bind(this);
    }
    XInputs(){
        if(this.props.Xno === "5"){
            this.contentX = (
            <div>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX1}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX2}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX3}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX4}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX5}/>
            </div>
            );
        }
        else if(this.props.Xno === "4"){
            this.contentX = (
            <div>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX1}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX2}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX3}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX4}/>
            </div>
            );
        }
        else if(this.props.Xno === "3"){
            this.contentX = (
            <div>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX1}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX2}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX3}/>
            </div>
            );
        }
        else if(this.props.Xno === "2"){
            this.contentX = (
            <div>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX1}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX2}/>
            </div>
            );
        }
        else if(this.props.Xno === "1"){
            this.contentX = (
            <div>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX1}/>
            </div>
            );
        }
        else{
            this.contentX = (
                <div>
                    <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX1}/>
                    <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX2}/>
                    <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX3}/>
                    <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX4}/>
                    <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX5}/>
                </div>
                );
        }
        return this.contentX
    }
    YInputs(){
        if(this.props.Yno === "5"){
            this.contentY = (
            <div>
                <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY1}/>
                <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY2}/>
                <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY3}/>
                <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY4}/>
                <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY5}/>
            </div>
            );
        }
        else if(this.props.Yno === "4"){
            this.contentY = (
            <div>
                <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY1}/>
                <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY2}/>
                <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY3}/>
                <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY4}/>
            </div>
            );
        }
        else if(this.props.Yno === "3"){
            this.contentY = (
            <div>
                <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY1}/>
                <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY2}/>
                <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY3}/>
            </div>
            );
        }
        else if(this.props.Yno === "2"){
            this.contentY = (
            <div>
                <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY1}/>
                <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY2}/>
            </div>
            );
        }
        else if(this.props.Yno === "1"){
            this.contentY = (
            <div>
                <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY1}/>
            </div>
            );
        }
        else{
            this.contentY = (
                <div>
                    <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY1}/>
                    <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY2}/>
                    <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY3}/>
                    <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY4}/>
                    <InputWithLabel placeholderVal="Y Input" onDimensionChange={this.handleChangeY5}/>
                </div>
                );
        }
        return this.contentY;
    }
    handleChangeX1(e){
        this.props.handleChangeX1(e);
    }
    handleChangeX2(e){
        this.props.handleChangeX2(e);
    }
    handleChangeX3(e){
        this.props.handleChangeX3(e);
    }
    handleChangeX4(e){
        this.props.handleChangeX4(e);
    }
    handleChangeX5(e){
        this.props.handleChangeX5(e);
    }
    handleChangeY1(e){
        this.props.handleChangeY1(e);
    }
    handleChangeY2(e){
        this.props.handleChangeY2(e);
    }
    handleChangeY3(e){
        this.props.handleChangeY3(e);
    }
    handleChangeY4(e){
        this.props.handleChangeY4(e);
    }
    handleChangeY5(e){
        this.props.handleChangeY5(e);
    }
    render(){
        return (
            <div>
                {this.contentX}
                {this.contentY}
            </div>
        )
    }
}
export class PredDataInputs extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.handleChangeX1 = this.handleChangeX1.bind(this);
        this.handleChangeX2 = this.handleChangeX2.bind(this);
        this.handleChangeX3 = this.handleChangeX3.bind(this);
        this.handleChangeX4 = this.handleChangeX4.bind(this);
    }
    XInputs(){
        if(this.props.Xno === "5"){
            this.contentX = (
            <div>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX1}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX2}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX3}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX4}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX5}/>
            </div>
            );
        }
        else if(this.props.Xno === "4"){
            this.contentX = (
            <div>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX1}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX2}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX3}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX4}/>
            </div>
            );
        }
        else if(this.props.Xno === "3"){
            this.contentX = (
            <div>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX1}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX2}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX3}/>
            </div>
            );
        }
        else if(this.props.Xno === "2"){
            this.contentX = (
            <div>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX1}/>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX2}/>
            </div>
            );
        }
        else if(this.props.Xno === "1"){
            this.contentX = (
            <div>
                <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX1}/>
            </div>
            );
        }
        else{
            this.contentX = (
                <div>
                    <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX1}/>
                    <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX2}/>
                    <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX3}/>
                    <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX4}/>
                    <InputWithLabel placeholderVal="X Input" onDimensionChange={this.handleChangeX5}/>
                </div>
                );
        }
        return this.contentX
    }
    handleChangeX1(e){
        this.props.handleChangeX1(e);
    }
    handleChangeX2(e){
        this.props.handleChangeX2(e);
    }
    handleChangeX3(e){
        this.props.handleChangeX3(e);
    }
    handleChangeX4(e){
        this.props.handleChangeX4(e);
    }
    handleChangeX5(e){
        this.props.handleChangeX5(e);
    }
    render(){
        return (
            <div>
                {this.contentX}
            </div>
        )
    }
}
export class UI extends React.Component{
    constructor(props){
        super(props);
        this.x = [];
        this.y = [];
        this.xPred = [];
        this.x1 = 0;
        this.x2 = 0;
        this.x3 = 0;
        this.x4 = 0;
        this.x5 = 0;
        this.x1Pred = 0;
        this.x2Pred = 0;
        this.x3Pred = 0;
        this.x4Pred = 0;
        this.x5Pred = 0;
        this.y1 = 0;
        this.y2 = 0;
        this.y3 = 0;
        this.y4 = 0;
        this.y5 = 0;
        this.state = {
            XDims:"1",
            YDims:"1",
            Units:0,
            Layers:0,
            dimension:"enabled",
            unitsLayers:"enabled",
            spanContent:"No predicions",
        }
        this.handleChangeX1 = this.handleChangeX1.bind(this);
        this.handleChangeX2 = this.handleChangeX2.bind(this);
        this.handleChangeX3 = this.handleChangeX3.bind(this);
        this.handleChangeX4 = this.handleChangeX4.bind(this);
        this.handleChangeX5 = this.handleChangeX5.bind(this);
        this.handleChangeX1Pred = this.handleChangeX1Pred.bind(this);
        this.handleChangeX2Pred = this.handleChangeX2Pred.bind(this);
        this.handleChangeX3Pred = this.handleChangeX3Pred.bind(this);
        this.handleChangeX4Pred = this.handleChangeX4Pred.bind(this);
        this.handleChangeX5Pred = this.handleChangeX5Pred.bind(this);
        this.handleChangeY1 = this.handleChangeY1.bind(this);
        this.handleChangeY2 = this.handleChangeY2.bind(this);
        this.handleChangeY3 = this.handleChangeY3.bind(this);
        this.handleChangeY4 = this.handleChangeY4.bind(this);
        this.handleChangeY5 = this.handleChangeY5.bind(this);
        this.handleClickDimensionality = this.handleClickDimensionality.bind(this);
    }
    // analyse -> X,Y,units,layers,x,xLen,yLen
    handleAnalyse(){
        try {
            this.setState(
                {
                spanContent:analyse(this.x,
                    this.y,
                    this.state.Units,
                    this.state.Layers,
                    this.xPred,parseInt(this.state.XDims),
                    parseInt(this.state.YDims)).toString(10)
                }
            )
        } catch (error) {            
        }
    }
    handleDimensionalityChangeX(e){
        this.setState({
            XDims:e
          })
    }
    handleDimensionalityChangeY(e){
        this.setState({
            YDims:e
          })
    }
    handleUnitChange(e){
        this.setState({
            Units:parseInt(e)
          })
    }
    
    handleLayerChange(e){
        this.setState({
            layers:parseInt(e)
          })
    }
    onDataAdded(e){
        this.x.push([this.x1,this.x2,this.x3,this.x4,this.x5]);
        this.y.push([this.y1,this.y2,this.y3,this.y4,this.y5]);
    }
    onPredDataSubmitted(e){
        this.xPred = [];
        this.xPred.push([this.x1Pred,this.x2Pred,this.x3Pred,this.x4Pred,this.x5Pred]);
        this.handleAnalyse();
    }
    handleChangeX1Pred(e){
        this.x1Pred = e;
    }
    handleChangeX2Pred(e){
        this.x2Pred = e;
    }
    handleChangeX3Pred(e){
        this.x3Pred = e;
    }
    handleChangeX4Pred(e){
        this.x4Pred = e;
    }
    handleChangeX5Pred(e){
        this.x5Pred = e;
    }
    handleChangeX1(e){
        this.x1 = e;
    }
    handleChangeX2(e){
        this.x2 = e;
    }
    handleChangeX3(e){
        this.x3 = e;
    }
    handleChangeX4(e){
        this.x4 = e;
    }
    handleChangeX5(e){
        this.x5 = e;
    }
    handleChangeY1(e){
        this.y1 = e;
    }
    handleChangeY2(e){
        this.y2 = e;
    }
    handleChangeY3(e){
        this.y3 = e;
    }
    handleChangeY4(e){
        this.y4 = e;
    }
    handleChangeY5(e){
        this.y5 = e;
    }
    handleClickDimensionality(e){
        this.setState({
            dimension:"disabled",
        })
    }
    handleClickUnitsAndLayers(e){
        this.setState(
            {
                unitsLayers:"disabled",
            }
        )
    }
    render(){
        //DataInputs -> Xno,Yno,handleChangeX1-5, handleChangeY1-5
        return (
            <div class="container">
                <Dimensionality onDimensionChangeX={this.handleDimensionalityChangeX} onDimensionChangeY={this.handleDimensionalityChangeY}/>
                <Button onClick={this.handleClickDimensionality}>Commit Changes</Button>
                <UnitsAndLayers onChangeUnits={this.handleUnitChange} onChangeLayers={this.handleLayerChange}/>
                <Button onClick={this.handleClickUnitsAndLayers}>Commit Changes</Button>
                <DataInputs 
                Xno={this.state.XDims} 
                Yno={this.state.YDims} 
                handleChangeX1={this.handleChangeX1}
                handleChangeX2={this.handleChangeX2}
                handleChangeX3={this.handleChangeX3}
                handleChangeX4={this.handleChangeX4}
                handleChangeX5={this.handleChangeX5}
                handleChangeY1={this.handleChangeY1}
                handleChangeY2={this.handleChangeY2}
                handleChangeY3={this.handleChangeY3}
                handleChangeY4={this.handleChangeY4}
                handleChangeY5={this.handleChangeY5}
                />
                <Button onClick={this.onDataAdded}>Commit Data Changes</Button>
                <PredDataInputs 
                Xno={this.state.Xno}
                handleChangeX1={this.handleChangeX1Pred}
                handleChangeX2={this.handleChangeX2Pred}
                handleChangeX3={this.handleChangeX3Pred}
                handleChangeX4={this.handleChangeX4Pred}
                handleChangeX5={this.handleChangeX5Pred}
                />
                <Button onClick={this.onPredDataSubmitted}>Get your predictions</Button>
                <span class="predictions">{this.state.spanContent}</span>
            </div>
        )
    }
}
